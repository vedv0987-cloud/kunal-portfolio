import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as highlightBar, c as projects, d as site, i as heroRail, m as testimonials, p as stats, s as processSteps, t as Icon, u as services } from "./content-Clm7wQ2g.mjs";
import { i as cn, r as Button } from "./router-Cxr-pj-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ClFQz7Bg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ title, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-8 flex items-end justify-between gap-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "font-display flex items-center gap-3 text-2xl font-extrabold tracking-tight sm:text-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block h-1 w-5 rounded-full bg-primary",
				"aria-hidden": true
			}), title]
		}), action]
	});
}
function CtaTestimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const t = testimonials[index] ?? testimonials[0];
	const prev = () => setIndex((i) => i === 0 ? testimonials.length - 1 : i - 1);
	const next = () => setIndex((i) => (i + 1) % testimonials.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-6 lg:grid-cols-[1.05fr_0.95fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-ink px-8 py-10 text-ink-fg sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display max-w-sm text-3xl font-extrabold tracking-tight sm:text-4xl",
						children: "Let's Build Something Amazing Together"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-white/70",
						children: "Turn your ideas into powerful AI solutions. Fast. Reliable. Future ready."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "arrow",
								className: "size-4"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "absolute right-10 bottom-10 hidden rotate-[-12deg] text-sm font-semibold text-white/80 sm:block",
						children: ["Good Ideas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Always Win"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/robot-wave.jpg",
						alt: "",
						className: "pointer-events-none absolute right-[-4%] bottom-[-18%] hidden w-[52%] max-w-[320px] sm:block"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "What Clients Say",
				className: "mb-4",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/testimonials",
						children: "See all"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[17px] leading-relaxed font-medium",
						children: [
							"“",
							t.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.avatar,
								alt: "",
								className: "size-11 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.role
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-primary",
							"aria-label": `${t.rating} out of 5 stars`,
							children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "star",
								className: "size-4 fill-primary"
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: prev,
								className: "grid size-10 place-items-center rounded-full border border-border hover:bg-surface",
								"aria-label": "Previous testimonial",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "arrow",
									className: "size-4 rotate-180"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: next,
								className: "grid size-10 place-items-center rounded-full border border-border hover:bg-surface",
								"aria-label": "Next testimonial",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "arrow",
									className: "size-4"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: testimonials.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Show testimonial ${i + 1}`,
								onClick: () => setIndex(i),
								className: `size-2 rounded-full ${i === index ? "bg-primary" : "bg-border"}`
							}, item.name))
						})]
					})
				]
			})] })]
		})
	});
}
function FeaturedProjects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-6 sm:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Featured Projects",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						children: ["View All Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects/$slug",
					params: { slug: p.slug },
					className: "group overflow-hidden rounded-2xl bg-ink text-ink-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/11] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: "",
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 right-3 grid size-8 place-items-center rounded-lg bg-black/45 text-white backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "external",
									className: "size-3.5"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold tracking-tight",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-1.5",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold",
										children: t
									}, t))
								})]
							})
						]
					})
				}, p.slug))
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden pt-6 pb-10 sm:pt-10 lg:pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise-in max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-primary uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-0.5 w-4 rounded-full bg-primary" }), site.eyebrow]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[2.65rem] font-extrabold tracking-tight sm:text-6xl lg:text-[4.35rem]",
							children: [site.headline, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-primary",
								children: site.headlineAccent
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-muted sm:text-[17px]",
							children: site.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "arrow",
										className: "size-4"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-7 place-items-center rounded-full bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											name: "play",
											className: "size-3.5"
										})
									}), "View My Work"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] leading-snug text-muted sm:text-xs",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl font-extrabold tracking-tight sm:text-3xl",
								children: s.value
							})] }, s.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[560px] lg:max-w-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-[4/5] max-w-[480px] sm:aspect-[5/6] lg:max-w-[520px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[2%] right-[2%] size-[62%] rounded-full bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero-portrait.jpg",
								alt: "Kunal, AI builder",
								className: "absolute inset-0 size-full object-contain object-bottom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/robot.jpg",
								alt: "",
								className: "pointer-events-none absolute bottom-[18%] left-[-2%] w-[42%] max-w-[200px] mix-blend-multiply dark:mix-blend-normal dark:opacity-95"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "float-y absolute top-[8%] left-[4%] rotate-[-8deg] rounded-xl bg-card px-3 py-2 text-[11px] font-bold shadow-[var(--shadow)] sm:text-xs",
								children: ["Same Ideas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-primary",
									children: "Bigger Impact"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-[18%] right-[8%] hidden rotate-6 rounded-xl bg-card/95 px-3 py-2 text-[11px] font-bold shadow-[var(--shadow)] sm:block",
								children: ["Build", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-primary",
									children: "Automate Grow"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-[22%] left-[8%] rounded-2xl border border-border bg-card px-3.5 py-2.5 shadow-[var(--shadow)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs font-bold",
									children: ["Automating", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-primary px-1.5 py-0.5 text-[9px] font-extrabold text-primary-fg",
										children: "AI"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-bold",
									children: ["a Smarter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "Tomorrow"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-[2%] bottom-[12%] rounded-full bg-ink px-3.5 py-2 text-[11px] font-semibold text-ink-fg shadow-lg",
								children: "You imagine. I build."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "absolute top-6 right-0 hidden w-[168px] rounded-2xl border border-border bg-card/95 p-2 shadow-[var(--shadow)] xl:block",
						children: heroRail.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-lg bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: item.icon,
									className: "size-4"
								})
							}), item.label]
						}, item.label))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-[1.6rem] bg-ink text-ink-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-px sm:grid-cols-2 lg:grid-cols-4",
					children: highlightBar.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-white/8 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: item.icon,
								className: "size-5"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/65",
							children: item.subtitle
						})] })]
					}, item.title))
				})
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "My Process",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Let's Work Together", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
				children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative text-center",
					children: [
						i < processSteps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-6 left-[58%] hidden h-px w-[84%] bg-border lg:block",
							"aria-hidden": true
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10 mx-auto grid size-12 place-items-center rounded-full bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: step.icon,
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-4 font-display text-base font-bold",
							children: [
								step.n,
								". ",
								step.title
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: step.body
						})
					]
				}, step.title))
			})]
		})
	});
}
function WhatIDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "What I Do",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						children: ["All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					hash: s.slug,
					className: "group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-xl bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: s.icon,
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-bold tracking-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-muted",
							children: s.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-5 grid size-8 place-items-center rounded-full border border-border text-muted transition-colors group-hover:border-primary group-hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "arrow",
								className: "size-4"
							})
						})
					]
				}, s.slug))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatIDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaTestimonials, {})
	] });
}
//#endregion
export { Home as component };
