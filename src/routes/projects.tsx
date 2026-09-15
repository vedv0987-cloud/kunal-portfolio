import { createFileRoute, Outlet } from "@tanstack/react-router";

type WorkSearch = { category?: string };

export const Route = createFileRoute("/projects")({
  // `?category=Healthcare` preselects that filter tab — Home's Featured Work
  // cards link here so a click lands on the matching category, not "All".
  validateSearch: (search: Record<string, unknown>): WorkSearch => ({
    category: typeof search.category === "string" && search.category ? search.category : undefined,
  }),
  component: () => <Outlet />,
});
