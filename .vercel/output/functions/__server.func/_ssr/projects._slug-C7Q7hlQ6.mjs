import { B as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Icon } from "./content-Clm7wQ2g.mjs";
import { n as Route, r as Button } from "./router-Cxr-pj-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-C7Q7hlQ6.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "text-sm font-semibold text-white/70 hover:text-white",
					children: "← All projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-white/70",
					children: project.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white",
						children: t
					}, t))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: project.image,
			alt: "",
			className: "mx-auto max-h-[420px] w-full object-cover"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "The problem",
					body: project.problem
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "What I built",
					body: project.solution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "The result",
					body: project.result
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-3xl border border-border bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Client",
						value: project.client
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Year",
						value: project.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-bold tracking-wide text-muted uppercase",
						children: "Stack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: project.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-surface px-2.5 py-1 text-xs font-semibold",
							children: s
						}, s))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					children: ["Start something similar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "arrow",
						className: "size-4"
					})]
				})
			})]
		})]
	})] });
}
function Block({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl font-extrabold tracking-tight",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 leading-relaxed text-muted",
		children: body
	})] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs font-bold tracking-wide text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 font-semibold",
		children: value
	})] });
}
//#endregion
export { ProjectDetail as component };
