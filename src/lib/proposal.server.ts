import { getRequestIP } from "@tanstack/react-start/server";
import { site } from "@/data/content";
import { finalPrice, formatINR, pricingPlans, type PlanId } from "@/data/pricing";
import { env } from "@/lib/env.server";
import type { ProposalResult } from "./proposal";

/**
 * Server-only proposal mailer (Resend HTTP API — no SDK needed).
 *
 * Configure in Vercel → Project → Settings → Environment Variables:
 *   RESEND_API_KEY        required — https://resend.com/api-keys
 *   PROPOSAL_FROM_EMAIL   required — a sender on a domain verified in Resend,
 *                         e.g. "Vedprakash <proposals@yourdomain.com>"
 *   OWNER_EMAIL           optional — where lead alerts go (defaults to site email)
 *   BUSINESS_LEGAL_NAME, BUSINESS_ADDRESS, BUSINESS_GSTIN, BUSINESS_PAN     optional
 *   BANK_ACCOUNT_NAME, BANK_NAME, BANK_ACCOUNT_NUMBER, BANK_IFSC,
 *   BANK_BRANCH, BANK_UPI_ID                                               optional
 * Bank and legal details live in env vars (not in the public repo). Any that
 * are unset are simply left out of the email.
 */

type Input = { planId: PlanId; name: string; email: string; phone: string; website?: string };

/**
 * Standard engagement terms included in every proposal. A starting template
 * — review with your CA/lawyer and edit to match how you actually work.
 */
const TERMS = [
  "Scope: the deliverables listed in this proposal. Anything outside it is quoted separately before work begins.",
  "Payment: 50% advance to start the project; the remaining 50% before final files are delivered.",
  "Timeline: starts once the advance, brief and brand assets are received. Delays in feedback move the delivery date accordingly.",
  "Revisions: as included in your pack. Additional rounds are billed separately.",
  "Ownership: usage rights to final deliverables transfer to you on full payment. I may show the work in my portfolio unless we sign an NDA.",
  "Third-party tools, stock, fonts and AI platforms are used under their own licence terms.",
  "Taxes such as GST are charged extra where applicable.",
  "The advance is non-refundable once work has started.",
  "This proposal is valid for 15 days from the date it was sent.",
];

// Best-effort abuse limits. Serverless instances are short-lived, so this
// throttles bursts rather than guaranteeing a global limit.
const EMAIL_COOLDOWN_MS = 10 * 60 * 1000;
const IP_WINDOW_MS = 60 * 60 * 1000;
const IP_MAX = 5;
const lastByEmail = new Map<string, number>();
const hitsByIp = new Map<string, number[]>();

function rateLimited(email: string, ip: string | undefined): boolean {
  const now = Date.now();
  const last = lastByEmail.get(email);
  if (last && now - last < EMAIL_COOLDOWN_MS) return true;
  if (ip) {
    const hits = (hitsByIp.get(ip) ?? []).filter((t) => now - t < IP_WINDOW_MS);
    if (hits.length >= IP_MAX) return true;
    hits.push(now);
    hitsByIp.set(ip, hits);
  }
  lastByEmail.set(email, now);
  return false;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

function rows(pairs: [string, string | undefined][]): [string, string][] {
  return pairs.filter((p): p is [string, string] => Boolean(p[1]));
}

function table(pairs: [string, string][]) {
  return `<table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px">${pairs
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 0;color:#6b6b6b;width:42%">${escapeHtml(k)}</td><td style="padding:6px 0;color:#0c0c0c;font-weight:600">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;
}

export async function sendProposal(input: Input): Promise<ProposalResult> {
  // Bots fill the hidden field — pretend success so they learn nothing.
  if (input.website) return { ok: true };

  const apiKey = env("RESEND_API_KEY");
  const from = env("PROPOSAL_FROM_EMAIL");
  const owner = env("OWNER_EMAIL") ?? site.email;
  if (!apiKey || !from) {
    return {
      ok: false,
      message: `Automatic proposals aren't switched on yet. Email ${site.email} or call ${site.phone} and I'll send yours right away.`,
    };
  }

  const plan = pricingPlans.find((p) => p.id === input.planId);
  if (!plan) return { ok: false, message: "That pack no longer exists — please refresh the page." };

  const email = input.email.toLowerCase();
  let ip: string | undefined;
  try {
    ip = getRequestIP({ xForwardedFor: true });
  } catch {
    ip = undefined;
  }
  if (rateLimited(email, ip)) {
    return { ok: false, message: "A proposal was sent to this email a few minutes ago — please check your inbox and spam folder." };
  }

  const price = finalPrice(plan);
  const pricing: [string, string][] =
    plan.listPrice !== undefined && price !== undefined
      ? rows([
          ["Pack", plan.name],
          ["List price", formatINR(plan.listPrice)],
          ["Discount", plan.discountPct ? `${plan.discountPct}%` : undefined],
          ["Your price", formatINR(price)],
          ["Advance to start (50%)", formatINR(Math.round(price / 2))],
        ])
      : [
          ["Pack", plan.name],
          ["Pricing", "Custom quote after a short discovery call"],
        ];

  const business = rows([
    ["Business name", env("BUSINESS_LEGAL_NAME") ?? site.name],
    ["Address", env("BUSINESS_ADDRESS")],
    ["GSTIN", env("BUSINESS_GSTIN")],
    ["PAN", env("BUSINESS_PAN")],
    ["Email", site.email],
    ["Phone", site.phone],
  ]);
  const bank = rows([
    ["Account name", env("BANK_ACCOUNT_NAME")],
    ["Bank", env("BANK_NAME")],
    ["Account number", env("BANK_ACCOUNT_NUMBER")],
    ["IFSC", env("BANK_IFSC")],
    ["Branch", env("BANK_BRANCH")],
    ["UPI ID", env("BANK_UPI_ID")],
  ]);

  const greetingName = input.name ? escapeHtml(input.name) : "there";
  const section = (title: string, body: string) =>
    `<h2 style="margin:28px 0 10px;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:#e11d2e">${title}</h2>${body}`;

  const html = `<!doctype html><html><body style="margin:0;background:#f3f3f4;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:600px;margin:0 auto;padding:24px">
<div style="background:#0a0a0a;color:#fff;border-radius:18px 18px 0 0;padding:28px">
<p style="margin:0;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#ff5a67">Proposal</p>
<h1 style="margin:8px 0 0;font-size:26px">${escapeHtml(plan.name)} — ${escapeHtml(site.name)}</h1>
<p style="margin:8px 0 0;color:#bdbdbd;font-size:14px">${escapeHtml(plan.tagline)}</p>
</div>
<div style="background:#fff;border-radius:0 0 18px 18px;padding:28px;color:#0c0c0c;font-size:14px;line-height:1.6">
<p style="margin:0">Hi ${greetingName},</p>
<p>Thank you for choosing the <strong>${escapeHtml(plan.name)}</strong>. Here is everything you need to get started — scope, pricing, payment details and terms.</p>
${section("Pricing", table(pricing))}
${section(plan.includesFrom ? `What's included (everything in ${escapeHtml(plan.includesFrom)}, plus)` : "What's included", `<ul style="margin:0;padding-left:18px">${plan.features.map((f) => `<li style="margin:4px 0">${escapeHtml(f)}</li>`).join("")}</ul>`)}
${section("How we start", `<ol style="margin:0;padding-left:18px"><li>Reply to this email to confirm the pack (or ask for changes).</li><li>Pay the 50% advance using the details below and share the payment reference.</li><li>Send your brief and brand assets — work begins and you get a timeline.</li></ol>`)}
${section("Payment details", bank.length ? table(bank) : "<p style=\"margin:0\">Bank details will be shared with your invoice.</p>")}
${section("Business details", table(business))}
${section("Terms of engagement", `<ol style="margin:0;padding-left:18px;color:#3d3d3d">${TERMS.map((t) => `<li style="margin:4px 0">${escapeHtml(t)}</li>`).join("")}</ol>`)}
<p style="margin-top:28px">Questions? Just reply to this email or call ${escapeHtml(site.phone)}.</p>
<p style="margin:0">— ${escapeHtml(site.name)}</p>
</div></div></body></html>`;

  const text = [
    `Hi ${input.name || "there"},`,
    "",
    `Thank you for choosing the ${plan.name}.`,
    "",
    "PRICING",
    ...pricing.map(([k, v]) => `${k}: ${v}`),
    "",
    "WHAT'S INCLUDED",
    ...plan.features.map((f) => `- ${f}`),
    "",
    "PAYMENT DETAILS",
    ...(bank.length ? bank.map(([k, v]) => `${k}: ${v}`) : ["Bank details will be shared with your invoice."]),
    "",
    "BUSINESS DETAILS",
    ...business.map(([k, v]) => `${k}: ${v}`),
    "",
    "TERMS OF ENGAGEMENT",
    ...TERMS.map((t, i) => `${i + 1}. ${t}`),
    "",
    `Questions? Reply to this email or call ${site.phone}.`,
    `— ${site.name}`,
  ].join("\n");

  try {
    await sendEmail(apiKey, {
      from,
      to: [email],
      reply_to: owner,
      subject: `Your ${plan.name} proposal — ${site.name}`,
      html,
      text,
    });
  } catch (err) {
    lastByEmail.delete(email);
    console.error("[proposal] client email failed:", err instanceof Error ? err.message : err);
    return { ok: false, message: `Couldn't send the email just now. Please try again, or email ${site.email}.` };
  }

  // Lead alert for the owner — a failure here shouldn't fail the visitor's request.
  try {
    await sendEmail(apiKey, {
      from,
      to: [owner],
      reply_to: email,
      subject: `New ${plan.name} proposal request`,
      text: [`Pack: ${plan.name}`, `Name: ${input.name || "—"}`, `Email: ${email}`, `Mobile: ${input.phone}`, `Sent: ${new Date().toISOString()}`].join("\n"),
    });
  } catch (err) {
    console.error("[proposal] owner alert failed:", err instanceof Error ? err.message : err);
  }

  return { ok: true };
}
