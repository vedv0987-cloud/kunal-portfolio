export type Inquiry = {
  id: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
};

const KEY = "kunal-inquiries";
const THEME_KEY = "kunal-theme";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadInquiries(): Inquiry[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveInquiry(input: Omit<Inquiry, "id" | "createdAt">): Inquiry {
  const inquiry: Inquiry = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [inquiry, ...loadInquiries()];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  return inquiry;
}

export function clearInquiries() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(KEY);
}

export function downloadInquiries(list: Inquiry[]) {
  const blob = new Blob([JSON.stringify(list, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kunal-inquiries.json";
  a.click();
  URL.revokeObjectURL(url);
}

export type Theme = "light" | "dark";

export function loadTheme(): Theme {
  if (!canUseStorage()) return "light";
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function persistTheme(theme: Theme) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(THEME_KEY, theme);
}
