import { B as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as tools, t as Icon } from "./content-Clm7wQ2g.mjs";
import { r as Button } from "./router-Cxr-pj-I.mjs";
import { t as PageHero } from "./page-hero-BFLzJmXJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-YweTF5NN.js
var import_jsx_runtime = require_jsx_runtime();
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Tools",
			title: "The stack I actually ship with.",
			body: "Claude for intelligence. Automation for the glue. Custom interfaces when the off-the-shelf tool isn't enough."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page grid gap-6 py-14 lg:grid-cols-3",
			children: tools.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-extrabold tracking-tight",
					children: group.group
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-4",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.detail
						})]
					}, item.name))
				})]
			}, group.group))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-4 rounded-3xl bg-ink px-8 py-10 text-ink-fg sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-extrabold",
					children: "Need a custom tool?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-white/70",
					children: "If it doesn't exist, we build it."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Let's Talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				})]
			})
		})
	] });
}
//#endregion
export { ToolsPage as component };
