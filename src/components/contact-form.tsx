import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { budgetOptions, serviceOptions } from "@/data/content";
import {
  clearInquiries,
  downloadInquiries,
  loadInquiries,
  saveInquiry,
  type Inquiry,
} from "@/lib/storage";

const empty = {
  name: "",
  email: "",
  service: "Website Development",
  budget: "Let's talk",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [saved, setSaved] = useState<Inquiry[]>([]);

  useEffect(() => {
    setSaved(loadInquiries());
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please add your name, email, and a short brief.");
      return;
    }
    saveInquiry({
      name: form.name.trim(),
      email: form.email.trim(),
      service: form.service,
      budget: form.budget,
      message: form.message.trim(),
    });
    setSaved(loadInquiries());
    setForm(empty);
    toast.success("Brief saved on this device.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
      >
        <h2 className="font-display text-2xl font-extrabold tracking-tight">Start a project</h2>
        <p className="mt-1 text-sm text-muted">
          Your brief is saved on this device so you can come back to it anytime.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="field"
              placeholder="Your name"
              autoComplete="name"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="field"
              placeholder="you@studio.com"
              autoComplete="email"
            />
          </Field>
          <Field label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="field"
            >
              {serviceOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field label="Budget">
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="field"
            >
              {budgetOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field label="Tell me about the idea" className="sm:col-span-2">
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="field min-h-32 resize-y"
              placeholder="What should we build, and what does success look like?"
            />
          </Field>
        </div>

        <Button type="submit" size="lg" className="mt-6">
          Save brief
          <Icon name="arrow" className="size-4" />
        </Button>
      </form>

      <aside className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold">Saved briefs</h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-border bg-card disabled:opacity-40"
              onClick={() => downloadInquiries(saved)}
              disabled={saved.length === 0}
              aria-label="Download briefs as JSON"
            >
              <Icon name="download" className="size-4" />
            </button>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-border bg-card disabled:opacity-40"
              onClick={() => {
                clearInquiries();
                setSaved([]);
                toast.message("Cleared saved briefs.");
              }}
              disabled={saved.length === 0}
              aria-label="Clear saved briefs"
            >
              <Icon name="trash" className="size-4" />
            </button>
          </div>
        </div>
        {saved.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            Nothing saved yet. Submit a brief and it will live here on this device.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {saved.map((item) => (
              <li key={item.id} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-xs text-muted">{item.service}</p>
                <p className="mt-2 line-clamp-3 text-sm">{item.message}</p>
                <p className="mt-2 text-[11px] text-muted-2">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-muted uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
