import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { pauseSmoothScroll } from "@/components/motion-layer";
import { Button } from "@/components/ui/button";
import { site } from "@/data/content";
import { finalPrice, formatINR, type PricingPlan } from "@/data/pricing";
import { requestProposal } from "@/lib/proposal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validPhone(v: string) {
  const digits = v.replace(/\D/g, "").length;
  return /^[+\d\s()-]+$/.test(v.trim()) && digits >= 7 && digits <= 15;
}

type Status = "form" | "sending" | "sent" | "error";

/**
 * Pick a pack → confirm email + mobile → proposal is emailed → "Okay".
 * `plan` null = closed. The last plan stays rendered during the close animation.
 */
export function ProposalDialog({ plan, onClose }: { plan: PricingPlan | null; onClose: () => void }) {
  const open = plan !== null;
  const [shown, setShown] = useState<PricingPlan | null>(plan);
  const [form, setForm] = useState({ name: "", email: "", phone: "+91 ", website: "" });
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<Status>("form");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");

  useEffect(() => {
    if (!plan) return;
    setShown(plan);
    setStatus("form");
    setConfirmed(false);
    setError("");
  }, [plan]);

  useEffect(() => {
    pauseSmoothScroll(open);
    return () => pauseSmoothScroll(false);
  }, [open]);

  const emailOk = EMAIL_RE.test(form.email.trim());
  const phoneOk = validPhone(form.phone);
  const canSubmit = emailOk && phoneOk && confirmed && status !== "sending";

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!shown || !canSubmit) return;
    setStatus("sending");
    setError("");
    try {
      const res = await requestProposal({
        data: { planId: shown.id, name: form.name, email: form.email, phone: form.phone, website: form.website },
      });
      if (res.ok) {
        setSentTo(form.email.trim());
        setStatus("sent");
      } else {
        setError(res.message);
        setStatus("error");
      }
    } catch {
      setError(`Something went wrong. Please try again, or email ${site.email}.`);
      setStatus("error");
    }
  }

  const price = shown ? finalPrice(shown) : undefined;
  const mailto = shown
    ? `mailto:${site.email}?subject=${encodeURIComponent(`${shown.name} proposal request`)}&body=${encodeURIComponent(
        `Hi Vedprakash,\n\nPlease send me the ${shown.name} proposal.\n\nName: ${form.name}\nEmail: ${form.email}\nMobile: ${form.phone}\n`,
      )}`
    : `mailto:${site.email}`;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next && status !== "sending") onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay fixed inset-0 z-[90] bg-black/45 backdrop-blur-sm" />
        <Dialog.Content
          data-lenis-prevent
          className="dialog-panel fixed top-1/2 left-1/2 z-[91] max-h-[92dvh] w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-card p-6 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.5)] focus:outline-none sm:p-8"
        >
          {shown ? (
            status === "sent" ? (
              <div className="py-2 text-center">
                <svg
                  className="check-draw mx-auto size-20 text-primary"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="32" cy="32" r="25" />
                  <path d="M21 33l7.5 7.5L44 25" />
                </svg>
                <Dialog.Title className="font-display mt-4 text-2xl font-extrabold tracking-tight">
                  Proposal on its way
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted">
                  Your {shown.name} proposal — pricing, payment details and terms — has been sent to{" "}
                  <strong className="text-foreground">{sentTo}</strong>. It can take a minute; check your spam folder if
                  you don't see it.
                </Dialog.Description>
                <Button size="lg" className="mt-7 w-full" onClick={onClose}>
                  Okay
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                    <Icon name={shown.icon} className="size-3.5" />
                    {shown.name}
                    {price !== undefined ? <span className="text-primary/70">· {formatINR(price)}</span> : null}
                  </span>
                  <Dialog.Close
                    className="-mt-1 -mr-1 grid size-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
                    aria-label="Close"
                  >
                    <Icon name="close" className="size-4" />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="font-display mt-4 text-2xl font-extrabold tracking-tight">
                  Get your proposal
                </Dialog.Title>
                <Dialog.Description className="mt-1.5 text-sm leading-relaxed text-muted">
                  Confirm your email and mobile number. The proposal, pricing, payment details and terms arrive in your
                  inbox.
                </Dialog.Description>

                <div className="mt-6 space-y-4">
                  <Field label="Name" hint="Optional">
                    <input
                      className="field"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      autoComplete="name"
                      placeholder="Your name"
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Email" error={form.email && !emailOk ? "Enter a valid email address" : undefined}>
                    <input
                      className="field"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      autoComplete="email"
                      placeholder="you@company.com"
                      maxLength={254}
                    />
                  </Field>
                  <Field
                    label="Mobile number"
                    error={form.phone.replace(/\D/g, "").length > 2 && !phoneOk ? "Enter a valid mobile number" : undefined}
                  >
                    <input
                      className="field"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      maxLength={24}
                    />
                  </Field>
                  {/* Honeypot: hidden from people and assistive tech. */}
                  <div aria-hidden className="hidden">
                    <label>
                      Website
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                      />
                    </label>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-surface/60 p-3.5 text-sm leading-snug transition-colors has-[:checked]:border-primary/40 has-[:checked]:bg-primary-soft">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
                    />
                    <span>I confirm these details are correct and agree to receive this proposal by email.</span>
                  </label>
                </div>

                {status === "error" ? (
                  <p role="alert" className="mt-4 rounded-xl bg-primary-soft px-3.5 py-2.5 text-sm text-primary">
                    {error}{" "}
                    <a href={mailto} className="font-bold underline underline-offset-2">
                      Email me directly
                    </a>
                  </p>
                ) : null}

                <Button type="submit" size="lg" className="mt-6 w-full" disabled={!canSubmit}>
                  {status === "sending" ? (
                    <>
                      <Icon name="refresh" className="size-4 animate-spin" />
                      Sending proposal…
                    </>
                  ) : (
                    <>
                      Confirm & send proposal
                      <Icon name="arrow" className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-xs font-bold tracking-wide text-muted uppercase">
        {label}
        {hint ? <span className="font-semibold tracking-normal normal-case text-muted-2">{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs font-semibold text-primary">{error}</span> : null}
    </label>
  );
}
