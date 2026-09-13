import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as site, f as socials, l as serviceOptions, r as budgetOptions, t as Icon } from "./content-Clm7wQ2g.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as clearInquiries, c as saveInquiry, o as downloadInquiries, r as Button, s as loadInquiries } from "./router-Cxr-pj-I.mjs";
import { t as PageHero } from "./page-hero-BFLzJmXJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-9SrnE9pG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	email: "",
	service: "Website Development",
	budget: "Let's talk",
	message: ""
};
function ContactForm() {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [saved, setSaved] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setSaved(loadInquiries());
	}, []);
	function onSubmit(e) {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			toast.error("Please add your name, email, and a short brief.");
			return;
		}
		saveInquiry({
			name: form.name.trim(),
			email: form.email.trim(),
			service: form.service,
			budget: form.budget,
			message: form.message.trim()
		});
		setSaved(loadInquiries());
		setForm(empty);
		toast.success("Brief saved on this device.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-extrabold tracking-tight",
					children: "Start a project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Your brief is saved on this device so you can come back to it anytime."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: "field",
								placeholder: "Your name",
								autoComplete: "name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: "field",
								placeholder: "you@studio.com",
								autoComplete: "email"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Service",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.service,
								onChange: (e) => setForm({
									...form,
									service: e.target.value
								}),
								className: "field",
								children: serviceOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Budget",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.budget,
								onChange: (e) => setForm({
									...form,
									budget: e.target.value
								}),
								className: "field",
								children: budgetOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tell me about the idea",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: "field min-h-32 resize-y",
								placeholder: "What should we build, and what does success look like?"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "mt-6",
					children: ["Save brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "arrow",
						className: "size-4"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-3xl border border-border bg-surface p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold",
					children: "Saved briefs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 place-items-center rounded-full border border-border bg-card disabled:opacity-40",
						onClick: () => downloadInquiries(saved),
						disabled: saved.length === 0,
						"aria-label": "Download briefs as JSON",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "download",
							className: "size-4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 place-items-center rounded-full border border-border bg-card disabled:opacity-40",
						onClick: () => {
							clearInquiries();
							setSaved([]);
							toast.message("Cleared saved briefs.");
						},
						disabled: saved.length === 0,
						"aria-label": "Clear saved briefs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "trash",
							className: "size-4"
						})
					})]
				})]
			}), saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Nothing saved yet. Submit a brief and it will live here on this device."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: saved.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: item.service
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm",
							children: item.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-muted-2",
							children: new Date(item.createdAt).toLocaleString()
						})
					]
				}, item.id))
			})]
		})]
	});
}
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-bold tracking-wide text-muted uppercase",
			children: label
		}), children]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Let's Talk",
		title: "Tell me what you want to build.",
		body: "Share the idea. I'll come back with a clear next step — scope, timeline, and how we'd ship it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 flex flex-wrap gap-3",
			children: [socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: s.href,
				className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: s.icon,
					className: "size-4"
				}), s.label]
			}, s.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full bg-surface px-4 py-2 text-sm text-muted",
				children: site.location
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
	})] });
}
//#endregion
export { ContactPage as component };
