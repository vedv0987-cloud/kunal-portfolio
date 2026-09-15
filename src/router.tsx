import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    // Start loading a page's code when a link is hovered/focused, so the click feels instant.
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}
