export type Inquiry = {
  id: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
};

const KEY = "vedprakash-inquiries";

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
  a.download = "vedprakash-inquiries.json";
  a.click();
  URL.revokeObjectURL(url);
}
