import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const proposalInput = z.object({
  planId: z.enum(["starter", "pro", "premium", "enterprise"]),
  name: z.string().trim().max(80).default(""),
  email: z.string().trim().max(254).email(),
  phone: z
    .string()
    .trim()
    .max(24)
    .refine((v) => /^[+\d\s()-]+$/.test(v) && v.replace(/\D/g, "").length >= 7 && v.replace(/\D/g, "").length <= 15, {
      message: "Enter a valid mobile number",
    }),
  /** Honeypot — hidden from people, filled in by bots. */
  website: z.string().max(200).optional(),
});

export type ProposalInput = z.input<typeof proposalInput>;
export type ProposalResult = { ok: true } | { ok: false; message: string };

/** Emails the chosen pack's proposal (pricing, payment details, terms) to the visitor and notifies the owner. */
export const requestProposal = createServerFn({ method: "POST" })
  .inputValidator(proposalInput)
  .handler(async ({ data }): Promise<ProposalResult> => {
    const { sendProposal } = await import("./proposal.server");
    return sendProposal(data);
  });
