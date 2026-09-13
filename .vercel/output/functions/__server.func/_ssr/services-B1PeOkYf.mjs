import { B as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Icon, u as services } from "./content-Clm7wQ2g.mjs";
import { r as Button } from "./router-Cxr-pj-I.mjs";
import { t as PageHero } from "./page-hero-BFLzJmXJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B1PeOkYf.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Services",
		title: "What I can build for you.",
		body: "Websites, automations, bots and custom tools — scoped to the outcome, not a bloated stack."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page grid gap-5 py-14",
		children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: s.slug,
			className: "scroll-mt-24 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: s.icon,
						className: "size-5"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-4 text-2xl font-extrabold tracking-tight",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: s.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Start this", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "check",
						className: "mt-0.5 size-4 text-primary"
					}), d]
				}, d))
			})]
		}, s.slug))
	})] });
}
//#endregion
export { ServicesPage as component };
