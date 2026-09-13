import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as testimonials, t as Icon } from "./content-Clm7wQ2g.mjs";
import { t as PageHero } from "./page-hero-BFLzJmXJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-rlZBNhTv.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Testimonials",
		title: "What clients say.",
		body: "Straight words from people who shipped with me."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page grid gap-5 py-14 sm:grid-cols-2",
		children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-3xl border border-border bg-card p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-0.5 text-primary",
					"aria-label": `${t.rating} out of 5`,
					children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "star",
						className: "size-4 fill-primary"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-[17px] leading-relaxed font-medium",
					children: [
						"“",
						t.quote,
						"”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: t.avatar,
						alt: "",
						className: "size-12 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t.role
					})] })]
				})
			]
		}, t.name))
	})] });
}
//#endregion
export { TestimonialsPage as component };
