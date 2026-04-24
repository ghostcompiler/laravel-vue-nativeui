import { Fragment, computed, createBlock, createSSRApp, createTextVNode, createVNode, h, inject, mergeProps, openBlock, provide, ref, renderList, renderSlot, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { renderToString, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { Head, createInertiaApp, usePage } from "@inertiajs/vue3";
import { NAlert, NBadge, NButton, NCard, NCheckbox, NConfigProvider, NDataTable, NDatePicker, NDescriptions, NDescriptionsItem, NDialogProvider, NDivider, NDrawer, NDrawerContent, NDropdown, NForm, NFormItem, NGlobalStyle, NH1, NH2, NIcon, NInput, NInputNumber, NLayout, NLayoutContent, NLayoutHeader, NList, NListItem, NLoadingBarProvider, NMessageProvider, NModal, NNotificationProvider, NPageHeader, NPopover, NProgress, NRadioButton, NRadioGroup, NSelect, NSlider, NSpace, NStatistic, NSwitch, NTabPane, NTabs, NTag, NText, NTimeline, NTimelineItem, NTooltip, darkTheme, useDialog, useMessage } from "naive-ui";
import { Check, CheckCircle, ChevronDown, Copy, Moon, PanelRightOpen, Sparkles, Sun, Zap } from "lucide-vue-next";
import { Toaster, toast } from "vue-sonner";
import createServer from "@inertiajs/vue3/server";
import { setup } from "@css-render/vue3-ssr";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var sharedTheme = {
	common: {
		fontFamily: "Instrument Sans, Inter, ui-sans-serif, system-ui, sans-serif",
		fontFamilyMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
		borderRadius: "8px",
		borderRadiusSmall: "6px",
		heightMedium: "40px",
		heightLarge: "46px",
		primaryColor: "#18a058",
		primaryColorHover: "#36ad6a",
		primaryColorPressed: "#0c7a43",
		primaryColorSuppl: "#36ad6a",
		infoColor: "#2080f0",
		successColor: "#18a058",
		warningColor: "#f0a020",
		errorColor: "#d03050"
	},
	Button: {
		fontWeight: "700",
		borderRadiusMedium: "8px",
		borderRadiusLarge: "8px"
	},
	Card: {
		borderRadius: "8px",
		paddingMedium: "22px",
		titleFontWeight: "800"
	},
	Tag: { borderRadius: "999px" }
};
var themeOverrides = {
	light: {
		common: {
			...sharedTheme.common,
			bodyColor: "#f5f7fb",
			cardColor: "#ffffff",
			modalColor: "#ffffff",
			popoverColor: "#ffffff",
			tableColor: "#ffffff",
			textColorBase: "#172033",
			textColor1: "#172033",
			textColor2: "#3a475f",
			textColor3: "#667085",
			borderColor: "#dde5ef",
			dividerColor: "#e8edf3",
			hoverColor: "#f2f6fb",
			pressedColor: "#eaf2f8"
		},
		Card: {
			...sharedTheme.Card,
			color: "#ffffff",
			borderColor: "#dfe7f0"
		},
		Button: sharedTheme.Button,
		Tag: sharedTheme.Tag
	},
	dark: {
		common: {
			...sharedTheme.common,
			bodyColor: "#0e1117",
			cardColor: "#151a23",
			modalColor: "#171d27",
			popoverColor: "#171d27",
			tableColor: "#151a23",
			textColorBase: "#eef2f8",
			textColor1: "#eef2f8",
			textColor2: "#c7d0df",
			textColor3: "#8f9bad",
			borderColor: "#2d3544",
			dividerColor: "#252d3b",
			hoverColor: "#1d2430",
			pressedColor: "#242d3b"
		},
		Card: {
			...sharedTheme.Card,
			color: "#151a23",
			borderColor: "#2d3544"
		},
		Button: sharedTheme.Button,
		Tag: sharedTheme.Tag
	}
};
function resolveNaiveTheme(themeName) {
	return themeName === "dark" ? darkTheme : null;
}
//#endregion
//#region resources/js/layouts/AppLayout.vue
var ThemeSymbol = Symbol("Theme");
var _sfc_main$1 = /* @__PURE__ */ Object.assign({ name: "AppLayout" }, {
	__name: "AppLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const themeName = ref(usePage().props.theme === "dark" ? "dark" : "light");
		const setTheme = (nextTheme) => {
			themeName.value = nextTheme;
			if (typeof document !== "undefined") {
				document.documentElement.dataset.theme = nextTheme;
				document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
			}
			if (typeof localStorage !== "undefined") localStorage.setItem("theme", nextTheme);
		};
		const toggleTheme = () => setTheme(themeName.value === "dark" ? "light" : "dark");
		provide(ThemeSymbol, {
			themeName,
			isDark: computed(() => themeName.value === "dark"),
			setTheme,
			toggleTheme
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(NConfigProvider), mergeProps({
				theme: unref(resolveNaiveTheme)(themeName.value),
				"theme-overrides": unref(themeOverrides)[themeName.value],
				abstract: ""
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(NLoadingBarProvider), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(NDialogProvider), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(NNotificationProvider), null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NMessageProvider), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
															_push(ssrRenderComponent(unref(Toaster), {
																"rich-colors": "",
																"close-button": "",
																expand: "",
																position: "top-right",
																theme: themeName.value
															}, null, _parent, _scopeId));
														} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(Toaster), {
															"rich-colors": "",
															"close-button": "",
															expand: "",
															position: "top-right",
															theme: themeName.value
														}, null, 8, ["theme"])];
													}),
													_: 3
												}, _parent, _scopeId));
												else return [createVNode(unref(NMessageProvider), null, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(Toaster), {
														"rich-colors": "",
														"close-button": "",
														expand: "",
														position: "top-right",
														theme: themeName.value
													}, null, 8, ["theme"])]),
													_: 3
												})];
											}),
											_: 3
										}, _parent, _scopeId));
										else return [createVNode(unref(NNotificationProvider), null, {
											default: withCtx(() => [createVNode(unref(NMessageProvider), null, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(Toaster), {
													"rich-colors": "",
													"close-button": "",
													expand: "",
													position: "top-right",
													theme: themeName.value
												}, null, 8, ["theme"])]),
												_: 3
											})]),
											_: 3
										})];
									}),
									_: 3
								}, _parent, _scopeId));
								else return [createVNode(unref(NDialogProvider), null, {
									default: withCtx(() => [createVNode(unref(NNotificationProvider), null, {
										default: withCtx(() => [createVNode(unref(NMessageProvider), null, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(Toaster), {
												"rich-colors": "",
												"close-button": "",
												expand: "",
												position: "top-right",
												theme: themeName.value
											}, null, 8, ["theme"])]),
											_: 3
										})]),
										_: 3
									})]),
									_: 3
								})];
							}),
							_: 3
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(NGlobalStyle), null, null, _parent, _scopeId));
					} else return [createVNode(unref(NLoadingBarProvider), null, {
						default: withCtx(() => [createVNode(unref(NDialogProvider), null, {
							default: withCtx(() => [createVNode(unref(NNotificationProvider), null, {
								default: withCtx(() => [createVNode(unref(NMessageProvider), null, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(Toaster), {
										"rich-colors": "",
										"close-button": "",
										expand: "",
										position: "top-right",
										theme: themeName.value
									}, null, 8, ["theme"])]),
									_: 3
								})]),
								_: 3
							})]),
							_: 3
						})]),
						_: 3
					}), createVNode(unref(NGlobalStyle))];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/AppLayout.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/pages/Home.vue
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main });
var _sfc_main = /* @__PURE__ */ Object.assign({
	name: "Home",
	layout: _sfc_main$1
}, {
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		laravelVersion: String,
		phpVersion: String
	},
	setup(__props) {
		const props = __props;
		const theme = inject(ThemeSymbol);
		const dialog = useDialog();
		const message = useMessage();
		const modalOpen = ref(false);
		const drawerOpen = ref(false);
		const copiedCommand = ref("");
		const formValue = ref({
			title: "Starter dashboard",
			status: "review",
			visibility: "team",
			date: Date.now(),
			enabled: true,
			priority: 6,
			estimate: 3
		});
		const stackItems = [
			"Laravel 13 blank project",
			"Inertia Vue 3 single-file components",
			"SSR bundle and Artisan SSR scripts",
			"Naive UI provider, global styles, theme overrides",
			"vue-sonner toaster wired into the app layout"
		];
		const dependencyRows = [
			{
				key: "inertia",
				name: "Inertia",
				role: "Server-driven SPA routing",
				status: "Configured"
			},
			{
				key: "naive",
				name: "Naive UI",
				role: "Themeable Vue component system",
				status: "Configured"
			},
			{
				key: "sonner",
				name: "vue-sonner",
				role: "Accessible toast notifications",
				status: "Configured"
			},
			{
				key: "ssr",
				name: "Vue SSR",
				role: "Server-rendered first response",
				status: "Configured"
			}
		];
		const dependencyColumns = [
			{
				title: "Package",
				key: "name"
			},
			{
				title: "Role",
				key: "role"
			},
			{
				title: "Status",
				key: "status",
				render(row) {
					return h(NTag, { type: "success" }, { default: () => row.status });
				}
			}
		];
		const statusOptions = [
			{
				label: "Draft",
				value: "draft"
			},
			{
				label: "In review",
				value: "review"
			},
			{
				label: "Published",
				value: "published"
			}
		];
		const menuOptions = [
			{
				label: "Create page",
				key: "page"
			},
			{
				label: "Create component",
				key: "component"
			},
			{
				label: "Open documentation",
				key: "docs"
			}
		];
		const installMethods = [
			{
				name: "composer",
				tab: "Composer",
				commands: ["composer create-project ghostcompiler/laravel-vue-nativeui"]
			},
			{
				name: "installer",
				tab: "Laravel Installer",
				commands: ["laravel new project --using=ghostcompiler/laravel-vue-nativeui"]
			},
			{
				name: "clone",
				tab: "Git Clone",
				commands: [
					"git clone https://github.com/ghostcompiler/laravel-vue-nativeui demo",
					"cd demo",
					"composer install",
					"npm install",
					"cp .env.example .env",
					"php artisan key:generate",
					"npm run start"
				]
			}
		];
		const productionCommands = ["npm run start", "npm run build:ssr"];
		const generatorCommands = [
			"php artisan make:page Dashboard",
			"php artisan make:component EmptyState",
			"php artisan make:layout AdminLayout"
		];
		const notify = () => {
			toast.success("Sonner is ready", { description: "Toast notifications are mounted inside the Naive UI app shell." });
		};
		const copyCommand = async (command) => {
			if (!command || typeof navigator === "undefined" || !navigator.clipboard) {
				toast.error("Copy is not available in this browser");
				return;
			}
			await navigator.clipboard.writeText(command);
			copiedCommand.value = command;
			toast.success("Command copied");
			window.setTimeout(() => {
				copiedCommand.value = "";
			}, 1400);
		};
		const openDialog = () => {
			dialog.success({
				title: "Naive UI dialog",
				content: "Dialogs work through the global provider in AppLayout.",
				positiveText: "Nice"
			});
		};
		const selectMenuItem = (key) => {
			message.success(`Selected: ${key}`);
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Laravel Vue NativeUI Starter" }, null, _parent));
			_push(ssrRenderComponent(unref(NLayout), {
				class: "app-shell",
				embedded: ""
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(NLayoutContent), {
						class: "app-container",
						embedded: ""
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(NSpace), {
								vertical: "",
								size: 22
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(NLayoutHeader), {
											class: "app-hero rounded-lg p-5 sm:p-7",
											bordered: false
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NPageHeader), null, {
													header: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(NSpace), {
															align: "center",
															size: 10
														}, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	_push(ssrRenderComponent(unref(NTag), {
																		type: "success",
																		round: false
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(`SSR Ready`);
																			else return [createTextVNode("SSR Ready")];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																	_push(ssrRenderComponent(unref(NTag), {
																		type: "info",
																		round: false
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(`Vue SFC`);
																			else return [createTextVNode("Vue SFC")];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																	_push(ssrRenderComponent(unref(NTag), {
																		type: "warning",
																		round: false
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(`Naive UI`);
																			else return [createTextVNode("Naive UI")];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																} else return [
																	createVNode(unref(NTag), {
																		type: "success",
																		round: false
																	}, {
																		default: withCtx(() => [createTextVNode("SSR Ready")]),
																		_: 1
																	}),
																	createVNode(unref(NTag), {
																		type: "info",
																		round: false
																	}, {
																		default: withCtx(() => [createTextVNode("Vue SFC")]),
																		_: 1
																	}),
																	createVNode(unref(NTag), {
																		type: "warning",
																		round: false
																	}, {
																		default: withCtx(() => [createTextVNode("Naive UI")]),
																		_: 1
																	})
																];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(NSpace), {
															align: "center",
															size: 10
														}, {
															default: withCtx(() => [
																createVNode(unref(NTag), {
																	type: "success",
																	round: false
																}, {
																	default: withCtx(() => [createTextVNode("SSR Ready")]),
																	_: 1
																}),
																createVNode(unref(NTag), {
																	type: "info",
																	round: false
																}, {
																	default: withCtx(() => [createTextVNode("Vue SFC")]),
																	_: 1
																}),
																createVNode(unref(NTag), {
																	type: "warning",
																	round: false
																}, {
																	default: withCtx(() => [createTextVNode("Naive UI")]),
																	_: 1
																})
															]),
															_: 1
														})];
													}),
													title: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(` Laravel + Vue starter with Naive UI `);
																else return [createTextVNode(" Laravel + Vue starter with Naive UI ")];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
															default: withCtx(() => [createTextVNode(" Laravel + Vue starter with Naive UI ")]),
															_: 1
														})];
													}),
													subtitle: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(NText), { depth: 2 }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(` A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. `);
																else return [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(NText), { depth: 2 }, {
															default: withCtx(() => [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")]),
															_: 1
														})];
													}),
													extra: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(unref(NSpace), {
															align: "center",
															size: 16
														}, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	_push(ssrRenderComponent(unref(NIcon), { size: 22 }, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) if (unref(theme)?.isDark.value) _push(ssrRenderComponent(unref(Moon), null, null, _parent, _scopeId));
																			else _push(ssrRenderComponent(unref(Sun), null, null, _parent, _scopeId));
																			else return [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																	_push(ssrRenderComponent(unref(NSwitch), {
																		value: unref(theme)?.isDark.value,
																		"onUpdate:value": unref(theme)?.toggleTheme
																	}, null, _parent, _scopeId));
																	_push(ssrRenderComponent(unref(NButton), {
																		type: "primary",
																		size: "large",
																		onClick: notify
																	}, {
																		icon: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(Sparkles), null, null, _parent, _scopeId));
																					else return [createVNode(unref(Sparkles))];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			else return [createVNode(unref(NIcon), null, {
																				default: withCtx(() => [createVNode(unref(Sparkles))]),
																				_: 1
																			})];
																		}),
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(` Try Toast `);
																			else return [createTextVNode(" Try Toast ")];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																} else return [
																	createVNode(unref(NIcon), { size: 22 }, {
																		default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
																		_: 1
																	}),
																	createVNode(unref(NSwitch), {
																		value: unref(theme)?.isDark.value,
																		"onUpdate:value": unref(theme)?.toggleTheme
																	}, null, 8, ["value", "onUpdate:value"]),
																	createVNode(unref(NButton), {
																		type: "primary",
																		size: "large",
																		onClick: notify
																	}, {
																		icon: withCtx(() => [createVNode(unref(NIcon), null, {
																			default: withCtx(() => [createVNode(unref(Sparkles))]),
																			_: 1
																		})]),
																		default: withCtx(() => [createTextVNode(" Try Toast ")]),
																		_: 1
																	})
																];
															}),
															_: 1
														}, _parent, _scopeId));
														else return [createVNode(unref(NSpace), {
															align: "center",
															size: 16
														}, {
															default: withCtx(() => [
																createVNode(unref(NIcon), { size: 22 }, {
																	default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
																	_: 1
																}),
																createVNode(unref(NSwitch), {
																	value: unref(theme)?.isDark.value,
																	"onUpdate:value": unref(theme)?.toggleTheme
																}, null, 8, ["value", "onUpdate:value"]),
																createVNode(unref(NButton), {
																	type: "primary",
																	size: "large",
																	onClick: notify
																}, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [createVNode(unref(Sparkles))]),
																		_: 1
																	})]),
																	default: withCtx(() => [createTextVNode(" Try Toast ")]),
																	_: 1
																})
															]),
															_: 1
														})];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NPageHeader), null, {
													header: withCtx(() => [createVNode(unref(NSpace), {
														align: "center",
														size: 10
													}, {
														default: withCtx(() => [
															createVNode(unref(NTag), {
																type: "success",
																round: false
															}, {
																default: withCtx(() => [createTextVNode("SSR Ready")]),
																_: 1
															}),
															createVNode(unref(NTag), {
																type: "info",
																round: false
															}, {
																default: withCtx(() => [createTextVNode("Vue SFC")]),
																_: 1
															}),
															createVNode(unref(NTag), {
																type: "warning",
																round: false
															}, {
																default: withCtx(() => [createTextVNode("Naive UI")]),
																_: 1
															})
														]),
														_: 1
													})]),
													title: withCtx(() => [createVNode(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
														default: withCtx(() => [createTextVNode(" Laravel + Vue starter with Naive UI ")]),
														_: 1
													})]),
													subtitle: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
														default: withCtx(() => [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")]),
														_: 1
													})]),
													extra: withCtx(() => [createVNode(unref(NSpace), {
														align: "center",
														size: 16
													}, {
														default: withCtx(() => [
															createVNode(unref(NIcon), { size: 22 }, {
																default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
																_: 1
															}),
															createVNode(unref(NSwitch), {
																value: unref(theme)?.isDark.value,
																"onUpdate:value": unref(theme)?.toggleTheme
															}, null, 8, ["value", "onUpdate:value"]),
															createVNode(unref(NButton), {
																type: "primary",
																size: "large",
																onClick: notify
															}, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [createVNode(unref(Sparkles))]),
																	_: 1
																})]),
																default: withCtx(() => [createTextVNode(" Try Toast ")]),
																_: 1
															})
														]),
														_: 1
													})]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`<div class="app-grid"${_scopeId}>`);
										_push(ssrRenderComponent(unref(NCard), {
											title: "Framework",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(unref(NStatistic), {
														label: "Laravel",
														value: props.laravelVersion
													}, null, _parent, _scopeId));
													_push(ssrRenderComponent(unref(NDivider), null, null, _parent, _scopeId));
													_push(ssrRenderComponent(unref(NStatistic), {
														label: "PHP",
														value: props.phpVersion
													}, null, _parent, _scopeId));
												} else return [
													createVNode(unref(NStatistic), {
														label: "Laravel",
														value: props.laravelVersion
													}, null, 8, ["value"]),
													createVNode(unref(NDivider)),
													createVNode(unref(NStatistic), {
														label: "PHP",
														value: props.phpVersion
													}, null, 8, ["value"])
												];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), {
											title: "Render Path",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NText), null, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(`Client entry`);
																	else return [createTextVNode("Client entry")];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(`<div class="command-snippet"${_scopeId}><code class="code-snippet"${_scopeId}>resources/js/app.js</code></div>`);
															_push(ssrRenderComponent(unref(NText), null, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(`SSR entry`);
																	else return [createTextVNode("SSR entry")];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(`<div class="command-snippet"${_scopeId}><code class="code-snippet"${_scopeId}>resources/js/ssr.js</code></div>`);
														} else return [
															createVNode(unref(NText), null, {
																default: withCtx(() => [createTextVNode("Client entry")]),
																_: 1
															}),
															createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/app.js")]),
															createVNode(unref(NText), null, {
																default: withCtx(() => [createTextVNode("SSR entry")]),
																_: 1
															}),
															createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/ssr.js")])
														];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx(() => [
														createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode("Client entry")]),
															_: 1
														}),
														createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/app.js")]),
														createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode("SSR entry")]),
															_: 1
														}),
														createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/ssr.js")])
													]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), {
											title: "Theme System",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NText), null, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(` Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. `);
																	else return [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(ssrRenderComponent(unref(NButton), {
																secondary: "",
																onClick: unref(theme)?.toggleTheme
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(`Toggle Theme`);
																	else return [createTextVNode("Toggle Theme")];
																}),
																_: 1
															}, _parent, _scopeId));
														} else return [createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")]),
															_: 1
														}), createVNode(unref(NButton), {
															secondary: "",
															onClick: unref(theme)?.toggleTheme
														}, {
															default: withCtx(() => [createTextVNode("Toggle Theme")]),
															_: 1
														}, 8, ["onClick"])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx(() => [createVNode(unref(NText), null, {
														default: withCtx(() => [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")]),
														_: 1
													}), createVNode(unref(NButton), {
														secondary: "",
														onClick: unref(theme)?.toggleTheme
													}, {
														default: withCtx(() => [createTextVNode("Toggle Theme")]),
														_: 1
													}, 8, ["onClick"])]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`</div>`);
										_push(ssrRenderComponent(unref(NCard), {
											title: "Installation",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(unref(NTabs), {
														type: "segment",
														animated: ""
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<!--[-->`);
																ssrRenderList(installMethods, (method) => {
																	_push(ssrRenderComponent(unref(NTabPane), {
																		key: method.name,
																		name: method.name,
																		tab: method.tab
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(NSpace), {
																				vertical: "",
																				size: 10
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) {
																						_push(`<!--[-->`);
																						ssrRenderList(method.commands, (command) => {
																							_push(`<div class="command-snippet"${_scopeId}><code class="code-snippet"${_scopeId}>${ssrInterpolate(command)}</code>`);
																							_push(ssrRenderComponent(unref(NTooltip), { trigger: "hover" }, {
																								trigger: withCtx((_, _push, _parent, _scopeId) => {
																									if (_push) _push(ssrRenderComponent(unref(NButton), {
																										class: "command-copy",
																										quaternary: "",
																										circle: "",
																										size: "small",
																										"aria-label": "Copy command",
																										onClick: ($event) => copyCommand(command)
																									}, {
																										icon: withCtx((_, _push, _parent, _scopeId) => {
																											if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																												default: withCtx((_, _push, _parent, _scopeId) => {
																													if (_push) if (copiedCommand.value === command) _push(ssrRenderComponent(unref(Check), null, null, _parent, _scopeId));
																													else _push(ssrRenderComponent(unref(Copy), null, null, _parent, _scopeId));
																													else return [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))];
																												}),
																												_: 2
																											}, _parent, _scopeId));
																											else return [createVNode(unref(NIcon), null, {
																												default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																												_: 2
																											}, 1024)];
																										}),
																										_: 2
																									}, _parent, _scopeId));
																									else return [createVNode(unref(NButton), {
																										class: "command-copy",
																										quaternary: "",
																										circle: "",
																										size: "small",
																										"aria-label": "Copy command",
																										onClick: ($event) => copyCommand(command)
																									}, {
																										icon: withCtx(() => [createVNode(unref(NIcon), null, {
																											default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																											_: 2
																										}, 1024)]),
																										_: 2
																									}, 1032, ["onClick"])];
																								}),
																								default: withCtx((_, _push, _parent, _scopeId) => {
																									if (_push) _push(` ${ssrInterpolate(copiedCommand.value === command ? "Copied" : "Copy command")}`);
																									else return [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)];
																								}),
																								_: 2
																							}, _parent, _scopeId));
																							_push(`</div>`);
																						});
																						_push(`<!--]-->`);
																					} else return [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
																						return openBlock(), createBlock("div", {
																							key: command,
																							class: "command-snippet"
																						}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																							trigger: withCtx(() => [createVNode(unref(NButton), {
																								class: "command-copy",
																								quaternary: "",
																								circle: "",
																								size: "small",
																								"aria-label": "Copy command",
																								onClick: ($event) => copyCommand(command)
																							}, {
																								icon: withCtx(() => [createVNode(unref(NIcon), null, {
																									default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																									_: 2
																								}, 1024)]),
																								_: 2
																							}, 1032, ["onClick"])]),
																							default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																							_: 2
																						}, 1024)]);
																					}), 128))];
																				}),
																				_: 2
																			}, _parent, _scopeId));
																			else return [createVNode(unref(NSpace), {
																				vertical: "",
																				size: 10
																			}, {
																				default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
																					return openBlock(), createBlock("div", {
																						key: command,
																						class: "command-snippet"
																					}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																						trigger: withCtx(() => [createVNode(unref(NButton), {
																							class: "command-copy",
																							quaternary: "",
																							circle: "",
																							size: "small",
																							"aria-label": "Copy command",
																							onClick: ($event) => copyCommand(command)
																						}, {
																							icon: withCtx(() => [createVNode(unref(NIcon), null, {
																								default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																								_: 2
																							}, 1024)]),
																							_: 2
																						}, 1032, ["onClick"])]),
																						default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																						_: 2
																					}, 1024)]);
																				}), 128))]),
																				_: 2
																			}, 1024)];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																});
																_push(`<!--]-->`);
															} else return [(openBlock(), createBlock(Fragment, null, renderList(installMethods, (method) => {
																return createVNode(unref(NTabPane), {
																	key: method.name,
																	name: method.name,
																	tab: method.tab
																}, {
																	default: withCtx(() => [createVNode(unref(NSpace), {
																		vertical: "",
																		size: 10
																	}, {
																		default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
																			return openBlock(), createBlock("div", {
																				key: command,
																				class: "command-snippet"
																			}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																				trigger: withCtx(() => [createVNode(unref(NButton), {
																					class: "command-copy",
																					quaternary: "",
																					circle: "",
																					size: "small",
																					"aria-label": "Copy command",
																					onClick: ($event) => copyCommand(command)
																				}, {
																					icon: withCtx(() => [createVNode(unref(NIcon), null, {
																						default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																						_: 2
																					}, 1024)]),
																					_: 2
																				}, 1032, ["onClick"])]),
																				default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																				_: 2
																			}, 1024)]);
																		}), 128))]),
																		_: 2
																	}, 1024)]),
																	_: 2
																}, 1032, ["name", "tab"]);
															}), 64))];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(ssrRenderComponent(unref(NAlert), {
														class: "mt-4",
														title: "Start command",
														type: "info",
														bordered: ""
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(` Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. `);
															else return [createTextVNode(" Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. ")];
														}),
														_: 1
													}, _parent, _scopeId));
												} else return [createVNode(unref(NTabs), {
													type: "segment",
													animated: ""
												}, {
													default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(installMethods, (method) => {
														return createVNode(unref(NTabPane), {
															key: method.name,
															name: method.name,
															tab: method.tab
														}, {
															default: withCtx(() => [createVNode(unref(NSpace), {
																vertical: "",
																size: 10
															}, {
																default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
																	return openBlock(), createBlock("div", {
																		key: command,
																		class: "command-snippet"
																	}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																		trigger: withCtx(() => [createVNode(unref(NButton), {
																			class: "command-copy",
																			quaternary: "",
																			circle: "",
																			size: "small",
																			"aria-label": "Copy command",
																			onClick: ($event) => copyCommand(command)
																		}, {
																			icon: withCtx(() => [createVNode(unref(NIcon), null, {
																				default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																				_: 2
																			}, 1024)]),
																			_: 2
																		}, 1032, ["onClick"])]),
																		default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																		_: 2
																	}, 1024)]);
																}), 128))]),
																_: 2
															}, 1024)]),
															_: 2
														}, 1032, ["name", "tab"]);
													}), 64))]),
													_: 1
												}), createVNode(unref(NAlert), {
													class: "mt-4",
													title: "Start command",
													type: "info",
													bordered: ""
												}, {
													default: withCtx(() => [createTextVNode(" Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. ")]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), { bordered: "" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(`<div class="feature-grid"${_scopeId}><div${_scopeId}>`);
													_push(ssrRenderComponent(unref(NSpace), {
														align: "center",
														size: 10
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(ssrRenderComponent(unref(NIcon), {
																	size: 24,
																	color: "#18a058"
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(Zap), null, null, _parent, _scopeId));
																		else return [createVNode(unref(Zap))];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NH2), { class: "!m-0 !text-2xl" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(`Included setup`);
																		else return [createTextVNode("Included setup")];
																	}),
																	_: 1
																}, _parent, _scopeId));
															} else return [createVNode(unref(NIcon), {
																size: 24,
																color: "#18a058"
															}, {
																default: withCtx(() => [createVNode(unref(Zap))]),
																_: 1
															}), createVNode(unref(NH2), { class: "!m-0 !text-2xl" }, {
																default: withCtx(() => [createTextVNode("Included setup")]),
																_: 1
															})];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(ssrRenderComponent(unref(NList), { class: "mt-4" }, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<!--[-->`);
																ssrRenderList(stackItems, (item) => {
																	_push(ssrRenderComponent(unref(NListItem), { key: item }, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(NSpace), { align: "center" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) {
																						_push(ssrRenderComponent(unref(NIcon), { color: "#18a058" }, {
																							default: withCtx((_, _push, _parent, _scopeId) => {
																								if (_push) _push(ssrRenderComponent(unref(CheckCircle), null, null, _parent, _scopeId));
																								else return [createVNode(unref(CheckCircle))];
																							}),
																							_: 2
																						}, _parent, _scopeId));
																						_push(ssrRenderComponent(unref(NText), null, {
																							default: withCtx((_, _push, _parent, _scopeId) => {
																								if (_push) _push(`${ssrInterpolate(item)}`);
																								else return [createTextVNode(toDisplayString(item), 1)];
																							}),
																							_: 2
																						}, _parent, _scopeId));
																					} else return [createVNode(unref(NIcon), { color: "#18a058" }, {
																						default: withCtx(() => [createVNode(unref(CheckCircle))]),
																						_: 1
																					}), createVNode(unref(NText), null, {
																						default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
																						_: 2
																					}, 1024)];
																				}),
																				_: 2
																			}, _parent, _scopeId));
																			else return [createVNode(unref(NSpace), { align: "center" }, {
																				default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
																					default: withCtx(() => [createVNode(unref(CheckCircle))]),
																					_: 1
																				}), createVNode(unref(NText), null, {
																					default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
																					_: 2
																				}, 1024)]),
																				_: 2
																			}, 1024)];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																});
																_push(`<!--]-->`);
															} else return [(openBlock(), createBlock(Fragment, null, renderList(stackItems, (item) => {
																return createVNode(unref(NListItem), { key: item }, {
																	default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
																		default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
																			default: withCtx(() => [createVNode(unref(CheckCircle))]),
																			_: 1
																		}), createVNode(unref(NText), null, {
																			default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
																			_: 2
																		}, 1024)]),
																		_: 2
																	}, 1024)]),
																	_: 2
																}, 1024);
															}), 64))];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(`</div><div class="rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]"${_scopeId}>`);
													_push(ssrRenderComponent(unref(NText), { depth: 3 }, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`Production start`);
															else return [createTextVNode("Production start")];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(`<div class="mt-4 flex flex-col gap-3"${_scopeId}><!--[-->`);
													ssrRenderList(productionCommands, (command) => {
														_push(`<div class="command-snippet"${_scopeId}><code class="code-snippet"${_scopeId}>${ssrInterpolate(command)}</code>`);
														_push(ssrRenderComponent(unref(NTooltip), { trigger: "hover" }, {
															trigger: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(ssrRenderComponent(unref(NButton), {
																	class: "command-copy",
																	quaternary: "",
																	circle: "",
																	size: "small",
																	"aria-label": "Copy command",
																	onClick: ($event) => copyCommand(command)
																}, {
																	icon: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) if (copiedCommand.value === command) _push(ssrRenderComponent(unref(Check), null, null, _parent, _scopeId));
																				else _push(ssrRenderComponent(unref(Copy), null, null, _parent, _scopeId));
																				else return [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																		else return [createVNode(unref(NIcon), null, {
																			default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																			_: 2
																		}, 1024)];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else return [createVNode(unref(NButton), {
																	class: "command-copy",
																	quaternary: "",
																	circle: "",
																	size: "small",
																	"aria-label": "Copy command",
																	onClick: ($event) => copyCommand(command)
																}, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																		_: 2
																	}, 1024)]),
																	_: 2
																}, 1032, ["onClick"])];
															}),
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) _push(` ${ssrInterpolate(copiedCommand.value === command ? "Copied" : "Copy command")}`);
																else return [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)];
															}),
															_: 2
														}, _parent, _scopeId));
														_push(`</div>`);
													});
													_push(`<!--]--></div></div></div>`);
												} else return [createVNode("div", { class: "feature-grid" }, [createVNode("div", null, [createVNode(unref(NSpace), {
													align: "center",
													size: 10
												}, {
													default: withCtx(() => [createVNode(unref(NIcon), {
														size: 24,
														color: "#18a058"
													}, {
														default: withCtx(() => [createVNode(unref(Zap))]),
														_: 1
													}), createVNode(unref(NH2), { class: "!m-0 !text-2xl" }, {
														default: withCtx(() => [createTextVNode("Included setup")]),
														_: 1
													})]),
													_: 1
												}), createVNode(unref(NList), { class: "mt-4" }, {
													default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(stackItems, (item) => {
														return createVNode(unref(NListItem), { key: item }, {
															default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
																default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
																	default: withCtx(() => [createVNode(unref(CheckCircle))]),
																	_: 1
																}), createVNode(unref(NText), null, {
																	default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
																	_: 2
																}, 1024)]),
																_: 2
															}, 1024)]),
															_: 2
														}, 1024);
													}), 64))]),
													_: 1
												})]), createVNode("div", { class: "rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]" }, [createVNode(unref(NText), { depth: 3 }, {
													default: withCtx(() => [createTextVNode("Production start")]),
													_: 1
												}), createVNode("div", { class: "mt-4 flex flex-col gap-3" }, [(openBlock(), createBlock(Fragment, null, renderList(productionCommands, (command) => {
													return createVNode("div", {
														key: command,
														class: "command-snippet"
													}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
														trigger: withCtx(() => [createVNode(unref(NButton), {
															class: "command-copy",
															quaternary: "",
															circle: "",
															size: "small",
															"aria-label": "Copy command",
															onClick: ($event) => copyCommand(command)
														}, {
															icon: withCtx(() => [createVNode(unref(NIcon), null, {
																default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																_: 2
															}, 1024)]),
															_: 2
														}, 1032, ["onClick"])]),
														default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
														_: 2
													}, 1024)]);
												}), 64))])])])];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`<div class="app-grid"${_scopeId}>`);
										_push(ssrRenderComponent(unref(NAlert), {
											title: "Theme cache",
											type: "success",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(` Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync. `);
												else return [createTextVNode(" Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync. ")];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), {
											title: "Build confidence",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NSpace), {
													vertical: "",
													size: 14
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NProgress), {
																type: "line",
																percentage: 100,
																"indicator-placement": "inside",
																processing: ""
															}, null, _parent, _scopeId));
															_push(ssrRenderComponent(unref(NText), { depth: 2 }, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(` Client build, SSR build, and feature tests are wired for local development and GitHub Actions. `);
																	else return [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")];
																}),
																_: 1
															}, _parent, _scopeId));
														} else return [createVNode(unref(NProgress), {
															type: "line",
															percentage: 100,
															"indicator-placement": "inside",
															processing: ""
														}), createVNode(unref(NText), { depth: 2 }, {
															default: withCtx(() => [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")]),
															_: 1
														})];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NSpace), {
													vertical: "",
													size: 14
												}, {
													default: withCtx(() => [createVNode(unref(NProgress), {
														type: "line",
														percentage: 100,
														"indicator-placement": "inside",
														processing: ""
													}), createVNode(unref(NText), { depth: 2 }, {
														default: withCtx(() => [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")]),
														_: 1
													})]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), {
											title: "Generator commands",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NSpace), {
													vertical: "",
													size: 10
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NText), { depth: 2 }, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(`Generators create Vue .vue files by default.`);
																	else return [createTextVNode("Generators create Vue .vue files by default.")];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(`<!--[-->`);
															ssrRenderList(generatorCommands, (command) => {
																_push(`<div class="command-snippet"${_scopeId}><code class="code-snippet"${_scopeId}>${ssrInterpolate(command)}</code>`);
																_push(ssrRenderComponent(unref(NTooltip), { trigger: "hover" }, {
																	trigger: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NButton), {
																			class: "command-copy",
																			quaternary: "",
																			circle: "",
																			size: "small",
																			"aria-label": "Copy command",
																			onClick: ($event) => copyCommand(command)
																		}, {
																			icon: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) if (copiedCommand.value === command) _push(ssrRenderComponent(unref(Check), null, null, _parent, _scopeId));
																						else _push(ssrRenderComponent(unref(Copy), null, null, _parent, _scopeId));
																						else return [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))];
																					}),
																					_: 2
																				}, _parent, _scopeId));
																				else return [createVNode(unref(NIcon), null, {
																					default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																					_: 2
																				}, 1024)];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																		else return [createVNode(unref(NButton), {
																			class: "command-copy",
																			quaternary: "",
																			circle: "",
																			size: "small",
																			"aria-label": "Copy command",
																			onClick: ($event) => copyCommand(command)
																		}, {
																			icon: withCtx(() => [createVNode(unref(NIcon), null, {
																				default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																				_: 2
																			}, 1024)]),
																			_: 2
																		}, 1032, ["onClick"])];
																	}),
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(` ${ssrInterpolate(copiedCommand.value === command ? "Copied" : "Copy command")}`);
																		else return [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`</div>`);
															});
															_push(`<!--]-->`);
														} else return [createVNode(unref(NText), { depth: 2 }, {
															default: withCtx(() => [createTextVNode("Generators create Vue .vue files by default.")]),
															_: 1
														}), (openBlock(), createBlock(Fragment, null, renderList(generatorCommands, (command) => {
															return createVNode("div", {
																key: command,
																class: "command-snippet"
															}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																trigger: withCtx(() => [createVNode(unref(NButton), {
																	class: "command-copy",
																	quaternary: "",
																	circle: "",
																	size: "small",
																	"aria-label": "Copy command",
																	onClick: ($event) => copyCommand(command)
																}, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																		_: 2
																	}, 1024)]),
																	_: 2
																}, 1032, ["onClick"])]),
																default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																_: 2
															}, 1024)]);
														}), 64))];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NSpace), {
													vertical: "",
													size: 10
												}, {
													default: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
														default: withCtx(() => [createTextVNode("Generators create Vue .vue files by default.")]),
														_: 1
													}), (openBlock(), createBlock(Fragment, null, renderList(generatorCommands, (command) => {
														return createVNode("div", {
															key: command,
															class: "command-snippet"
														}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
															trigger: withCtx(() => [createVNode(unref(NButton), {
																class: "command-copy",
																quaternary: "",
																circle: "",
																size: "small",
																"aria-label": "Copy command",
																onClick: ($event) => copyCommand(command)
															}, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																	_: 2
																}, 1024)]),
																_: 2
															}, 1032, ["onClick"])]),
															default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
															_: 2
														}, 1024)]);
													}), 64))]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`</div>`);
										_push(ssrRenderComponent(unref(NCard), { bordered: "" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NTabs), {
													type: "line",
													animated: ""
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NTabPane), {
																name: "stack",
																tab: "Stack"
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(ssrRenderComponent(unref(NDataTable), {
																		columns: dependencyColumns,
																		data: dependencyRows,
																		pagination: false,
																		bordered: false
																	}, null, _parent, _scopeId));
																	else return [createVNode(unref(NDataTable), {
																		columns: dependencyColumns,
																		data: dependencyRows,
																		pagination: false,
																		bordered: false
																	})];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(ssrRenderComponent(unref(NTabPane), {
																name: "metadata",
																tab: "Metadata"
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(ssrRenderComponent(unref(NDescriptions), {
																		bordered: "",
																		column: 2,
																		"label-placement": "top"
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) {
																				_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Frontend" }, {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(`Vue 3 SFC`);
																						else return [createTextVNode("Vue 3 SFC")];
																					}),
																					_: 1
																				}, _parent, _scopeId));
																				_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Bridge" }, {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(`Inertia Laravel`);
																						else return [createTextVNode("Inertia Laravel")];
																					}),
																					_: 1
																				}, _parent, _scopeId));
																				_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Theme" }, {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(`Cookie-backed SSR`);
																						else return [createTextVNode("Cookie-backed SSR")];
																					}),
																					_: 1
																				}, _parent, _scopeId));
																				_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Notifications" }, {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(`vue-sonner`);
																						else return [createTextVNode("vue-sonner")];
																					}),
																					_: 1
																				}, _parent, _scopeId));
																			} else return [
																				createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																					default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																					_: 1
																				}),
																				createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																					default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																					_: 1
																				}),
																				createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																					default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																					_: 1
																				}),
																				createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																					default: withCtx(() => [createTextVNode("vue-sonner")]),
																					_: 1
																				})
																			];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																	else return [createVNode(unref(NDescriptions), {
																		bordered: "",
																		column: 2,
																		"label-placement": "top"
																	}, {
																		default: withCtx(() => [
																			createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																				default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																				_: 1
																			}),
																			createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																				default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																				_: 1
																			}),
																			createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																				default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																				_: 1
																			}),
																			createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																				default: withCtx(() => [createTextVNode("vue-sonner")]),
																				_: 1
																			})
																		]),
																		_: 1
																	})];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(ssrRenderComponent(unref(NTabPane), {
																name: "timeline",
																tab: "Workflow"
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(ssrRenderComponent(unref(NTimeline), null, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) {
																				_push(ssrRenderComponent(unref(NTimelineItem), {
																					type: "success",
																					title: "Scaffold",
																					content: "Create Laravel, install Inertia, and configure Vue single-file components."
																				}, null, _parent, _scopeId));
																				_push(ssrRenderComponent(unref(NTimelineItem), {
																					type: "info",
																					title: "Theme",
																					content: "Resolve theme on the server and hydrate without flicker."
																				}, null, _parent, _scopeId));
																				_push(ssrRenderComponent(unref(NTimelineItem), {
																					type: "warning",
																					title: "Ship",
																					content: "Build client assets, build SSR, then start the SSR renderer."
																				}, null, _parent, _scopeId));
																			} else return [
																				createVNode(unref(NTimelineItem), {
																					type: "success",
																					title: "Scaffold",
																					content: "Create Laravel, install Inertia, and configure Vue single-file components."
																				}),
																				createVNode(unref(NTimelineItem), {
																					type: "info",
																					title: "Theme",
																					content: "Resolve theme on the server and hydrate without flicker."
																				}),
																				createVNode(unref(NTimelineItem), {
																					type: "warning",
																					title: "Ship",
																					content: "Build client assets, build SSR, then start the SSR renderer."
																				})
																			];
																		}),
																		_: 1
																	}, _parent, _scopeId));
																	else return [createVNode(unref(NTimeline), null, {
																		default: withCtx(() => [
																			createVNode(unref(NTimelineItem), {
																				type: "success",
																				title: "Scaffold",
																				content: "Create Laravel, install Inertia, and configure Vue single-file components."
																			}),
																			createVNode(unref(NTimelineItem), {
																				type: "info",
																				title: "Theme",
																				content: "Resolve theme on the server and hydrate without flicker."
																			}),
																			createVNode(unref(NTimelineItem), {
																				type: "warning",
																				title: "Ship",
																				content: "Build client assets, build SSR, then start the SSR renderer."
																			})
																		]),
																		_: 1
																	})];
																}),
																_: 1
															}, _parent, _scopeId));
														} else return [
															createVNode(unref(NTabPane), {
																name: "stack",
																tab: "Stack"
															}, {
																default: withCtx(() => [createVNode(unref(NDataTable), {
																	columns: dependencyColumns,
																	data: dependencyRows,
																	pagination: false,
																	bordered: false
																})]),
																_: 1
															}),
															createVNode(unref(NTabPane), {
																name: "metadata",
																tab: "Metadata"
															}, {
																default: withCtx(() => [createVNode(unref(NDescriptions), {
																	bordered: "",
																	column: 2,
																	"label-placement": "top"
																}, {
																	default: withCtx(() => [
																		createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																			default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																			_: 1
																		}),
																		createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																			default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																			_: 1
																		}),
																		createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																			default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																			_: 1
																		}),
																		createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																			default: withCtx(() => [createTextVNode("vue-sonner")]),
																			_: 1
																		})
																	]),
																	_: 1
																})]),
																_: 1
															}),
															createVNode(unref(NTabPane), {
																name: "timeline",
																tab: "Workflow"
															}, {
																default: withCtx(() => [createVNode(unref(NTimeline), null, {
																	default: withCtx(() => [
																		createVNode(unref(NTimelineItem), {
																			type: "success",
																			title: "Scaffold",
																			content: "Create Laravel, install Inertia, and configure Vue single-file components."
																		}),
																		createVNode(unref(NTimelineItem), {
																			type: "info",
																			title: "Theme",
																			content: "Resolve theme on the server and hydrate without flicker."
																		}),
																		createVNode(unref(NTimelineItem), {
																			type: "warning",
																			title: "Ship",
																			content: "Build client assets, build SSR, then start the SSR renderer."
																		})
																	]),
																	_: 1
																})]),
																_: 1
															})
														];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NTabs), {
													type: "line",
													animated: ""
												}, {
													default: withCtx(() => [
														createVNode(unref(NTabPane), {
															name: "stack",
															tab: "Stack"
														}, {
															default: withCtx(() => [createVNode(unref(NDataTable), {
																columns: dependencyColumns,
																data: dependencyRows,
																pagination: false,
																bordered: false
															})]),
															_: 1
														}),
														createVNode(unref(NTabPane), {
															name: "metadata",
															tab: "Metadata"
														}, {
															default: withCtx(() => [createVNode(unref(NDescriptions), {
																bordered: "",
																column: 2,
																"label-placement": "top"
															}, {
																default: withCtx(() => [
																	createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																		default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																		_: 1
																	}),
																	createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																		default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																		_: 1
																	}),
																	createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																		default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																		_: 1
																	}),
																	createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																		default: withCtx(() => [createTextVNode("vue-sonner")]),
																		_: 1
																	})
																]),
																_: 1
															})]),
															_: 1
														}),
														createVNode(unref(NTabPane), {
															name: "timeline",
															tab: "Workflow"
														}, {
															default: withCtx(() => [createVNode(unref(NTimeline), null, {
																default: withCtx(() => [
																	createVNode(unref(NTimelineItem), {
																		type: "success",
																		title: "Scaffold",
																		content: "Create Laravel, install Inertia, and configure Vue single-file components."
																	}),
																	createVNode(unref(NTimelineItem), {
																		type: "info",
																		title: "Theme",
																		content: "Resolve theme on the server and hydrate without flicker."
																	}),
																	createVNode(unref(NTimelineItem), {
																		type: "warning",
																		title: "Ship",
																		content: "Build client assets, build SSR, then start the SSR renderer."
																	})
																]),
																_: 1
															})]),
															_: 1
														})
													]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), {
											title: "Daily Naive UI Controls",
											bordered: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(`<div class="controls-grid"${_scopeId}>`);
													_push(ssrRenderComponent(unref(NForm), { "label-placement": "top" }, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(ssrRenderComponent(unref(NFormItem), { label: "Project title" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NInput), {
																			value: formValue.value.title,
																			"onUpdate:value": ($event) => formValue.value.title = $event,
																			placeholder: "Enter a title",
																			clearable: ""
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(NInput), {
																			value: formValue.value.title,
																			"onUpdate:value": ($event) => formValue.value.title = $event,
																			placeholder: "Enter a title",
																			clearable: ""
																		}, null, 8, ["value", "onUpdate:value"])];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NFormItem), { label: "Status" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NSelect), {
																			value: formValue.value.status,
																			"onUpdate:value": ($event) => formValue.value.status = $event,
																			options: statusOptions
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(NSelect), {
																			value: formValue.value.status,
																			"onUpdate:value": ($event) => formValue.value.status = $event,
																			options: statusOptions
																		}, null, 8, ["value", "onUpdate:value"])];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NFormItem), { label: "Due date" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NDatePicker), {
																			value: formValue.value.date,
																			"onUpdate:value": ($event) => formValue.value.date = $event,
																			type: "date",
																			clearable: ""
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(NDatePicker), {
																			value: formValue.value.date,
																			"onUpdate:value": ($event) => formValue.value.date = $event,
																			type: "date",
																			clearable: ""
																		}, null, 8, ["value", "onUpdate:value"])];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NFormItem), { label: "Visibility" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NRadioGroup), {
																			value: formValue.value.visibility,
																			"onUpdate:value": ($event) => formValue.value.visibility = $event
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) {
																					_push(ssrRenderComponent(unref(NRadioButton), { value: "private" }, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Private`);
																							else return [createTextVNode("Private")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					_push(ssrRenderComponent(unref(NRadioButton), { value: "team" }, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Team`);
																							else return [createTextVNode("Team")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					_push(ssrRenderComponent(unref(NRadioButton), { value: "public" }, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Public`);
																							else return [createTextVNode("Public")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																				} else return [
																					createVNode(unref(NRadioButton), { value: "private" }, {
																						default: withCtx(() => [createTextVNode("Private")]),
																						_: 1
																					}),
																					createVNode(unref(NRadioButton), { value: "team" }, {
																						default: withCtx(() => [createTextVNode("Team")]),
																						_: 1
																					}),
																					createVNode(unref(NRadioButton), { value: "public" }, {
																						default: withCtx(() => [createTextVNode("Public")]),
																						_: 1
																					})
																				];
																			}),
																			_: 1
																		}, _parent, _scopeId));
																		else return [createVNode(unref(NRadioGroup), {
																			value: formValue.value.visibility,
																			"onUpdate:value": ($event) => formValue.value.visibility = $event
																		}, {
																			default: withCtx(() => [
																				createVNode(unref(NRadioButton), { value: "private" }, {
																					default: withCtx(() => [createTextVNode("Private")]),
																					_: 1
																				}),
																				createVNode(unref(NRadioButton), { value: "team" }, {
																					default: withCtx(() => [createTextVNode("Team")]),
																					_: 1
																				}),
																				createVNode(unref(NRadioButton), { value: "public" }, {
																					default: withCtx(() => [createTextVNode("Public")]),
																					_: 1
																				})
																			]),
																			_: 1
																		}, 8, ["value", "onUpdate:value"])];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NFormItem), { label: "Enabled" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(NCheckbox), {
																			checked: formValue.value.enabled,
																			"onUpdate:checked": ($event) => formValue.value.enabled = $event
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(` Include this item in the active workspace `);
																				else return [createTextVNode(" Include this item in the active workspace ")];
																			}),
																			_: 1
																		}, _parent, _scopeId));
																		else return [createVNode(unref(NCheckbox), {
																			checked: formValue.value.enabled,
																			"onUpdate:checked": ($event) => formValue.value.enabled = $event
																		}, {
																			default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
																			_: 1
																		}, 8, ["checked", "onUpdate:checked"])];
																	}),
																	_: 1
																}, _parent, _scopeId));
															} else return [
																createVNode(unref(NFormItem), { label: "Project title" }, {
																	default: withCtx(() => [createVNode(unref(NInput), {
																		value: formValue.value.title,
																		"onUpdate:value": ($event) => formValue.value.title = $event,
																		placeholder: "Enter a title",
																		clearable: ""
																	}, null, 8, ["value", "onUpdate:value"])]),
																	_: 1
																}),
																createVNode(unref(NFormItem), { label: "Status" }, {
																	default: withCtx(() => [createVNode(unref(NSelect), {
																		value: formValue.value.status,
																		"onUpdate:value": ($event) => formValue.value.status = $event,
																		options: statusOptions
																	}, null, 8, ["value", "onUpdate:value"])]),
																	_: 1
																}),
																createVNode(unref(NFormItem), { label: "Due date" }, {
																	default: withCtx(() => [createVNode(unref(NDatePicker), {
																		value: formValue.value.date,
																		"onUpdate:value": ($event) => formValue.value.date = $event,
																		type: "date",
																		clearable: ""
																	}, null, 8, ["value", "onUpdate:value"])]),
																	_: 1
																}),
																createVNode(unref(NFormItem), { label: "Visibility" }, {
																	default: withCtx(() => [createVNode(unref(NRadioGroup), {
																		value: formValue.value.visibility,
																		"onUpdate:value": ($event) => formValue.value.visibility = $event
																	}, {
																		default: withCtx(() => [
																			createVNode(unref(NRadioButton), { value: "private" }, {
																				default: withCtx(() => [createTextVNode("Private")]),
																				_: 1
																			}),
																			createVNode(unref(NRadioButton), { value: "team" }, {
																				default: withCtx(() => [createTextVNode("Team")]),
																				_: 1
																			}),
																			createVNode(unref(NRadioButton), { value: "public" }, {
																				default: withCtx(() => [createTextVNode("Public")]),
																				_: 1
																			})
																		]),
																		_: 1
																	}, 8, ["value", "onUpdate:value"])]),
																	_: 1
																}),
																createVNode(unref(NFormItem), { label: "Enabled" }, {
																	default: withCtx(() => [createVNode(unref(NCheckbox), {
																		checked: formValue.value.enabled,
																		"onUpdate:checked": ($event) => formValue.value.enabled = $event
																	}, {
																		default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
																		_: 1
																	}, 8, ["checked", "onUpdate:checked"])]),
																	_: 1
																})
															];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(ssrRenderComponent(unref(NSpace), {
														vertical: "",
														size: 16
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(ssrRenderComponent(unref(NForm), { "label-placement": "top" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(unref(NFormItem), { label: "Priority" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NSlider), {
																						value: formValue.value.priority,
																						"onUpdate:value": ($event) => formValue.value.priority = $event,
																						min: 1,
																						max: 10
																					}, null, _parent, _scopeId));
																					else return [createVNode(unref(NSlider), {
																						value: formValue.value.priority,
																						"onUpdate:value": ($event) => formValue.value.priority = $event,
																						min: 1,
																						max: 10
																					}, null, 8, ["value", "onUpdate:value"])];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NFormItem), { label: "Estimate" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NInputNumber), {
																						value: formValue.value.estimate,
																						"onUpdate:value": ($event) => formValue.value.estimate = $event,
																						min: 1,
																						max: 30
																					}, null, _parent, _scopeId));
																					else return [createVNode(unref(NInputNumber), {
																						value: formValue.value.estimate,
																						"onUpdate:value": ($event) => formValue.value.estimate = $event,
																						min: 1,
																						max: 30
																					}, null, 8, ["value", "onUpdate:value"])];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																		} else return [createVNode(unref(NFormItem), { label: "Priority" }, {
																			default: withCtx(() => [createVNode(unref(NSlider), {
																				value: formValue.value.priority,
																				"onUpdate:value": ($event) => formValue.value.priority = $event,
																				min: 1,
																				max: 10
																			}, null, 8, ["value", "onUpdate:value"])]),
																			_: 1
																		}), createVNode(unref(NFormItem), { label: "Estimate" }, {
																			default: withCtx(() => [createVNode(unref(NInputNumber), {
																				value: formValue.value.estimate,
																				"onUpdate:value": ($event) => formValue.value.estimate = $event,
																				min: 1,
																				max: 30
																			}, null, 8, ["value", "onUpdate:value"])]),
																			_: 1
																		})];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NSpace), { wrap: "" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(unref(NDropdown), {
																				options: menuOptions,
																				onSelect: selectMenuItem
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NButton), { secondary: "" }, {
																						icon: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																								default: withCtx((_, _push, _parent, _scopeId) => {
																									if (_push) _push(ssrRenderComponent(unref(ChevronDown), null, null, _parent, _scopeId));
																									else return [createVNode(unref(ChevronDown))];
																								}),
																								_: 1
																							}, _parent, _scopeId));
																							else return [createVNode(unref(NIcon), null, {
																								default: withCtx(() => [createVNode(unref(ChevronDown))]),
																								_: 1
																							})];
																						}),
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(` Actions `);
																							else return [createTextVNode(" Actions ")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					else return [createVNode(unref(NButton), { secondary: "" }, {
																						icon: withCtx(() => [createVNode(unref(NIcon), null, {
																							default: withCtx(() => [createVNode(unref(ChevronDown))]),
																							_: 1
																						})]),
																						default: withCtx(() => [createTextVNode(" Actions ")]),
																						_: 1
																					})];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NPopover), { trigger: "click" }, {
																				trigger: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NButton), { secondary: "" }, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Popover`);
																							else return [createTextVNode("Popover")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					else return [createVNode(unref(NButton), { secondary: "" }, {
																						default: withCtx(() => [createTextVNode("Popover")]),
																						_: 1
																					})];
																				}),
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NText), null, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Popovers are useful for compact previews, hints, and contextual controls.`);
																							else return [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					else return [createVNode(unref(NText), null, {
																						default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																						_: 1
																					})];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NTooltip), { trigger: "hover" }, {
																				trigger: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NButton), { secondary: "" }, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`Tooltip`);
																							else return [createTextVNode("Tooltip")];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					else return [createVNode(unref(NButton), { secondary: "" }, {
																						default: withCtx(() => [createTextVNode("Tooltip")]),
																						_: 1
																					})];
																				}),
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(` Naive UI tooltip provider is working. `);
																					else return [createTextVNode(" Naive UI tooltip provider is working. ")];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																		} else return [
																			createVNode(unref(NDropdown), {
																				options: menuOptions,
																				onSelect: selectMenuItem
																			}, {
																				default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																					icon: withCtx(() => [createVNode(unref(NIcon), null, {
																						default: withCtx(() => [createVNode(unref(ChevronDown))]),
																						_: 1
																					})]),
																					default: withCtx(() => [createTextVNode(" Actions ")]),
																					_: 1
																				})]),
																				_: 1
																			}),
																			createVNode(unref(NPopover), { trigger: "click" }, {
																				trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																					default: withCtx(() => [createTextVNode("Popover")]),
																					_: 1
																				})]),
																				default: withCtx(() => [createVNode(unref(NText), null, {
																					default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																					_: 1
																				})]),
																				_: 1
																			}),
																			createVNode(unref(NTooltip), { trigger: "hover" }, {
																				trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																					default: withCtx(() => [createTextVNode("Tooltip")]),
																					_: 1
																				})]),
																				default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
																				_: 1
																			})
																		];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NSpace), { wrap: "" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(unref(NButton), {
																				type: "primary",
																				onClick: ($event) => modalOpen.value = true
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(`Open Modal`);
																					else return [createTextVNode("Open Modal")];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NButton), {
																				secondary: "",
																				onClick: ($event) => drawerOpen.value = true
																			}, {
																				icon: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(NIcon), null, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(ssrRenderComponent(unref(PanelRightOpen), null, null, _parent, _scopeId));
																							else return [createVNode(unref(PanelRightOpen))];
																						}),
																						_: 1
																					}, _parent, _scopeId));
																					else return [createVNode(unref(NIcon), null, {
																						default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																						_: 1
																					})];
																				}),
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(` Open Drawer `);
																					else return [createTextVNode(" Open Drawer ")];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NButton), {
																				tertiary: "",
																				type: "success",
																				onClick: openDialog
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(`Dialog`);
																					else return [createTextVNode("Dialog")];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NButton), {
																				tertiary: "",
																				type: "info",
																				onClick: ($event) => unref(message).info("Message provider ready")
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(` Message `);
																					else return [createTextVNode(" Message ")];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																		} else return [
																			createVNode(unref(NButton), {
																				type: "primary",
																				onClick: ($event) => modalOpen.value = true
																			}, {
																				default: withCtx(() => [createTextVNode("Open Modal")]),
																				_: 1
																			}, 8, ["onClick"]),
																			createVNode(unref(NButton), {
																				secondary: "",
																				onClick: ($event) => drawerOpen.value = true
																			}, {
																				icon: withCtx(() => [createVNode(unref(NIcon), null, {
																					default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																					_: 1
																				})]),
																				default: withCtx(() => [createTextVNode(" Open Drawer ")]),
																				_: 1
																			}, 8, ["onClick"]),
																			createVNode(unref(NButton), {
																				tertiary: "",
																				type: "success",
																				onClick: openDialog
																			}, {
																				default: withCtx(() => [createTextVNode("Dialog")]),
																				_: 1
																			}),
																			createVNode(unref(NButton), {
																				tertiary: "",
																				type: "info",
																				onClick: ($event) => unref(message).info("Message provider ready")
																			}, {
																				default: withCtx(() => [createTextVNode(" Message ")]),
																				_: 1
																			}, 8, ["onClick"])
																		];
																	}),
																	_: 1
																}, _parent, _scopeId));
																_push(ssrRenderComponent(unref(NDescriptions), {
																	bordered: "",
																	column: 1,
																	"label-placement": "left"
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Title" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(`${ssrInterpolate(formValue.value.title)}`);
																					else return [createTextVNode(toDisplayString(formValue.value.title), 1)];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Status" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(`${ssrInterpolate(formValue.value.status)}`);
																					else return [createTextVNode(toDisplayString(formValue.value.status), 1)];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(unref(NDescriptionsItem), { label: "Priority" }, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(`${ssrInterpolate(formValue.value.priority)}`);
																					else return [createTextVNode(toDisplayString(formValue.value.priority), 1)];
																				}),
																				_: 1
																			}, _parent, _scopeId));
																		} else return [
																			createVNode(unref(NDescriptionsItem), { label: "Title" }, {
																				default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
																				_: 1
																			}),
																			createVNode(unref(NDescriptionsItem), { label: "Status" }, {
																				default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
																				_: 1
																			}),
																			createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
																				default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
																				_: 1
																			})
																		];
																	}),
																	_: 1
																}, _parent, _scopeId));
															} else return [
																createVNode(unref(NForm), { "label-placement": "top" }, {
																	default: withCtx(() => [createVNode(unref(NFormItem), { label: "Priority" }, {
																		default: withCtx(() => [createVNode(unref(NSlider), {
																			value: formValue.value.priority,
																			"onUpdate:value": ($event) => formValue.value.priority = $event,
																			min: 1,
																			max: 10
																		}, null, 8, ["value", "onUpdate:value"])]),
																		_: 1
																	}), createVNode(unref(NFormItem), { label: "Estimate" }, {
																		default: withCtx(() => [createVNode(unref(NInputNumber), {
																			value: formValue.value.estimate,
																			"onUpdate:value": ($event) => formValue.value.estimate = $event,
																			min: 1,
																			max: 30
																		}, null, 8, ["value", "onUpdate:value"])]),
																		_: 1
																	})]),
																	_: 1
																}),
																createVNode(unref(NSpace), { wrap: "" }, {
																	default: withCtx(() => [
																		createVNode(unref(NDropdown), {
																			options: menuOptions,
																			onSelect: selectMenuItem
																		}, {
																			default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																				icon: withCtx(() => [createVNode(unref(NIcon), null, {
																					default: withCtx(() => [createVNode(unref(ChevronDown))]),
																					_: 1
																				})]),
																				default: withCtx(() => [createTextVNode(" Actions ")]),
																				_: 1
																			})]),
																			_: 1
																		}),
																		createVNode(unref(NPopover), { trigger: "click" }, {
																			trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																				default: withCtx(() => [createTextVNode("Popover")]),
																				_: 1
																			})]),
																			default: withCtx(() => [createVNode(unref(NText), null, {
																				default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																				_: 1
																			})]),
																			_: 1
																		}),
																		createVNode(unref(NTooltip), { trigger: "hover" }, {
																			trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																				default: withCtx(() => [createTextVNode("Tooltip")]),
																				_: 1
																			})]),
																			default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
																			_: 1
																		})
																	]),
																	_: 1
																}),
																createVNode(unref(NSpace), { wrap: "" }, {
																	default: withCtx(() => [
																		createVNode(unref(NButton), {
																			type: "primary",
																			onClick: ($event) => modalOpen.value = true
																		}, {
																			default: withCtx(() => [createTextVNode("Open Modal")]),
																			_: 1
																		}, 8, ["onClick"]),
																		createVNode(unref(NButton), {
																			secondary: "",
																			onClick: ($event) => drawerOpen.value = true
																		}, {
																			icon: withCtx(() => [createVNode(unref(NIcon), null, {
																				default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																				_: 1
																			})]),
																			default: withCtx(() => [createTextVNode(" Open Drawer ")]),
																			_: 1
																		}, 8, ["onClick"]),
																		createVNode(unref(NButton), {
																			tertiary: "",
																			type: "success",
																			onClick: openDialog
																		}, {
																			default: withCtx(() => [createTextVNode("Dialog")]),
																			_: 1
																		}),
																		createVNode(unref(NButton), {
																			tertiary: "",
																			type: "info",
																			onClick: ($event) => unref(message).info("Message provider ready")
																		}, {
																			default: withCtx(() => [createTextVNode(" Message ")]),
																			_: 1
																		}, 8, ["onClick"])
																	]),
																	_: 1
																}),
																createVNode(unref(NDescriptions), {
																	bordered: "",
																	column: 1,
																	"label-placement": "left"
																}, {
																	default: withCtx(() => [
																		createVNode(unref(NDescriptionsItem), { label: "Title" }, {
																			default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
																			_: 1
																		}),
																		createVNode(unref(NDescriptionsItem), { label: "Status" }, {
																			default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
																			_: 1
																		}),
																		createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
																			default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
																			_: 1
																		})
																	]),
																	_: 1
																})
															];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(`</div>`);
												} else return [createVNode("div", { class: "controls-grid" }, [createVNode(unref(NForm), { "label-placement": "top" }, {
													default: withCtx(() => [
														createVNode(unref(NFormItem), { label: "Project title" }, {
															default: withCtx(() => [createVNode(unref(NInput), {
																value: formValue.value.title,
																"onUpdate:value": ($event) => formValue.value.title = $event,
																placeholder: "Enter a title",
																clearable: ""
															}, null, 8, ["value", "onUpdate:value"])]),
															_: 1
														}),
														createVNode(unref(NFormItem), { label: "Status" }, {
															default: withCtx(() => [createVNode(unref(NSelect), {
																value: formValue.value.status,
																"onUpdate:value": ($event) => formValue.value.status = $event,
																options: statusOptions
															}, null, 8, ["value", "onUpdate:value"])]),
															_: 1
														}),
														createVNode(unref(NFormItem), { label: "Due date" }, {
															default: withCtx(() => [createVNode(unref(NDatePicker), {
																value: formValue.value.date,
																"onUpdate:value": ($event) => formValue.value.date = $event,
																type: "date",
																clearable: ""
															}, null, 8, ["value", "onUpdate:value"])]),
															_: 1
														}),
														createVNode(unref(NFormItem), { label: "Visibility" }, {
															default: withCtx(() => [createVNode(unref(NRadioGroup), {
																value: formValue.value.visibility,
																"onUpdate:value": ($event) => formValue.value.visibility = $event
															}, {
																default: withCtx(() => [
																	createVNode(unref(NRadioButton), { value: "private" }, {
																		default: withCtx(() => [createTextVNode("Private")]),
																		_: 1
																	}),
																	createVNode(unref(NRadioButton), { value: "team" }, {
																		default: withCtx(() => [createTextVNode("Team")]),
																		_: 1
																	}),
																	createVNode(unref(NRadioButton), { value: "public" }, {
																		default: withCtx(() => [createTextVNode("Public")]),
																		_: 1
																	})
																]),
																_: 1
															}, 8, ["value", "onUpdate:value"])]),
															_: 1
														}),
														createVNode(unref(NFormItem), { label: "Enabled" }, {
															default: withCtx(() => [createVNode(unref(NCheckbox), {
																checked: formValue.value.enabled,
																"onUpdate:checked": ($event) => formValue.value.enabled = $event
															}, {
																default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
																_: 1
															}, 8, ["checked", "onUpdate:checked"])]),
															_: 1
														})
													]),
													_: 1
												}), createVNode(unref(NSpace), {
													vertical: "",
													size: 16
												}, {
													default: withCtx(() => [
														createVNode(unref(NForm), { "label-placement": "top" }, {
															default: withCtx(() => [createVNode(unref(NFormItem), { label: "Priority" }, {
																default: withCtx(() => [createVNode(unref(NSlider), {
																	value: formValue.value.priority,
																	"onUpdate:value": ($event) => formValue.value.priority = $event,
																	min: 1,
																	max: 10
																}, null, 8, ["value", "onUpdate:value"])]),
																_: 1
															}), createVNode(unref(NFormItem), { label: "Estimate" }, {
																default: withCtx(() => [createVNode(unref(NInputNumber), {
																	value: formValue.value.estimate,
																	"onUpdate:value": ($event) => formValue.value.estimate = $event,
																	min: 1,
																	max: 30
																}, null, 8, ["value", "onUpdate:value"])]),
																_: 1
															})]),
															_: 1
														}),
														createVNode(unref(NSpace), { wrap: "" }, {
															default: withCtx(() => [
																createVNode(unref(NDropdown), {
																	options: menuOptions,
																	onSelect: selectMenuItem
																}, {
																	default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																		icon: withCtx(() => [createVNode(unref(NIcon), null, {
																			default: withCtx(() => [createVNode(unref(ChevronDown))]),
																			_: 1
																		})]),
																		default: withCtx(() => [createTextVNode(" Actions ")]),
																		_: 1
																	})]),
																	_: 1
																}),
																createVNode(unref(NPopover), { trigger: "click" }, {
																	trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																		default: withCtx(() => [createTextVNode("Popover")]),
																		_: 1
																	})]),
																	default: withCtx(() => [createVNode(unref(NText), null, {
																		default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																		_: 1
																	})]),
																	_: 1
																}),
																createVNode(unref(NTooltip), { trigger: "hover" }, {
																	trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																		default: withCtx(() => [createTextVNode("Tooltip")]),
																		_: 1
																	})]),
																	default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
																	_: 1
																})
															]),
															_: 1
														}),
														createVNode(unref(NSpace), { wrap: "" }, {
															default: withCtx(() => [
																createVNode(unref(NButton), {
																	type: "primary",
																	onClick: ($event) => modalOpen.value = true
																}, {
																	default: withCtx(() => [createTextVNode("Open Modal")]),
																	_: 1
																}, 8, ["onClick"]),
																createVNode(unref(NButton), {
																	secondary: "",
																	onClick: ($event) => drawerOpen.value = true
																}, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																		_: 1
																	})]),
																	default: withCtx(() => [createTextVNode(" Open Drawer ")]),
																	_: 1
																}, 8, ["onClick"]),
																createVNode(unref(NButton), {
																	tertiary: "",
																	type: "success",
																	onClick: openDialog
																}, {
																	default: withCtx(() => [createTextVNode("Dialog")]),
																	_: 1
																}),
																createVNode(unref(NButton), {
																	tertiary: "",
																	type: "info",
																	onClick: ($event) => unref(message).info("Message provider ready")
																}, {
																	default: withCtx(() => [createTextVNode(" Message ")]),
																	_: 1
																}, 8, ["onClick"])
															]),
															_: 1
														}),
														createVNode(unref(NDescriptions), {
															bordered: "",
															column: 1,
															"label-placement": "left"
														}, {
															default: withCtx(() => [
																createVNode(unref(NDescriptionsItem), { label: "Title" }, {
																	default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
																	_: 1
																}),
																createVNode(unref(NDescriptionsItem), { label: "Status" }, {
																	default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
																	_: 1
																}),
																createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
																	default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
																	_: 1
																})
															]),
															_: 1
														})
													]),
													_: 1
												})])];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NCard), { bordered: "" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(NSpace), {
													align: "center",
													justify: "space-between"
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(ssrRenderComponent(unref(NSpace), { align: "center" }, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) {
																		_push(ssrRenderComponent(unref(NBadge), {
																			value: "SSR",
																			type: "success"
																		}, null, _parent, _scopeId));
																		_push(ssrRenderComponent(unref(NText), { strong: "" }, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(`Ready for application work`);
																				else return [createTextVNode("Ready for application work")];
																			}),
																			_: 1
																		}, _parent, _scopeId));
																	} else return [createVNode(unref(NBadge), {
																		value: "SSR",
																		type: "success"
																	}), createVNode(unref(NText), { strong: "" }, {
																		default: withCtx(() => [createTextVNode("Ready for application work")]),
																		_: 1
																	})];
																}),
																_: 1
															}, _parent, _scopeId));
															_push(ssrRenderComponent(unref(NButton), {
																tertiary: "",
																type: "primary",
																onClick: notify
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) _push(`Confirm toast wiring`);
																	else return [createTextVNode("Confirm toast wiring")];
																}),
																_: 1
															}, _parent, _scopeId));
														} else return [createVNode(unref(NSpace), { align: "center" }, {
															default: withCtx(() => [createVNode(unref(NBadge), {
																value: "SSR",
																type: "success"
															}), createVNode(unref(NText), { strong: "" }, {
																default: withCtx(() => [createTextVNode("Ready for application work")]),
																_: 1
															})]),
															_: 1
														}), createVNode(unref(NButton), {
															tertiary: "",
															type: "primary",
															onClick: notify
														}, {
															default: withCtx(() => [createTextVNode("Confirm toast wiring")]),
															_: 1
														})];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(unref(NSpace), {
													align: "center",
													justify: "space-between"
												}, {
													default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
														default: withCtx(() => [createVNode(unref(NBadge), {
															value: "SSR",
															type: "success"
														}), createVNode(unref(NText), { strong: "" }, {
															default: withCtx(() => [createTextVNode("Ready for application work")]),
															_: 1
														})]),
														_: 1
													}), createVNode(unref(NButton), {
														tertiary: "",
														type: "primary",
														onClick: notify
													}, {
														default: withCtx(() => [createTextVNode("Confirm toast wiring")]),
														_: 1
													})]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [
										createVNode(unref(NLayoutHeader), {
											class: "app-hero rounded-lg p-5 sm:p-7",
											bordered: false
										}, {
											default: withCtx(() => [createVNode(unref(NPageHeader), null, {
												header: withCtx(() => [createVNode(unref(NSpace), {
													align: "center",
													size: 10
												}, {
													default: withCtx(() => [
														createVNode(unref(NTag), {
															type: "success",
															round: false
														}, {
															default: withCtx(() => [createTextVNode("SSR Ready")]),
															_: 1
														}),
														createVNode(unref(NTag), {
															type: "info",
															round: false
														}, {
															default: withCtx(() => [createTextVNode("Vue SFC")]),
															_: 1
														}),
														createVNode(unref(NTag), {
															type: "warning",
															round: false
														}, {
															default: withCtx(() => [createTextVNode("Naive UI")]),
															_: 1
														})
													]),
													_: 1
												})]),
												title: withCtx(() => [createVNode(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
													default: withCtx(() => [createTextVNode(" Laravel + Vue starter with Naive UI ")]),
													_: 1
												})]),
												subtitle: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
													default: withCtx(() => [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")]),
													_: 1
												})]),
												extra: withCtx(() => [createVNode(unref(NSpace), {
													align: "center",
													size: 16
												}, {
													default: withCtx(() => [
														createVNode(unref(NIcon), { size: 22 }, {
															default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
															_: 1
														}),
														createVNode(unref(NSwitch), {
															value: unref(theme)?.isDark.value,
															"onUpdate:value": unref(theme)?.toggleTheme
														}, null, 8, ["value", "onUpdate:value"]),
														createVNode(unref(NButton), {
															type: "primary",
															size: "large",
															onClick: notify
														}, {
															icon: withCtx(() => [createVNode(unref(NIcon), null, {
																default: withCtx(() => [createVNode(unref(Sparkles))]),
																_: 1
															})]),
															default: withCtx(() => [createTextVNode(" Try Toast ")]),
															_: 1
														})
													]),
													_: 1
												})]),
												_: 1
											})]),
											_: 1
										}),
										createVNode("div", { class: "app-grid" }, [
											createVNode(unref(NCard), {
												title: "Framework",
												bordered: ""
											}, {
												default: withCtx(() => [
													createVNode(unref(NStatistic), {
														label: "Laravel",
														value: props.laravelVersion
													}, null, 8, ["value"]),
													createVNode(unref(NDivider)),
													createVNode(unref(NStatistic), {
														label: "PHP",
														value: props.phpVersion
													}, null, 8, ["value"])
												]),
												_: 1
											}),
											createVNode(unref(NCard), {
												title: "Render Path",
												bordered: ""
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx(() => [
														createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode("Client entry")]),
															_: 1
														}),
														createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/app.js")]),
														createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode("SSR entry")]),
															_: 1
														}),
														createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/ssr.js")])
													]),
													_: 1
												})]),
												_: 1
											}),
											createVNode(unref(NCard), {
												title: "Theme System",
												bordered: ""
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), {
													vertical: "",
													size: 12
												}, {
													default: withCtx(() => [createVNode(unref(NText), null, {
														default: withCtx(() => [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")]),
														_: 1
													}), createVNode(unref(NButton), {
														secondary: "",
														onClick: unref(theme)?.toggleTheme
													}, {
														default: withCtx(() => [createTextVNode("Toggle Theme")]),
														_: 1
													}, 8, ["onClick"])]),
													_: 1
												})]),
												_: 1
											})
										]),
										createVNode(unref(NCard), {
											title: "Installation",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode(unref(NTabs), {
												type: "segment",
												animated: ""
											}, {
												default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(installMethods, (method) => {
													return createVNode(unref(NTabPane), {
														key: method.name,
														name: method.name,
														tab: method.tab
													}, {
														default: withCtx(() => [createVNode(unref(NSpace), {
															vertical: "",
															size: 10
														}, {
															default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
																return openBlock(), createBlock("div", {
																	key: command,
																	class: "command-snippet"
																}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																	trigger: withCtx(() => [createVNode(unref(NButton), {
																		class: "command-copy",
																		quaternary: "",
																		circle: "",
																		size: "small",
																		"aria-label": "Copy command",
																		onClick: ($event) => copyCommand(command)
																	}, {
																		icon: withCtx(() => [createVNode(unref(NIcon), null, {
																			default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																			_: 2
																		}, 1024)]),
																		_: 2
																	}, 1032, ["onClick"])]),
																	default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																	_: 2
																}, 1024)]);
															}), 128))]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1032, ["name", "tab"]);
												}), 64))]),
												_: 1
											}), createVNode(unref(NAlert), {
												class: "mt-4",
												title: "Start command",
												type: "info",
												bordered: ""
											}, {
												default: withCtx(() => [createTextVNode(" Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. ")]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(unref(NCard), { bordered: "" }, {
											default: withCtx(() => [createVNode("div", { class: "feature-grid" }, [createVNode("div", null, [createVNode(unref(NSpace), {
												align: "center",
												size: 10
											}, {
												default: withCtx(() => [createVNode(unref(NIcon), {
													size: 24,
													color: "#18a058"
												}, {
													default: withCtx(() => [createVNode(unref(Zap))]),
													_: 1
												}), createVNode(unref(NH2), { class: "!m-0 !text-2xl" }, {
													default: withCtx(() => [createTextVNode("Included setup")]),
													_: 1
												})]),
												_: 1
											}), createVNode(unref(NList), { class: "mt-4" }, {
												default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(stackItems, (item) => {
													return createVNode(unref(NListItem), { key: item }, {
														default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
															default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
																default: withCtx(() => [createVNode(unref(CheckCircle))]),
																_: 1
															}), createVNode(unref(NText), null, {
																default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
																_: 2
															}, 1024)]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1024);
												}), 64))]),
												_: 1
											})]), createVNode("div", { class: "rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]" }, [createVNode(unref(NText), { depth: 3 }, {
												default: withCtx(() => [createTextVNode("Production start")]),
												_: 1
											}), createVNode("div", { class: "mt-4 flex flex-col gap-3" }, [(openBlock(), createBlock(Fragment, null, renderList(productionCommands, (command) => {
												return createVNode("div", {
													key: command,
													class: "command-snippet"
												}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
													trigger: withCtx(() => [createVNode(unref(NButton), {
														class: "command-copy",
														quaternary: "",
														circle: "",
														size: "small",
														"aria-label": "Copy command",
														onClick: ($event) => copyCommand(command)
													}, {
														icon: withCtx(() => [createVNode(unref(NIcon), null, {
															default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1032, ["onClick"])]),
													default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
													_: 2
												}, 1024)]);
											}), 64))])])])]),
											_: 1
										}),
										createVNode("div", { class: "app-grid" }, [
											createVNode(unref(NAlert), {
												title: "Theme cache",
												type: "success",
												bordered: ""
											}, {
												default: withCtx(() => [createTextVNode(" Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync. ")]),
												_: 1
											}),
											createVNode(unref(NCard), {
												title: "Build confidence",
												bordered: ""
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), {
													vertical: "",
													size: 14
												}, {
													default: withCtx(() => [createVNode(unref(NProgress), {
														type: "line",
														percentage: 100,
														"indicator-placement": "inside",
														processing: ""
													}), createVNode(unref(NText), { depth: 2 }, {
														default: withCtx(() => [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")]),
														_: 1
													})]),
													_: 1
												})]),
												_: 1
											}),
											createVNode(unref(NCard), {
												title: "Generator commands",
												bordered: ""
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), {
													vertical: "",
													size: 10
												}, {
													default: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
														default: withCtx(() => [createTextVNode("Generators create Vue .vue files by default.")]),
														_: 1
													}), (openBlock(), createBlock(Fragment, null, renderList(generatorCommands, (command) => {
														return createVNode("div", {
															key: command,
															class: "command-snippet"
														}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
															trigger: withCtx(() => [createVNode(unref(NButton), {
																class: "command-copy",
																quaternary: "",
																circle: "",
																size: "small",
																"aria-label": "Copy command",
																onClick: ($event) => copyCommand(command)
															}, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																	_: 2
																}, 1024)]),
																_: 2
															}, 1032, ["onClick"])]),
															default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
															_: 2
														}, 1024)]);
													}), 64))]),
													_: 1
												})]),
												_: 1
											})
										]),
										createVNode(unref(NCard), { bordered: "" }, {
											default: withCtx(() => [createVNode(unref(NTabs), {
												type: "line",
												animated: ""
											}, {
												default: withCtx(() => [
													createVNode(unref(NTabPane), {
														name: "stack",
														tab: "Stack"
													}, {
														default: withCtx(() => [createVNode(unref(NDataTable), {
															columns: dependencyColumns,
															data: dependencyRows,
															pagination: false,
															bordered: false
														})]),
														_: 1
													}),
													createVNode(unref(NTabPane), {
														name: "metadata",
														tab: "Metadata"
													}, {
														default: withCtx(() => [createVNode(unref(NDescriptions), {
															bordered: "",
															column: 2,
															"label-placement": "top"
														}, {
															default: withCtx(() => [
																createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																	default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																	_: 1
																}),
																createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																	default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																	_: 1
																}),
																createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																	default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																	_: 1
																}),
																createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																	default: withCtx(() => [createTextVNode("vue-sonner")]),
																	_: 1
																})
															]),
															_: 1
														})]),
														_: 1
													}),
													createVNode(unref(NTabPane), {
														name: "timeline",
														tab: "Workflow"
													}, {
														default: withCtx(() => [createVNode(unref(NTimeline), null, {
															default: withCtx(() => [
																createVNode(unref(NTimelineItem), {
																	type: "success",
																	title: "Scaffold",
																	content: "Create Laravel, install Inertia, and configure Vue single-file components."
																}),
																createVNode(unref(NTimelineItem), {
																	type: "info",
																	title: "Theme",
																	content: "Resolve theme on the server and hydrate without flicker."
																}),
																createVNode(unref(NTimelineItem), {
																	type: "warning",
																	title: "Ship",
																	content: "Build client assets, build SSR, then start the SSR renderer."
																})
															]),
															_: 1
														})]),
														_: 1
													})
												]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(unref(NCard), {
											title: "Daily Naive UI Controls",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode("div", { class: "controls-grid" }, [createVNode(unref(NForm), { "label-placement": "top" }, {
												default: withCtx(() => [
													createVNode(unref(NFormItem), { label: "Project title" }, {
														default: withCtx(() => [createVNode(unref(NInput), {
															value: formValue.value.title,
															"onUpdate:value": ($event) => formValue.value.title = $event,
															placeholder: "Enter a title",
															clearable: ""
														}, null, 8, ["value", "onUpdate:value"])]),
														_: 1
													}),
													createVNode(unref(NFormItem), { label: "Status" }, {
														default: withCtx(() => [createVNode(unref(NSelect), {
															value: formValue.value.status,
															"onUpdate:value": ($event) => formValue.value.status = $event,
															options: statusOptions
														}, null, 8, ["value", "onUpdate:value"])]),
														_: 1
													}),
													createVNode(unref(NFormItem), { label: "Due date" }, {
														default: withCtx(() => [createVNode(unref(NDatePicker), {
															value: formValue.value.date,
															"onUpdate:value": ($event) => formValue.value.date = $event,
															type: "date",
															clearable: ""
														}, null, 8, ["value", "onUpdate:value"])]),
														_: 1
													}),
													createVNode(unref(NFormItem), { label: "Visibility" }, {
														default: withCtx(() => [createVNode(unref(NRadioGroup), {
															value: formValue.value.visibility,
															"onUpdate:value": ($event) => formValue.value.visibility = $event
														}, {
															default: withCtx(() => [
																createVNode(unref(NRadioButton), { value: "private" }, {
																	default: withCtx(() => [createTextVNode("Private")]),
																	_: 1
																}),
																createVNode(unref(NRadioButton), { value: "team" }, {
																	default: withCtx(() => [createTextVNode("Team")]),
																	_: 1
																}),
																createVNode(unref(NRadioButton), { value: "public" }, {
																	default: withCtx(() => [createTextVNode("Public")]),
																	_: 1
																})
															]),
															_: 1
														}, 8, ["value", "onUpdate:value"])]),
														_: 1
													}),
													createVNode(unref(NFormItem), { label: "Enabled" }, {
														default: withCtx(() => [createVNode(unref(NCheckbox), {
															checked: formValue.value.enabled,
															"onUpdate:checked": ($event) => formValue.value.enabled = $event
														}, {
															default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
															_: 1
														}, 8, ["checked", "onUpdate:checked"])]),
														_: 1
													})
												]),
												_: 1
											}), createVNode(unref(NSpace), {
												vertical: "",
												size: 16
											}, {
												default: withCtx(() => [
													createVNode(unref(NForm), { "label-placement": "top" }, {
														default: withCtx(() => [createVNode(unref(NFormItem), { label: "Priority" }, {
															default: withCtx(() => [createVNode(unref(NSlider), {
																value: formValue.value.priority,
																"onUpdate:value": ($event) => formValue.value.priority = $event,
																min: 1,
																max: 10
															}, null, 8, ["value", "onUpdate:value"])]),
															_: 1
														}), createVNode(unref(NFormItem), { label: "Estimate" }, {
															default: withCtx(() => [createVNode(unref(NInputNumber), {
																value: formValue.value.estimate,
																"onUpdate:value": ($event) => formValue.value.estimate = $event,
																min: 1,
																max: 30
															}, null, 8, ["value", "onUpdate:value"])]),
															_: 1
														})]),
														_: 1
													}),
													createVNode(unref(NSpace), { wrap: "" }, {
														default: withCtx(() => [
															createVNode(unref(NDropdown), {
																options: menuOptions,
																onSelect: selectMenuItem
															}, {
																default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [createVNode(unref(ChevronDown))]),
																		_: 1
																	})]),
																	default: withCtx(() => [createTextVNode(" Actions ")]),
																	_: 1
																})]),
																_: 1
															}),
															createVNode(unref(NPopover), { trigger: "click" }, {
																trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																	default: withCtx(() => [createTextVNode("Popover")]),
																	_: 1
																})]),
																default: withCtx(() => [createVNode(unref(NText), null, {
																	default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																	_: 1
																})]),
																_: 1
															}),
															createVNode(unref(NTooltip), { trigger: "hover" }, {
																trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																	default: withCtx(() => [createTextVNode("Tooltip")]),
																	_: 1
																})]),
																default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
																_: 1
															})
														]),
														_: 1
													}),
													createVNode(unref(NSpace), { wrap: "" }, {
														default: withCtx(() => [
															createVNode(unref(NButton), {
																type: "primary",
																onClick: ($event) => modalOpen.value = true
															}, {
																default: withCtx(() => [createTextVNode("Open Modal")]),
																_: 1
															}, 8, ["onClick"]),
															createVNode(unref(NButton), {
																secondary: "",
																onClick: ($event) => drawerOpen.value = true
															}, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																	_: 1
																})]),
																default: withCtx(() => [createTextVNode(" Open Drawer ")]),
																_: 1
															}, 8, ["onClick"]),
															createVNode(unref(NButton), {
																tertiary: "",
																type: "success",
																onClick: openDialog
															}, {
																default: withCtx(() => [createTextVNode("Dialog")]),
																_: 1
															}),
															createVNode(unref(NButton), {
																tertiary: "",
																type: "info",
																onClick: ($event) => unref(message).info("Message provider ready")
															}, {
																default: withCtx(() => [createTextVNode(" Message ")]),
																_: 1
															}, 8, ["onClick"])
														]),
														_: 1
													}),
													createVNode(unref(NDescriptions), {
														bordered: "",
														column: 1,
														"label-placement": "left"
													}, {
														default: withCtx(() => [
															createVNode(unref(NDescriptionsItem), { label: "Title" }, {
																default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
																_: 1
															}),
															createVNode(unref(NDescriptionsItem), { label: "Status" }, {
																default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
																_: 1
															}),
															createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
																default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
																_: 1
															})
														]),
														_: 1
													})
												]),
												_: 1
											})])]),
											_: 1
										}),
										createVNode(unref(NCard), { bordered: "" }, {
											default: withCtx(() => [createVNode(unref(NSpace), {
												align: "center",
												justify: "space-between"
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
													default: withCtx(() => [createVNode(unref(NBadge), {
														value: "SSR",
														type: "success"
													}), createVNode(unref(NText), { strong: "" }, {
														default: withCtx(() => [createTextVNode("Ready for application work")]),
														_: 1
													})]),
													_: 1
												}), createVNode(unref(NButton), {
													tertiary: "",
													type: "primary",
													onClick: notify
												}, {
													default: withCtx(() => [createTextVNode("Confirm toast wiring")]),
													_: 1
												})]),
												_: 1
											})]),
											_: 1
										})
									];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [createVNode(unref(NSpace), {
								vertical: "",
								size: 22
							}, {
								default: withCtx(() => [
									createVNode(unref(NLayoutHeader), {
										class: "app-hero rounded-lg p-5 sm:p-7",
										bordered: false
									}, {
										default: withCtx(() => [createVNode(unref(NPageHeader), null, {
											header: withCtx(() => [createVNode(unref(NSpace), {
												align: "center",
												size: 10
											}, {
												default: withCtx(() => [
													createVNode(unref(NTag), {
														type: "success",
														round: false
													}, {
														default: withCtx(() => [createTextVNode("SSR Ready")]),
														_: 1
													}),
													createVNode(unref(NTag), {
														type: "info",
														round: false
													}, {
														default: withCtx(() => [createTextVNode("Vue SFC")]),
														_: 1
													}),
													createVNode(unref(NTag), {
														type: "warning",
														round: false
													}, {
														default: withCtx(() => [createTextVNode("Naive UI")]),
														_: 1
													})
												]),
												_: 1
											})]),
											title: withCtx(() => [createVNode(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
												default: withCtx(() => [createTextVNode(" Laravel + Vue starter with Naive UI ")]),
												_: 1
											})]),
											subtitle: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
												default: withCtx(() => [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")]),
												_: 1
											})]),
											extra: withCtx(() => [createVNode(unref(NSpace), {
												align: "center",
												size: 16
											}, {
												default: withCtx(() => [
													createVNode(unref(NIcon), { size: 22 }, {
														default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
														_: 1
													}),
													createVNode(unref(NSwitch), {
														value: unref(theme)?.isDark.value,
														"onUpdate:value": unref(theme)?.toggleTheme
													}, null, 8, ["value", "onUpdate:value"]),
													createVNode(unref(NButton), {
														type: "primary",
														size: "large",
														onClick: notify
													}, {
														icon: withCtx(() => [createVNode(unref(NIcon), null, {
															default: withCtx(() => [createVNode(unref(Sparkles))]),
															_: 1
														})]),
														default: withCtx(() => [createTextVNode(" Try Toast ")]),
														_: 1
													})
												]),
												_: 1
											})]),
											_: 1
										})]),
										_: 1
									}),
									createVNode("div", { class: "app-grid" }, [
										createVNode(unref(NCard), {
											title: "Framework",
											bordered: ""
										}, {
											default: withCtx(() => [
												createVNode(unref(NStatistic), {
													label: "Laravel",
													value: props.laravelVersion
												}, null, 8, ["value"]),
												createVNode(unref(NDivider)),
												createVNode(unref(NStatistic), {
													label: "PHP",
													value: props.phpVersion
												}, null, 8, ["value"])
											]),
											_: 1
										}),
										createVNode(unref(NCard), {
											title: "Render Path",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode(unref(NSpace), {
												vertical: "",
												size: 12
											}, {
												default: withCtx(() => [
													createVNode(unref(NText), null, {
														default: withCtx(() => [createTextVNode("Client entry")]),
														_: 1
													}),
													createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/app.js")]),
													createVNode(unref(NText), null, {
														default: withCtx(() => [createTextVNode("SSR entry")]),
														_: 1
													}),
													createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/ssr.js")])
												]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(unref(NCard), {
											title: "Theme System",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode(unref(NSpace), {
												vertical: "",
												size: 12
											}, {
												default: withCtx(() => [createVNode(unref(NText), null, {
													default: withCtx(() => [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")]),
													_: 1
												}), createVNode(unref(NButton), {
													secondary: "",
													onClick: unref(theme)?.toggleTheme
												}, {
													default: withCtx(() => [createTextVNode("Toggle Theme")]),
													_: 1
												}, 8, ["onClick"])]),
												_: 1
											})]),
											_: 1
										})
									]),
									createVNode(unref(NCard), {
										title: "Installation",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode(unref(NTabs), {
											type: "segment",
											animated: ""
										}, {
											default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(installMethods, (method) => {
												return createVNode(unref(NTabPane), {
													key: method.name,
													name: method.name,
													tab: method.tab
												}, {
													default: withCtx(() => [createVNode(unref(NSpace), {
														vertical: "",
														size: 10
													}, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
															return openBlock(), createBlock("div", {
																key: command,
																class: "command-snippet"
															}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
																trigger: withCtx(() => [createVNode(unref(NButton), {
																	class: "command-copy",
																	quaternary: "",
																	circle: "",
																	size: "small",
																	"aria-label": "Copy command",
																	onClick: ($event) => copyCommand(command)
																}, {
																	icon: withCtx(() => [createVNode(unref(NIcon), null, {
																		default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																		_: 2
																	}, 1024)]),
																	_: 2
																}, 1032, ["onClick"])]),
																default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
																_: 2
															}, 1024)]);
														}), 128))]),
														_: 2
													}, 1024)]),
													_: 2
												}, 1032, ["name", "tab"]);
											}), 64))]),
											_: 1
										}), createVNode(unref(NAlert), {
											class: "mt-4",
											title: "Start command",
											type: "info",
											bordered: ""
										}, {
											default: withCtx(() => [createTextVNode(" Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. ")]),
											_: 1
										})]),
										_: 1
									}),
									createVNode(unref(NCard), { bordered: "" }, {
										default: withCtx(() => [createVNode("div", { class: "feature-grid" }, [createVNode("div", null, [createVNode(unref(NSpace), {
											align: "center",
											size: 10
										}, {
											default: withCtx(() => [createVNode(unref(NIcon), {
												size: 24,
												color: "#18a058"
											}, {
												default: withCtx(() => [createVNode(unref(Zap))]),
												_: 1
											}), createVNode(unref(NH2), { class: "!m-0 !text-2xl" }, {
												default: withCtx(() => [createTextVNode("Included setup")]),
												_: 1
											})]),
											_: 1
										}), createVNode(unref(NList), { class: "mt-4" }, {
											default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(stackItems, (item) => {
												return createVNode(unref(NListItem), { key: item }, {
													default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
														default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
															default: withCtx(() => [createVNode(unref(CheckCircle))]),
															_: 1
														}), createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1024)]),
													_: 2
												}, 1024);
											}), 64))]),
											_: 1
										})]), createVNode("div", { class: "rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]" }, [createVNode(unref(NText), { depth: 3 }, {
											default: withCtx(() => [createTextVNode("Production start")]),
											_: 1
										}), createVNode("div", { class: "mt-4 flex flex-col gap-3" }, [(openBlock(), createBlock(Fragment, null, renderList(productionCommands, (command) => {
											return createVNode("div", {
												key: command,
												class: "command-snippet"
											}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
												trigger: withCtx(() => [createVNode(unref(NButton), {
													class: "command-copy",
													quaternary: "",
													circle: "",
													size: "small",
													"aria-label": "Copy command",
													onClick: ($event) => copyCommand(command)
												}, {
													icon: withCtx(() => [createVNode(unref(NIcon), null, {
														default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
														_: 2
													}, 1024)]),
													_: 2
												}, 1032, ["onClick"])]),
												default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
												_: 2
											}, 1024)]);
										}), 64))])])])]),
										_: 1
									}),
									createVNode("div", { class: "app-grid" }, [
										createVNode(unref(NAlert), {
											title: "Theme cache",
											type: "success",
											bordered: ""
										}, {
											default: withCtx(() => [createTextVNode(" Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync. ")]),
											_: 1
										}),
										createVNode(unref(NCard), {
											title: "Build confidence",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode(unref(NSpace), {
												vertical: "",
												size: 14
											}, {
												default: withCtx(() => [createVNode(unref(NProgress), {
													type: "line",
													percentage: 100,
													"indicator-placement": "inside",
													processing: ""
												}), createVNode(unref(NText), { depth: 2 }, {
													default: withCtx(() => [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")]),
													_: 1
												})]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(unref(NCard), {
											title: "Generator commands",
											bordered: ""
										}, {
											default: withCtx(() => [createVNode(unref(NSpace), {
												vertical: "",
												size: 10
											}, {
												default: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
													default: withCtx(() => [createTextVNode("Generators create Vue .vue files by default.")]),
													_: 1
												}), (openBlock(), createBlock(Fragment, null, renderList(generatorCommands, (command) => {
													return createVNode("div", {
														key: command,
														class: "command-snippet"
													}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
														trigger: withCtx(() => [createVNode(unref(NButton), {
															class: "command-copy",
															quaternary: "",
															circle: "",
															size: "small",
															"aria-label": "Copy command",
															onClick: ($event) => copyCommand(command)
														}, {
															icon: withCtx(() => [createVNode(unref(NIcon), null, {
																default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																_: 2
															}, 1024)]),
															_: 2
														}, 1032, ["onClick"])]),
														default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
														_: 2
													}, 1024)]);
												}), 64))]),
												_: 1
											})]),
											_: 1
										})
									]),
									createVNode(unref(NCard), { bordered: "" }, {
										default: withCtx(() => [createVNode(unref(NTabs), {
											type: "line",
											animated: ""
										}, {
											default: withCtx(() => [
												createVNode(unref(NTabPane), {
													name: "stack",
													tab: "Stack"
												}, {
													default: withCtx(() => [createVNode(unref(NDataTable), {
														columns: dependencyColumns,
														data: dependencyRows,
														pagination: false,
														bordered: false
													})]),
													_: 1
												}),
												createVNode(unref(NTabPane), {
													name: "metadata",
													tab: "Metadata"
												}, {
													default: withCtx(() => [createVNode(unref(NDescriptions), {
														bordered: "",
														column: 2,
														"label-placement": "top"
													}, {
														default: withCtx(() => [
															createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
																default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
																_: 1
															}),
															createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
																default: withCtx(() => [createTextVNode("Inertia Laravel")]),
																_: 1
															}),
															createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
																default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
																_: 1
															}),
															createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
																default: withCtx(() => [createTextVNode("vue-sonner")]),
																_: 1
															})
														]),
														_: 1
													})]),
													_: 1
												}),
												createVNode(unref(NTabPane), {
													name: "timeline",
													tab: "Workflow"
												}, {
													default: withCtx(() => [createVNode(unref(NTimeline), null, {
														default: withCtx(() => [
															createVNode(unref(NTimelineItem), {
																type: "success",
																title: "Scaffold",
																content: "Create Laravel, install Inertia, and configure Vue single-file components."
															}),
															createVNode(unref(NTimelineItem), {
																type: "info",
																title: "Theme",
																content: "Resolve theme on the server and hydrate without flicker."
															}),
															createVNode(unref(NTimelineItem), {
																type: "warning",
																title: "Ship",
																content: "Build client assets, build SSR, then start the SSR renderer."
															})
														]),
														_: 1
													})]),
													_: 1
												})
											]),
											_: 1
										})]),
										_: 1
									}),
									createVNode(unref(NCard), {
										title: "Daily Naive UI Controls",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode("div", { class: "controls-grid" }, [createVNode(unref(NForm), { "label-placement": "top" }, {
											default: withCtx(() => [
												createVNode(unref(NFormItem), { label: "Project title" }, {
													default: withCtx(() => [createVNode(unref(NInput), {
														value: formValue.value.title,
														"onUpdate:value": ($event) => formValue.value.title = $event,
														placeholder: "Enter a title",
														clearable: ""
													}, null, 8, ["value", "onUpdate:value"])]),
													_: 1
												}),
												createVNode(unref(NFormItem), { label: "Status" }, {
													default: withCtx(() => [createVNode(unref(NSelect), {
														value: formValue.value.status,
														"onUpdate:value": ($event) => formValue.value.status = $event,
														options: statusOptions
													}, null, 8, ["value", "onUpdate:value"])]),
													_: 1
												}),
												createVNode(unref(NFormItem), { label: "Due date" }, {
													default: withCtx(() => [createVNode(unref(NDatePicker), {
														value: formValue.value.date,
														"onUpdate:value": ($event) => formValue.value.date = $event,
														type: "date",
														clearable: ""
													}, null, 8, ["value", "onUpdate:value"])]),
													_: 1
												}),
												createVNode(unref(NFormItem), { label: "Visibility" }, {
													default: withCtx(() => [createVNode(unref(NRadioGroup), {
														value: formValue.value.visibility,
														"onUpdate:value": ($event) => formValue.value.visibility = $event
													}, {
														default: withCtx(() => [
															createVNode(unref(NRadioButton), { value: "private" }, {
																default: withCtx(() => [createTextVNode("Private")]),
																_: 1
															}),
															createVNode(unref(NRadioButton), { value: "team" }, {
																default: withCtx(() => [createTextVNode("Team")]),
																_: 1
															}),
															createVNode(unref(NRadioButton), { value: "public" }, {
																default: withCtx(() => [createTextVNode("Public")]),
																_: 1
															})
														]),
														_: 1
													}, 8, ["value", "onUpdate:value"])]),
													_: 1
												}),
												createVNode(unref(NFormItem), { label: "Enabled" }, {
													default: withCtx(() => [createVNode(unref(NCheckbox), {
														checked: formValue.value.enabled,
														"onUpdate:checked": ($event) => formValue.value.enabled = $event
													}, {
														default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
														_: 1
													}, 8, ["checked", "onUpdate:checked"])]),
													_: 1
												})
											]),
											_: 1
										}), createVNode(unref(NSpace), {
											vertical: "",
											size: 16
										}, {
											default: withCtx(() => [
												createVNode(unref(NForm), { "label-placement": "top" }, {
													default: withCtx(() => [createVNode(unref(NFormItem), { label: "Priority" }, {
														default: withCtx(() => [createVNode(unref(NSlider), {
															value: formValue.value.priority,
															"onUpdate:value": ($event) => formValue.value.priority = $event,
															min: 1,
															max: 10
														}, null, 8, ["value", "onUpdate:value"])]),
														_: 1
													}), createVNode(unref(NFormItem), { label: "Estimate" }, {
														default: withCtx(() => [createVNode(unref(NInputNumber), {
															value: formValue.value.estimate,
															"onUpdate:value": ($event) => formValue.value.estimate = $event,
															min: 1,
															max: 30
														}, null, 8, ["value", "onUpdate:value"])]),
														_: 1
													})]),
													_: 1
												}),
												createVNode(unref(NSpace), { wrap: "" }, {
													default: withCtx(() => [
														createVNode(unref(NDropdown), {
															options: menuOptions,
															onSelect: selectMenuItem
														}, {
															default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [createVNode(unref(ChevronDown))]),
																	_: 1
																})]),
																default: withCtx(() => [createTextVNode(" Actions ")]),
																_: 1
															})]),
															_: 1
														}),
														createVNode(unref(NPopover), { trigger: "click" }, {
															trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																default: withCtx(() => [createTextVNode("Popover")]),
																_: 1
															})]),
															default: withCtx(() => [createVNode(unref(NText), null, {
																default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
																_: 1
															})]),
															_: 1
														}),
														createVNode(unref(NTooltip), { trigger: "hover" }, {
															trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
																default: withCtx(() => [createTextVNode("Tooltip")]),
																_: 1
															})]),
															default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
															_: 1
														})
													]),
													_: 1
												}),
												createVNode(unref(NSpace), { wrap: "" }, {
													default: withCtx(() => [
														createVNode(unref(NButton), {
															type: "primary",
															onClick: ($event) => modalOpen.value = true
														}, {
															default: withCtx(() => [createTextVNode("Open Modal")]),
															_: 1
														}, 8, ["onClick"]),
														createVNode(unref(NButton), {
															secondary: "",
															onClick: ($event) => drawerOpen.value = true
														}, {
															icon: withCtx(() => [createVNode(unref(NIcon), null, {
																default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
																_: 1
															})]),
															default: withCtx(() => [createTextVNode(" Open Drawer ")]),
															_: 1
														}, 8, ["onClick"]),
														createVNode(unref(NButton), {
															tertiary: "",
															type: "success",
															onClick: openDialog
														}, {
															default: withCtx(() => [createTextVNode("Dialog")]),
															_: 1
														}),
														createVNode(unref(NButton), {
															tertiary: "",
															type: "info",
															onClick: ($event) => unref(message).info("Message provider ready")
														}, {
															default: withCtx(() => [createTextVNode(" Message ")]),
															_: 1
														}, 8, ["onClick"])
													]),
													_: 1
												}),
												createVNode(unref(NDescriptions), {
													bordered: "",
													column: 1,
													"label-placement": "left"
												}, {
													default: withCtx(() => [
														createVNode(unref(NDescriptionsItem), { label: "Title" }, {
															default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
															_: 1
														}),
														createVNode(unref(NDescriptionsItem), { label: "Status" }, {
															default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
															_: 1
														}),
														createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
															default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
															_: 1
														})
													]),
													_: 1
												})
											]),
											_: 1
										})])]),
										_: 1
									}),
									createVNode(unref(NCard), { bordered: "" }, {
										default: withCtx(() => [createVNode(unref(NSpace), {
											align: "center",
											justify: "space-between"
										}, {
											default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
												default: withCtx(() => [createVNode(unref(NBadge), {
													value: "SSR",
													type: "success"
												}), createVNode(unref(NText), { strong: "" }, {
													default: withCtx(() => [createTextVNode("Ready for application work")]),
													_: 1
												})]),
												_: 1
											}), createVNode(unref(NButton), {
												tertiary: "",
												type: "primary",
												onClick: notify
											}, {
												default: withCtx(() => [createTextVNode("Confirm toast wiring")]),
												_: 1
											})]),
											_: 1
										})]),
										_: 1
									})
								]),
								_: 1
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(NLayoutContent), {
						class: "app-container",
						embedded: ""
					}, {
						default: withCtx(() => [createVNode(unref(NSpace), {
							vertical: "",
							size: 22
						}, {
							default: withCtx(() => [
								createVNode(unref(NLayoutHeader), {
									class: "app-hero rounded-lg p-5 sm:p-7",
									bordered: false
								}, {
									default: withCtx(() => [createVNode(unref(NPageHeader), null, {
										header: withCtx(() => [createVNode(unref(NSpace), {
											align: "center",
											size: 10
										}, {
											default: withCtx(() => [
												createVNode(unref(NTag), {
													type: "success",
													round: false
												}, {
													default: withCtx(() => [createTextVNode("SSR Ready")]),
													_: 1
												}),
												createVNode(unref(NTag), {
													type: "info",
													round: false
												}, {
													default: withCtx(() => [createTextVNode("Vue SFC")]),
													_: 1
												}),
												createVNode(unref(NTag), {
													type: "warning",
													round: false
												}, {
													default: withCtx(() => [createTextVNode("Naive UI")]),
													_: 1
												})
											]),
											_: 1
										})]),
										title: withCtx(() => [createVNode(unref(NH1), { class: "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, {
											default: withCtx(() => [createTextVNode(" Laravel + Vue starter with Naive UI ")]),
											_: 1
										})]),
										subtitle: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
											default: withCtx(() => [createTextVNode(" A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected. ")]),
											_: 1
										})]),
										extra: withCtx(() => [createVNode(unref(NSpace), {
											align: "center",
											size: 16
										}, {
											default: withCtx(() => [
												createVNode(unref(NIcon), { size: 22 }, {
													default: withCtx(() => [unref(theme)?.isDark.value ? (openBlock(), createBlock(unref(Moon), { key: 0 })) : (openBlock(), createBlock(unref(Sun), { key: 1 }))]),
													_: 1
												}),
												createVNode(unref(NSwitch), {
													value: unref(theme)?.isDark.value,
													"onUpdate:value": unref(theme)?.toggleTheme
												}, null, 8, ["value", "onUpdate:value"]),
												createVNode(unref(NButton), {
													type: "primary",
													size: "large",
													onClick: notify
												}, {
													icon: withCtx(() => [createVNode(unref(NIcon), null, {
														default: withCtx(() => [createVNode(unref(Sparkles))]),
														_: 1
													})]),
													default: withCtx(() => [createTextVNode(" Try Toast ")]),
													_: 1
												})
											]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								}),
								createVNode("div", { class: "app-grid" }, [
									createVNode(unref(NCard), {
										title: "Framework",
										bordered: ""
									}, {
										default: withCtx(() => [
											createVNode(unref(NStatistic), {
												label: "Laravel",
												value: props.laravelVersion
											}, null, 8, ["value"]),
											createVNode(unref(NDivider)),
											createVNode(unref(NStatistic), {
												label: "PHP",
												value: props.phpVersion
											}, null, 8, ["value"])
										]),
										_: 1
									}),
									createVNode(unref(NCard), {
										title: "Render Path",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode(unref(NSpace), {
											vertical: "",
											size: 12
										}, {
											default: withCtx(() => [
												createVNode(unref(NText), null, {
													default: withCtx(() => [createTextVNode("Client entry")]),
													_: 1
												}),
												createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/app.js")]),
												createVNode(unref(NText), null, {
													default: withCtx(() => [createTextVNode("SSR entry")]),
													_: 1
												}),
												createVNode("div", { class: "command-snippet" }, [createVNode("code", { class: "code-snippet" }, "resources/js/ssr.js")])
											]),
											_: 1
										})]),
										_: 1
									}),
									createVNode(unref(NCard), {
										title: "Theme System",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode(unref(NSpace), {
											vertical: "",
											size: 12
										}, {
											default: withCtx(() => [createVNode(unref(NText), null, {
												default: withCtx(() => [createTextVNode(" Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag. ")]),
												_: 1
											}), createVNode(unref(NButton), {
												secondary: "",
												onClick: unref(theme)?.toggleTheme
											}, {
												default: withCtx(() => [createTextVNode("Toggle Theme")]),
												_: 1
											}, 8, ["onClick"])]),
											_: 1
										})]),
										_: 1
									})
								]),
								createVNode(unref(NCard), {
									title: "Installation",
									bordered: ""
								}, {
									default: withCtx(() => [createVNode(unref(NTabs), {
										type: "segment",
										animated: ""
									}, {
										default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(installMethods, (method) => {
											return createVNode(unref(NTabPane), {
												key: method.name,
												name: method.name,
												tab: method.tab
											}, {
												default: withCtx(() => [createVNode(unref(NSpace), {
													vertical: "",
													size: 10
												}, {
													default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(method.commands, (command) => {
														return openBlock(), createBlock("div", {
															key: command,
															class: "command-snippet"
														}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
															trigger: withCtx(() => [createVNode(unref(NButton), {
																class: "command-copy",
																quaternary: "",
																circle: "",
																size: "small",
																"aria-label": "Copy command",
																onClick: ($event) => copyCommand(command)
															}, {
																icon: withCtx(() => [createVNode(unref(NIcon), null, {
																	default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
																	_: 2
																}, 1024)]),
																_: 2
															}, 1032, ["onClick"])]),
															default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
															_: 2
														}, 1024)]);
													}), 128))]),
													_: 2
												}, 1024)]),
												_: 2
											}, 1032, ["name", "tab"]);
										}), 64))]),
										_: 1
									}), createVNode(unref(NAlert), {
										class: "mt-4",
										title: "Start command",
										type: "info",
										bordered: ""
									}, {
										default: withCtx(() => [createTextVNode(" Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer. ")]),
										_: 1
									})]),
									_: 1
								}),
								createVNode(unref(NCard), { bordered: "" }, {
									default: withCtx(() => [createVNode("div", { class: "feature-grid" }, [createVNode("div", null, [createVNode(unref(NSpace), {
										align: "center",
										size: 10
									}, {
										default: withCtx(() => [createVNode(unref(NIcon), {
											size: 24,
											color: "#18a058"
										}, {
											default: withCtx(() => [createVNode(unref(Zap))]),
											_: 1
										}), createVNode(unref(NH2), { class: "!m-0 !text-2xl" }, {
											default: withCtx(() => [createTextVNode("Included setup")]),
											_: 1
										})]),
										_: 1
									}), createVNode(unref(NList), { class: "mt-4" }, {
										default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(stackItems, (item) => {
											return createVNode(unref(NListItem), { key: item }, {
												default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
													default: withCtx(() => [createVNode(unref(NIcon), { color: "#18a058" }, {
														default: withCtx(() => [createVNode(unref(CheckCircle))]),
														_: 1
													}), createVNode(unref(NText), null, {
														default: withCtx(() => [createTextVNode(toDisplayString(item), 1)]),
														_: 2
													}, 1024)]),
													_: 2
												}, 1024)]),
												_: 2
											}, 1024);
										}), 64))]),
										_: 1
									})]), createVNode("div", { class: "rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]" }, [createVNode(unref(NText), { depth: 3 }, {
										default: withCtx(() => [createTextVNode("Production start")]),
										_: 1
									}), createVNode("div", { class: "mt-4 flex flex-col gap-3" }, [(openBlock(), createBlock(Fragment, null, renderList(productionCommands, (command) => {
										return createVNode("div", {
											key: command,
											class: "command-snippet"
										}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
											trigger: withCtx(() => [createVNode(unref(NButton), {
												class: "command-copy",
												quaternary: "",
												circle: "",
												size: "small",
												"aria-label": "Copy command",
												onClick: ($event) => copyCommand(command)
											}, {
												icon: withCtx(() => [createVNode(unref(NIcon), null, {
													default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
													_: 2
												}, 1024)]),
												_: 2
											}, 1032, ["onClick"])]),
											default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
											_: 2
										}, 1024)]);
									}), 64))])])])]),
									_: 1
								}),
								createVNode("div", { class: "app-grid" }, [
									createVNode(unref(NAlert), {
										title: "Theme cache",
										type: "success",
										bordered: ""
									}, {
										default: withCtx(() => [createTextVNode(" Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync. ")]),
										_: 1
									}),
									createVNode(unref(NCard), {
										title: "Build confidence",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode(unref(NSpace), {
											vertical: "",
											size: 14
										}, {
											default: withCtx(() => [createVNode(unref(NProgress), {
												type: "line",
												percentage: 100,
												"indicator-placement": "inside",
												processing: ""
											}), createVNode(unref(NText), { depth: 2 }, {
												default: withCtx(() => [createTextVNode(" Client build, SSR build, and feature tests are wired for local development and GitHub Actions. ")]),
												_: 1
											})]),
											_: 1
										})]),
										_: 1
									}),
									createVNode(unref(NCard), {
										title: "Generator commands",
										bordered: ""
									}, {
										default: withCtx(() => [createVNode(unref(NSpace), {
											vertical: "",
											size: 10
										}, {
											default: withCtx(() => [createVNode(unref(NText), { depth: 2 }, {
												default: withCtx(() => [createTextVNode("Generators create Vue .vue files by default.")]),
												_: 1
											}), (openBlock(), createBlock(Fragment, null, renderList(generatorCommands, (command) => {
												return createVNode("div", {
													key: command,
													class: "command-snippet"
												}, [createVNode("code", { class: "code-snippet" }, toDisplayString(command), 1), createVNode(unref(NTooltip), { trigger: "hover" }, {
													trigger: withCtx(() => [createVNode(unref(NButton), {
														class: "command-copy",
														quaternary: "",
														circle: "",
														size: "small",
														"aria-label": "Copy command",
														onClick: ($event) => copyCommand(command)
													}, {
														icon: withCtx(() => [createVNode(unref(NIcon), null, {
															default: withCtx(() => [copiedCommand.value === command ? (openBlock(), createBlock(unref(Check), { key: 0 })) : (openBlock(), createBlock(unref(Copy), { key: 1 }))]),
															_: 2
														}, 1024)]),
														_: 2
													}, 1032, ["onClick"])]),
													default: withCtx(() => [createTextVNode(" " + toDisplayString(copiedCommand.value === command ? "Copied" : "Copy command"), 1)]),
													_: 2
												}, 1024)]);
											}), 64))]),
											_: 1
										})]),
										_: 1
									})
								]),
								createVNode(unref(NCard), { bordered: "" }, {
									default: withCtx(() => [createVNode(unref(NTabs), {
										type: "line",
										animated: ""
									}, {
										default: withCtx(() => [
											createVNode(unref(NTabPane), {
												name: "stack",
												tab: "Stack"
											}, {
												default: withCtx(() => [createVNode(unref(NDataTable), {
													columns: dependencyColumns,
													data: dependencyRows,
													pagination: false,
													bordered: false
												})]),
												_: 1
											}),
											createVNode(unref(NTabPane), {
												name: "metadata",
												tab: "Metadata"
											}, {
												default: withCtx(() => [createVNode(unref(NDescriptions), {
													bordered: "",
													column: 2,
													"label-placement": "top"
												}, {
													default: withCtx(() => [
														createVNode(unref(NDescriptionsItem), { label: "Frontend" }, {
															default: withCtx(() => [createTextVNode("Vue 3 SFC")]),
															_: 1
														}),
														createVNode(unref(NDescriptionsItem), { label: "Bridge" }, {
															default: withCtx(() => [createTextVNode("Inertia Laravel")]),
															_: 1
														}),
														createVNode(unref(NDescriptionsItem), { label: "Theme" }, {
															default: withCtx(() => [createTextVNode("Cookie-backed SSR")]),
															_: 1
														}),
														createVNode(unref(NDescriptionsItem), { label: "Notifications" }, {
															default: withCtx(() => [createTextVNode("vue-sonner")]),
															_: 1
														})
													]),
													_: 1
												})]),
												_: 1
											}),
											createVNode(unref(NTabPane), {
												name: "timeline",
												tab: "Workflow"
											}, {
												default: withCtx(() => [createVNode(unref(NTimeline), null, {
													default: withCtx(() => [
														createVNode(unref(NTimelineItem), {
															type: "success",
															title: "Scaffold",
															content: "Create Laravel, install Inertia, and configure Vue single-file components."
														}),
														createVNode(unref(NTimelineItem), {
															type: "info",
															title: "Theme",
															content: "Resolve theme on the server and hydrate without flicker."
														}),
														createVNode(unref(NTimelineItem), {
															type: "warning",
															title: "Ship",
															content: "Build client assets, build SSR, then start the SSR renderer."
														})
													]),
													_: 1
												})]),
												_: 1
											})
										]),
										_: 1
									})]),
									_: 1
								}),
								createVNode(unref(NCard), {
									title: "Daily Naive UI Controls",
									bordered: ""
								}, {
									default: withCtx(() => [createVNode("div", { class: "controls-grid" }, [createVNode(unref(NForm), { "label-placement": "top" }, {
										default: withCtx(() => [
											createVNode(unref(NFormItem), { label: "Project title" }, {
												default: withCtx(() => [createVNode(unref(NInput), {
													value: formValue.value.title,
													"onUpdate:value": ($event) => formValue.value.title = $event,
													placeholder: "Enter a title",
													clearable: ""
												}, null, 8, ["value", "onUpdate:value"])]),
												_: 1
											}),
											createVNode(unref(NFormItem), { label: "Status" }, {
												default: withCtx(() => [createVNode(unref(NSelect), {
													value: formValue.value.status,
													"onUpdate:value": ($event) => formValue.value.status = $event,
													options: statusOptions
												}, null, 8, ["value", "onUpdate:value"])]),
												_: 1
											}),
											createVNode(unref(NFormItem), { label: "Due date" }, {
												default: withCtx(() => [createVNode(unref(NDatePicker), {
													value: formValue.value.date,
													"onUpdate:value": ($event) => formValue.value.date = $event,
													type: "date",
													clearable: ""
												}, null, 8, ["value", "onUpdate:value"])]),
												_: 1
											}),
											createVNode(unref(NFormItem), { label: "Visibility" }, {
												default: withCtx(() => [createVNode(unref(NRadioGroup), {
													value: formValue.value.visibility,
													"onUpdate:value": ($event) => formValue.value.visibility = $event
												}, {
													default: withCtx(() => [
														createVNode(unref(NRadioButton), { value: "private" }, {
															default: withCtx(() => [createTextVNode("Private")]),
															_: 1
														}),
														createVNode(unref(NRadioButton), { value: "team" }, {
															default: withCtx(() => [createTextVNode("Team")]),
															_: 1
														}),
														createVNode(unref(NRadioButton), { value: "public" }, {
															default: withCtx(() => [createTextVNode("Public")]),
															_: 1
														})
													]),
													_: 1
												}, 8, ["value", "onUpdate:value"])]),
												_: 1
											}),
											createVNode(unref(NFormItem), { label: "Enabled" }, {
												default: withCtx(() => [createVNode(unref(NCheckbox), {
													checked: formValue.value.enabled,
													"onUpdate:checked": ($event) => formValue.value.enabled = $event
												}, {
													default: withCtx(() => [createTextVNode(" Include this item in the active workspace ")]),
													_: 1
												}, 8, ["checked", "onUpdate:checked"])]),
												_: 1
											})
										]),
										_: 1
									}), createVNode(unref(NSpace), {
										vertical: "",
										size: 16
									}, {
										default: withCtx(() => [
											createVNode(unref(NForm), { "label-placement": "top" }, {
												default: withCtx(() => [createVNode(unref(NFormItem), { label: "Priority" }, {
													default: withCtx(() => [createVNode(unref(NSlider), {
														value: formValue.value.priority,
														"onUpdate:value": ($event) => formValue.value.priority = $event,
														min: 1,
														max: 10
													}, null, 8, ["value", "onUpdate:value"])]),
													_: 1
												}), createVNode(unref(NFormItem), { label: "Estimate" }, {
													default: withCtx(() => [createVNode(unref(NInputNumber), {
														value: formValue.value.estimate,
														"onUpdate:value": ($event) => formValue.value.estimate = $event,
														min: 1,
														max: 30
													}, null, 8, ["value", "onUpdate:value"])]),
													_: 1
												})]),
												_: 1
											}),
											createVNode(unref(NSpace), { wrap: "" }, {
												default: withCtx(() => [
													createVNode(unref(NDropdown), {
														options: menuOptions,
														onSelect: selectMenuItem
													}, {
														default: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
															icon: withCtx(() => [createVNode(unref(NIcon), null, {
																default: withCtx(() => [createVNode(unref(ChevronDown))]),
																_: 1
															})]),
															default: withCtx(() => [createTextVNode(" Actions ")]),
															_: 1
														})]),
														_: 1
													}),
													createVNode(unref(NPopover), { trigger: "click" }, {
														trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
															default: withCtx(() => [createTextVNode("Popover")]),
															_: 1
														})]),
														default: withCtx(() => [createVNode(unref(NText), null, {
															default: withCtx(() => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")]),
															_: 1
														})]),
														_: 1
													}),
													createVNode(unref(NTooltip), { trigger: "hover" }, {
														trigger: withCtx(() => [createVNode(unref(NButton), { secondary: "" }, {
															default: withCtx(() => [createTextVNode("Tooltip")]),
															_: 1
														})]),
														default: withCtx(() => [createTextVNode(" Naive UI tooltip provider is working. ")]),
														_: 1
													})
												]),
												_: 1
											}),
											createVNode(unref(NSpace), { wrap: "" }, {
												default: withCtx(() => [
													createVNode(unref(NButton), {
														type: "primary",
														onClick: ($event) => modalOpen.value = true
													}, {
														default: withCtx(() => [createTextVNode("Open Modal")]),
														_: 1
													}, 8, ["onClick"]),
													createVNode(unref(NButton), {
														secondary: "",
														onClick: ($event) => drawerOpen.value = true
													}, {
														icon: withCtx(() => [createVNode(unref(NIcon), null, {
															default: withCtx(() => [createVNode(unref(PanelRightOpen))]),
															_: 1
														})]),
														default: withCtx(() => [createTextVNode(" Open Drawer ")]),
														_: 1
													}, 8, ["onClick"]),
													createVNode(unref(NButton), {
														tertiary: "",
														type: "success",
														onClick: openDialog
													}, {
														default: withCtx(() => [createTextVNode("Dialog")]),
														_: 1
													}),
													createVNode(unref(NButton), {
														tertiary: "",
														type: "info",
														onClick: ($event) => unref(message).info("Message provider ready")
													}, {
														default: withCtx(() => [createTextVNode(" Message ")]),
														_: 1
													}, 8, ["onClick"])
												]),
												_: 1
											}),
											createVNode(unref(NDescriptions), {
												bordered: "",
												column: 1,
												"label-placement": "left"
											}, {
												default: withCtx(() => [
													createVNode(unref(NDescriptionsItem), { label: "Title" }, {
														default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.title), 1)]),
														_: 1
													}),
													createVNode(unref(NDescriptionsItem), { label: "Status" }, {
														default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.status), 1)]),
														_: 1
													}),
													createVNode(unref(NDescriptionsItem), { label: "Priority" }, {
														default: withCtx(() => [createTextVNode(toDisplayString(formValue.value.priority), 1)]),
														_: 1
													})
												]),
												_: 1
											})
										]),
										_: 1
									})])]),
									_: 1
								}),
								createVNode(unref(NCard), { bordered: "" }, {
									default: withCtx(() => [createVNode(unref(NSpace), {
										align: "center",
										justify: "space-between"
									}, {
										default: withCtx(() => [createVNode(unref(NSpace), { align: "center" }, {
											default: withCtx(() => [createVNode(unref(NBadge), {
												value: "SSR",
												type: "success"
											}), createVNode(unref(NText), { strong: "" }, {
												default: withCtx(() => [createTextVNode("Ready for application work")]),
												_: 1
											})]),
											_: 1
										}), createVNode(unref(NButton), {
											tertiary: "",
											type: "primary",
											onClick: notify
										}, {
											default: withCtx(() => [createTextVNode("Confirm toast wiring")]),
											_: 1
										})]),
										_: 1
									})]),
									_: 1
								})
							]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(NModal), {
				show: modalOpen.value,
				"onUpdate:show": ($event) => modalOpen.value = $event,
				preset: "card",
				title: "Reusable modal",
				class: "starter-modal",
				bordered: false
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(NSpace), {
						vertical: "",
						size: 12
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(NText), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`This modal is rendered by Naive UI and inherits the same SSR-safe theme.`);
										else return [createTextVNode("This modal is rendered by Naive UI and inherits the same SSR-safe theme.")];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(NInput), {
									value: formValue.value.title,
									"onUpdate:value": ($event) => formValue.value.title = $event,
									placeholder: "Update title from modal"
								}, null, _parent, _scopeId));
								_push(ssrRenderComponent(unref(NSpace), { justify: "end" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(NButton), { onClick: ($event) => modalOpen.value = false }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`Close`);
												else return [createTextVNode("Close")];
											}),
											_: 1
										}, _parent, _scopeId));
										else return [createVNode(unref(NButton), { onClick: ($event) => modalOpen.value = false }, {
											default: withCtx(() => [createTextVNode("Close")]),
											_: 1
										}, 8, ["onClick"])];
									}),
									_: 1
								}, _parent, _scopeId));
							} else return [
								createVNode(unref(NText), null, {
									default: withCtx(() => [createTextVNode("This modal is rendered by Naive UI and inherits the same SSR-safe theme.")]),
									_: 1
								}),
								createVNode(unref(NInput), {
									value: formValue.value.title,
									"onUpdate:value": ($event) => formValue.value.title = $event,
									placeholder: "Update title from modal"
								}, null, 8, ["value", "onUpdate:value"]),
								createVNode(unref(NSpace), { justify: "end" }, {
									default: withCtx(() => [createVNode(unref(NButton), { onClick: ($event) => modalOpen.value = false }, {
										default: withCtx(() => [createTextVNode("Close")]),
										_: 1
									}, 8, ["onClick"])]),
									_: 1
								})
							];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(NSpace), {
						vertical: "",
						size: 12
					}, {
						default: withCtx(() => [
							createVNode(unref(NText), null, {
								default: withCtx(() => [createTextVNode("This modal is rendered by Naive UI and inherits the same SSR-safe theme.")]),
								_: 1
							}),
							createVNode(unref(NInput), {
								value: formValue.value.title,
								"onUpdate:value": ($event) => formValue.value.title = $event,
								placeholder: "Update title from modal"
							}, null, 8, ["value", "onUpdate:value"]),
							createVNode(unref(NSpace), { justify: "end" }, {
								default: withCtx(() => [createVNode(unref(NButton), { onClick: ($event) => modalOpen.value = false }, {
									default: withCtx(() => [createTextVNode("Close")]),
									_: 1
								}, 8, ["onClick"])]),
								_: 1
							})
						]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(NDrawer), {
				show: drawerOpen.value,
				"onUpdate:show": ($event) => drawerOpen.value = $event,
				width: 360,
				placement: "right"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(NDrawerContent), {
						title: "Workspace drawer",
						closable: ""
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(NSpace), {
								vertical: "",
								size: 14
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(NAlert), {
											type: "info",
											title: "Drawer ready"
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(` Use drawers for settings, filters, previews, and secondary workflows. `);
												else return [createTextVNode(" Use drawers for settings, filters, previews, and secondary workflows. ")];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NSelect), {
											value: formValue.value.status,
											"onUpdate:value": ($event) => formValue.value.status = $event,
											options: statusOptions
										}, null, _parent, _scopeId));
										_push(ssrRenderComponent(unref(NButton), {
											type: "primary",
											block: "",
											onClick: ($event) => drawerOpen.value = false
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`Save`);
												else return [createTextVNode("Save")];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [
										createVNode(unref(NAlert), {
											type: "info",
											title: "Drawer ready"
										}, {
											default: withCtx(() => [createTextVNode(" Use drawers for settings, filters, previews, and secondary workflows. ")]),
											_: 1
										}),
										createVNode(unref(NSelect), {
											value: formValue.value.status,
											"onUpdate:value": ($event) => formValue.value.status = $event,
											options: statusOptions
										}, null, 8, ["value", "onUpdate:value"]),
										createVNode(unref(NButton), {
											type: "primary",
											block: "",
											onClick: ($event) => drawerOpen.value = false
										}, {
											default: withCtx(() => [createTextVNode("Save")]),
											_: 1
										}, 8, ["onClick"])
									];
								}),
								_: 1
							}, _parent, _scopeId));
							else return [createVNode(unref(NSpace), {
								vertical: "",
								size: 14
							}, {
								default: withCtx(() => [
									createVNode(unref(NAlert), {
										type: "info",
										title: "Drawer ready"
									}, {
										default: withCtx(() => [createTextVNode(" Use drawers for settings, filters, previews, and secondary workflows. ")]),
										_: 1
									}),
									createVNode(unref(NSelect), {
										value: formValue.value.status,
										"onUpdate:value": ($event) => formValue.value.status = $event,
										options: statusOptions
									}, null, 8, ["value", "onUpdate:value"]),
									createVNode(unref(NButton), {
										type: "primary",
										block: "",
										onClick: ($event) => drawerOpen.value = false
									}, {
										default: withCtx(() => [createTextVNode("Save")]),
										_: 1
									}, 8, ["onClick"])
								]),
								_: 1
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(NDrawerContent), {
						title: "Workspace drawer",
						closable: ""
					}, {
						default: withCtx(() => [createVNode(unref(NSpace), {
							vertical: "",
							size: 14
						}, {
							default: withCtx(() => [
								createVNode(unref(NAlert), {
									type: "info",
									title: "Drawer ready"
								}, {
									default: withCtx(() => [createTextVNode(" Use drawers for settings, filters, previews, and secondary workflows. ")]),
									_: 1
								}),
								createVNode(unref(NSelect), {
									value: formValue.value.status,
									"onUpdate:value": ($event) => formValue.value.status = $event,
									options: statusOptions
								}, null, 8, ["value", "onUpdate:value"]),
								createVNode(unref(NButton), {
									type: "primary",
									block: "",
									onClick: ($event) => drawerOpen.value = false
								}, {
									default: withCtx(() => [createTextVNode("Save")]),
									_: 1
								}, 8, ["onClick"])
							]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region resources/js/ssr.js
var appName = "Laravel";
var renderPage = async (page) => {
	let cssRender;
	const response = await createInertiaApp({
		page,
		title: (title) => title ? `${title} - ${appName}` : appName,
		resolve: (name) => {
			return (/* @__PURE__ */ Object.assign({ "./pages/Home.vue": Home_exports }))[`./pages/${name}.vue`];
		},
		render: (app) => renderToString(app),
		setup({ App, props, plugin }) {
			const app = createSSRApp({ render: () => h(App, props) });
			app.use(plugin);
			cssRender = setup(app);
			return app;
		}
	});
	const css = cssRender?.collect();
	if (css) response.head.push(css);
	return response;
};
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map