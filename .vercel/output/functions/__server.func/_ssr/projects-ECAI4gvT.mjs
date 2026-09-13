import { B as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as projects, t as Icon } from "./content-Clm7wQ2g.mjs";
import { t as PageHero } from "./page-hero-BFLzJmXJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-ECAI4gvT.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Projects",
		title: "Selected work.",
		body: "A few systems shipped recently — bots, automations, and sites that actually get used."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page grid gap-6 py-14 sm:grid-cols-2",
		children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/projects/$slug",
			params: { slug: p.slug },
			className: "group overflow-hidden rounded-3xl border border-border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/10] overflow-hidden bg-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: "",
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display mt-3 flex items-center justify-between text-xl font-extrabold tracking-tight",
						children: [p.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4 text-muted transition-transform group-hover:translate-x-0.5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: p.blurb
					})
				]
			})]
		}, p.slug))
	})] });
}
//#endregion
export { ProjectsPage as component };
