import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BFLzJmXJ.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-0.5 w-4 rounded-full bg-primary" }), kicker]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-muted sm:text-lg",
					children: body
				})
			]
		})
	});
}
//#endregion
export { PageHero as t };
