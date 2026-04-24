import { Fragment, computed, createSSRApp, createTextVNode, createVNode, defineComponent, h, inject, isVNode, provide, ref, useSSRContext } from "vue";
import { Head, createInertiaApp, usePage } from "@inertiajs/vue3";
import { Toaster, toast } from "vue-sonner";
import { NAlert, NBadge, NButton, NCard, NCheckbox, NConfigProvider, NDataTable, NDatePicker, NDescriptions, NDescriptionsItem, NDialogProvider, NDivider, NDrawer, NDrawerContent, NDropdown, NForm, NFormItem, NGlobalStyle, NH1, NH2, NIcon, NInput, NInputNumber, NLayout, NLayoutContent, NLayoutHeader, NList, NListItem, NLoadingBarProvider, NMessageProvider, NModal, NNotificationProvider, NPageHeader, NPopover, NProgress, NRadioButton, NRadioGroup, NSelect, NSlider, NSpace, NStatistic, NSwitch, NTabPane, NTabs, NTag, NText, NTimeline, NTimelineItem, NTooltip, darkTheme, useDialog, useMessage } from "naive-ui";
import { CheckCircle, ChevronDown, Moon, PanelRightOpen, Sparkles, Sun, Zap } from "lucide-vue-next";
import createServer from "@inertiajs/vue3/server";
import { setup } from "@css-render/vue3-ssr";
import { renderToString } from "vue/server-renderer";
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
//#region ../../../../../__vue-jsx-ssr-register-helper
var ssrRegisterHelper = function ssrRegisterHelper(comp, filename) {
	const setup = comp.setup;
	comp.setup = (props, ctx) => {
		const ssrContext = useSSRContext();
		(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
		if (setup) return setup(props, ctx);
	};
};
//#endregion
//#region resources/js/layouts/AppLayout.jsx
var ThemeSymbol = Symbol("Theme");
var __default__$1 = defineComponent({
	name: "AppLayout",
	setup(_, { slots }) {
		const themeName = ref(usePage().props.theme === "dark" ? "dark" : "light");
		const setTheme = (nextTheme) => {
			themeName.value = nextTheme;
			if (typeof document !== "undefined") document.documentElement.dataset.theme = nextTheme;
			if (typeof localStorage !== "undefined") localStorage.setItem("theme", nextTheme);
			if (typeof document !== "undefined") document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
		};
		const toggleTheme = () => setTheme(themeName.value === "dark" ? "light" : "dark");
		provide(ThemeSymbol, {
			themeName,
			isDark: computed(() => themeName.value === "dark"),
			setTheme,
			toggleTheme
		});
		return () => createVNode(NConfigProvider, {
			"theme": resolveNaiveTheme(themeName.value),
			"themeOverrides": themeOverrides[themeName.value],
			"abstract": true
		}, { default: () => [createVNode(NLoadingBarProvider, null, { default: () => [createVNode(NDialogProvider, null, { default: () => [createVNode(NNotificationProvider, null, { default: () => [createVNode(NMessageProvider, null, { default: () => [slots.default?.(), createVNode(Toaster, {
			"richColors": true,
			"closeButton": true,
			"expand": true,
			"position": "top-right",
			"theme": themeName.value
		}, null)] })] })] })] }), h(NGlobalStyle)] });
	}
});
ssrRegisterHelper(__default__$1, "resources/js/layouts/AppLayout.jsx");
//#endregion
//#region resources/js/pages/Home.jsx
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => __default__ });
function _isSlot(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var stackItems = [
	"Laravel 13 blank project",
	"Inertia Vue 3 in JSX",
	"SSR bundle and Artisan SSR scripts",
	"Naive UI provider, global styles, theme overrides",
	"vue-sonner toaster wired into the app layout"
];
var dependencyRows = [
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
var dependencyColumns = [
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
			return createVNode(NTag, { "type": "success" }, { default: () => [row.status] });
		}
	}
];
var statusOptions = [
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
var menuOptions = [
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
var installMethods = [
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
var CodeSnippet = defineComponent({
	name: "CodeSnippet",
	setup(_, { slots }) {
		return () => createVNode("code", { "class": "code-snippet" }, [slots.default?.()]);
	}
});
var __default__ = defineComponent({
	name: "Home",
	layout: __default__$1,
	props: {
		laravelVersion: String,
		phpVersion: String
	},
	setup(props) {
		const theme = inject(ThemeSymbol);
		const dialog = useDialog();
		const message = useMessage();
		const modalOpen = ref(false);
		const drawerOpen = ref(false);
		const formValue = ref({
			title: "Starter dashboard",
			status: "review",
			visibility: "team",
			date: Date.now(),
			enabled: true,
			priority: 6,
			estimate: 3
		});
		const notify = () => {
			toast.success("Sonner is ready", { description: "Toast notifications are mounted inside the Naive UI app shell." });
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
		return () => {
			let _slot2, _slot3;
			return createVNode(Fragment, null, [
				createVNode(Head, { "title": "Laravel Vue JSX Starter" }, null),
				createVNode(NLayout, {
					"class": "app-shell",
					"embedded": true
				}, { default: () => [createVNode(NLayoutContent, {
					"class": "app-container",
					"embedded": true
				}, { default: () => [createVNode(NSpace, {
					"vertical": true,
					"size": 22
				}, { default: () => [
					createVNode(NLayoutHeader, {
						"class": "app-hero rounded-lg p-5 sm:p-7",
						"bordered": false
					}, { default: () => [createVNode(NPageHeader, null, {
						title: () => createVNode(NH1, { "class": "!mb-2 !mt-4 !text-3xl sm:!text-4xl" }, { default: () => [createTextVNode("Laravel + Vue starter, rebuilt in JSX")] }),
						subtitle: () => createVNode(NText, { "depth": 2 }, { default: () => [createTextVNode("A clean Inertia foundation with server-side rendering, Naive UI theming, and Sonner notifications already connected.")] }),
						header: () => createVNode(NSpace, {
							"align": "center",
							"size": 10
						}, { default: () => [
							createVNode(NTag, {
								"type": "success",
								"round": false
							}, { default: () => [createTextVNode("SSR Ready")] }),
							createVNode(NTag, {
								"type": "info",
								"round": false
							}, { default: () => [createTextVNode("JSX")] }),
							createVNode(NTag, {
								"type": "warning",
								"round": false
							}, { default: () => [createTextVNode("Naive UI")] })
						] }),
						extra: () => createVNode(NSpace, {
							"align": "center",
							"size": 16
						}, { default: () => [
							createVNode(NIcon, { "size": 22 }, { default: () => [theme?.isDark.value ? createVNode(Moon, null, null) : createVNode(Sun, null, null)] }),
							createVNode(NSwitch, {
								"value": theme?.isDark.value,
								"onUpdateValue": theme?.toggleTheme
							}, null),
							createVNode(NButton, {
								"type": "primary",
								"size": "large",
								"onClick": notify
							}, { default: () => [createVNode(NIcon, { "class": "mr-2" }, { default: () => [createVNode(Sparkles, null, null)] }), createTextVNode("Try Toast")] })
						] })
					})] }),
					createVNode("div", { "class": "app-grid" }, [
						createVNode(NCard, {
							"title": "Framework",
							"bordered": true
						}, { default: () => [
							createVNode(NStatistic, {
								"label": "Laravel",
								"value": props.laravelVersion
							}, null),
							createVNode(NDivider, null, null),
							createVNode(NStatistic, {
								"label": "PHP",
								"value": props.phpVersion
							}, null)
						] }),
						createVNode(NCard, {
							"title": "Render Path",
							"bordered": true
						}, { default: () => [createVNode(NSpace, {
							"vertical": true,
							"size": 12
						}, { default: () => [
							createVNode(NText, null, { default: () => [createTextVNode("Client entry")] }),
							createVNode(CodeSnippet, null, { default: () => [createTextVNode("resources/js/app.jsx")] }),
							createVNode(NText, null, { default: () => [createTextVNode("SSR entry")] }),
							createVNode(CodeSnippet, null, { default: () => [createTextVNode("resources/js/ssr.jsx")] })
						] })] }),
						createVNode(NCard, {
							"title": "Theme System",
							"bordered": true
						}, { default: () => [createVNode(NSpace, {
							"vertical": true,
							"size": 12
						}, { default: () => [createVNode(NText, null, { default: () => [createTextVNode("Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one cookie-backed HTML tag.")] }), createVNode(NButton, {
							"secondary": true,
							"onClick": theme?.toggleTheme
						}, { default: () => [createTextVNode("Toggle Theme")] })] })] })
					]),
					createVNode(NCard, {
						"title": "Installation",
						"bordered": true
					}, { default: () => [createVNode(NTabs, {
						"type": "segment",
						"animated": true
					}, _isSlot(_slot2 = installMethods.map((method) => {
						let _slot;
						return createVNode(NTabPane, {
							"key": method.name,
							"name": method.name,
							"tab": method.tab
						}, { default: () => [createVNode(NSpace, {
							"vertical": true,
							"size": 10
						}, _isSlot(_slot = method.commands.map((command) => createVNode(CodeSnippet, { "key": command }, _isSlot(command) ? command : { default: () => [command] }))) ? _slot : { default: () => [_slot] })] });
					})) ? _slot2 : { default: () => [_slot2] }), createVNode(NAlert, {
						"class": "mt-4",
						"title": "Start command",
						"type": "info",
						"bordered": true
					}, { default: () => [createTextVNode("Run npm run start to build browser assets, build the SSR bundle, start Laravel, and start the Inertia SSR renderer.")] })] }),
					createVNode(NCard, { "bordered": true }, { default: () => [createVNode("div", { "class": "feature-grid" }, [createVNode("div", null, [createVNode(NSpace, {
						"align": "center",
						"size": 10
					}, { default: () => [createVNode(NIcon, {
						"size": 24,
						"color": "#18a058"
					}, { default: () => [createVNode(Zap, null, null)] }), createVNode(NH2, { "class": "!m-0 !text-2xl" }, { default: () => [createTextVNode("Included setup")] })] }), createVNode(NList, { "class": "mt-4" }, _isSlot(_slot3 = stackItems.map((item) => createVNode(NListItem, { "key": item }, { default: () => [createVNode(NSpace, { "align": "center" }, { default: () => [createVNode(NIcon, { "color": "#18a058" }, { default: () => [createVNode(CheckCircle, null, null)] }), createVNode(NText, null, _isSlot(item) ? item : { default: () => [item] })] })] }))) ? _slot3 : { default: () => [_slot3] })]), createVNode("div", { "class": "rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]" }, [createVNode(NText, { "depth": 3 }, { default: () => [createTextVNode("Production start")] }), createVNode("div", { "class": "mt-4 flex flex-col gap-3" }, [createVNode(CodeSnippet, null, { default: () => [createTextVNode("npm run start")] }), createVNode(CodeSnippet, null, { default: () => [createTextVNode("npm run build:ssr")] })])])])] }),
					createVNode("div", { "class": "app-grid" }, [
						createVNode(NAlert, {
							"title": "Theme cache",
							"type": "success",
							"bordered": true
						}, { default: () => [createTextVNode("Laravel reads the plain theme cookie before Blade renders, shares it through Inertia, and keeps Naive UI, Tailwind, and Sonner in sync.")] }),
						createVNode(NCard, {
							"title": "Build confidence",
							"bordered": true
						}, { default: () => [createVNode(NSpace, {
							"vertical": true,
							"size": 14
						}, { default: () => [createVNode(NProgress, {
							"type": "line",
							"percentage": 100,
							"indicatorPlacement": "inside",
							"processing": true
						}, null), createVNode(NText, { "depth": 2 }, { default: () => [createTextVNode("Client build, SSR build, and feature tests are wired for local development and GitHub Actions.")] })] })] }),
						createVNode(NCard, {
							"title": "Generator commands",
							"bordered": true
						}, { default: () => [createVNode(NSpace, {
							"vertical": true,
							"size": 10
						}, { default: () => [
							createVNode(CodeSnippet, null, { default: () => [createTextVNode("php artisan make:page Dashboard")] }),
							createVNode(CodeSnippet, null, { default: () => [createTextVNode("php artisan make:component EmptyState")] }),
							createVNode(CodeSnippet, null, { default: () => [createTextVNode("php artisan make:layout AdminLayout")] })
						] })] })
					]),
					createVNode(NCard, { "bordered": true }, { default: () => [createVNode(NTabs, {
						"type": "line",
						"animated": true
					}, { default: () => [
						createVNode(NTabPane, {
							"name": "stack",
							"tab": "Stack"
						}, { default: () => [createVNode(NDataTable, {
							"columns": dependencyColumns,
							"data": dependencyRows,
							"pagination": false,
							"bordered": false
						}, null)] }),
						createVNode(NTabPane, {
							"name": "metadata",
							"tab": "Metadata"
						}, { default: () => [createVNode(NDescriptions, {
							"bordered": true,
							"column": 2,
							"labelPlacement": "top"
						}, { default: () => [
							createVNode(NDescriptionsItem, { "label": "Frontend" }, { default: () => [createTextVNode("Vue 3 JSX")] }),
							createVNode(NDescriptionsItem, { "label": "Bridge" }, { default: () => [createTextVNode("Inertia Laravel")] }),
							createVNode(NDescriptionsItem, { "label": "Theme" }, { default: () => [createTextVNode("Cookie-backed SSR")] }),
							createVNode(NDescriptionsItem, { "label": "Notifications" }, { default: () => [createTextVNode("vue-sonner")] })
						] })] }),
						createVNode(NTabPane, {
							"name": "timeline",
							"tab": "Workflow"
						}, { default: () => [createVNode(NTimeline, null, { default: () => [
							createVNode(NTimelineItem, {
								"type": "success",
								"title": "Scaffold",
								"content": "Create Laravel, install Inertia, and configure Vue JSX."
							}, null),
							createVNode(NTimelineItem, {
								"type": "info",
								"title": "Theme",
								"content": "Resolve theme on the server and hydrate without flicker."
							}, null),
							createVNode(NTimelineItem, {
								"type": "warning",
								"title": "Ship",
								"content": "Build client assets, build SSR, then start the SSR renderer."
							}, null)
						] })] })
					] })] }),
					createVNode(NCard, {
						"title": "Daily Naive UI Controls",
						"bordered": true
					}, { default: () => [createVNode("div", { "class": "controls-grid" }, [createVNode(NForm, { "labelPlacement": "top" }, { default: () => [
						createVNode(NFormItem, { "label": "Project title" }, { default: () => [createVNode(NInput, {
							"value": formValue.value.title,
							"onUpdateValue": (value) => formValue.value.title = value,
							"placeholder": "Enter a title",
							"clearable": true
						}, null)] }),
						createVNode(NFormItem, { "label": "Status" }, { default: () => [createVNode(NSelect, {
							"value": formValue.value.status,
							"options": statusOptions,
							"onUpdateValue": (value) => formValue.value.status = value
						}, null)] }),
						createVNode(NFormItem, { "label": "Due date" }, { default: () => [createVNode(NDatePicker, {
							"value": formValue.value.date,
							"type": "date",
							"clearable": true,
							"onUpdateValue": (value) => formValue.value.date = value
						}, null)] }),
						createVNode(NFormItem, { "label": "Visibility" }, { default: () => [createVNode(NRadioGroup, {
							"value": formValue.value.visibility,
							"onUpdateValue": (value) => formValue.value.visibility = value
						}, { default: () => [
							createVNode(NRadioButton, { "value": "private" }, { default: () => [createTextVNode("Private")] }),
							createVNode(NRadioButton, { "value": "team" }, { default: () => [createTextVNode("Team")] }),
							createVNode(NRadioButton, { "value": "public" }, { default: () => [createTextVNode("Public")] })
						] })] }),
						createVNode(NFormItem, { "label": "Enabled" }, { default: () => [createVNode(NCheckbox, {
							"checked": formValue.value.enabled,
							"onUpdateChecked": (value) => formValue.value.enabled = value
						}, { default: () => [createTextVNode("Include this item in the active workspace")] })] })
					] }), createVNode(NSpace, {
						"vertical": true,
						"size": 16
					}, { default: () => [
						createVNode(NForm, { "labelPlacement": "top" }, { default: () => [createVNode(NFormItem, { "label": "Priority" }, { default: () => [createVNode(NSlider, {
							"value": formValue.value.priority,
							"min": 1,
							"max": 10,
							"onUpdateValue": (value) => formValue.value.priority = value
						}, null)] }), createVNode(NFormItem, { "label": "Estimate" }, { default: () => [createVNode(NInputNumber, {
							"value": formValue.value.estimate,
							"min": 1,
							"max": 30,
							"onUpdateValue": (value) => formValue.value.estimate = value
						}, null)] })] }),
						createVNode(NSpace, { "wrap": true }, { default: () => [
							createVNode(NDropdown, {
								"options": menuOptions,
								"onSelect": selectMenuItem
							}, { default: () => [createVNode(NButton, { "secondary": true }, { default: () => [createTextVNode("Actions"), createVNode(NIcon, { "class": "ml-2" }, { default: () => [createVNode(ChevronDown, null, null)] })] })] }),
							createVNode(NPopover, { "trigger": "click" }, {
								trigger: () => createVNode(NButton, { "secondary": true }, { default: () => [createTextVNode("Popover")] }),
								default: () => createVNode(NText, null, { default: () => [createTextVNode("Popovers are useful for compact previews, hints, and contextual controls.")] })
							}),
							createVNode(NTooltip, { "trigger": "hover" }, {
								trigger: () => createVNode(NButton, { "secondary": true }, { default: () => [createTextVNode("Tooltip")] }),
								default: () => "Naive UI tooltip provider is working."
							})
						] }),
						createVNode(NSpace, { "wrap": true }, { default: () => [
							createVNode(NButton, {
								"type": "primary",
								"onClick": () => modalOpen.value = true
							}, { default: () => [createTextVNode("Open Modal")] }),
							createVNode(NButton, {
								"secondary": true,
								"onClick": () => drawerOpen.value = true
							}, { default: () => [createVNode(NIcon, { "class": "mr-2" }, { default: () => [createVNode(PanelRightOpen, null, null)] }), createTextVNode("Open Drawer")] }),
							createVNode(NButton, {
								"tertiary": true,
								"type": "success",
								"onClick": openDialog
							}, { default: () => [createTextVNode("Dialog")] }),
							createVNode(NButton, {
								"tertiary": true,
								"type": "info",
								"onClick": () => message.info("Message provider ready")
							}, { default: () => [createTextVNode("Message")] })
						] }),
						createVNode(NDescriptions, {
							"bordered": true,
							"column": 1,
							"labelPlacement": "left"
						}, { default: () => [
							createVNode(NDescriptionsItem, { "label": "Title" }, { default: () => [formValue.value.title] }),
							createVNode(NDescriptionsItem, { "label": "Status" }, { default: () => [formValue.value.status] }),
							createVNode(NDescriptionsItem, { "label": "Priority" }, { default: () => [formValue.value.priority] })
						] })
					] })])] }),
					createVNode(NCard, { "bordered": true }, { default: () => [createVNode(NSpace, {
						"align": "center",
						"justify": "space-between"
					}, { default: () => [createVNode(NSpace, { "align": "center" }, { default: () => [createVNode(NBadge, {
						"value": "SSR",
						"type": "success"
					}, null), createVNode(NText, { "strong": true }, { default: () => [createTextVNode("Ready for application work")] })] }), createVNode(NButton, {
						"tertiary": true,
						"type": "primary",
						"onClick": notify
					}, { default: () => [createTextVNode("Confirm toast wiring")] })] })] })
				] })] })] }),
				createVNode(NModal, {
					"show": modalOpen.value,
					"onUpdateShow": (value) => modalOpen.value = value,
					"preset": "card",
					"title": "Reusable modal",
					"class": "starter-modal",
					"bordered": false
				}, { default: () => [createVNode(NSpace, {
					"vertical": true,
					"size": 12
				}, { default: () => [
					createVNode(NText, null, { default: () => [createTextVNode("This modal is rendered by Naive UI and inherits the same SSR-safe theme.")] }),
					createVNode(NInput, {
						"value": formValue.value.title,
						"onUpdateValue": (value) => formValue.value.title = value,
						"placeholder": "Update title from modal"
					}, null),
					createVNode(NSpace, { "justify": "end" }, { default: () => [createVNode(NButton, { "onClick": () => modalOpen.value = false }, { default: () => [createTextVNode("Close")] })] })
				] })] }),
				createVNode(NDrawer, {
					"show": drawerOpen.value,
					"onUpdateShow": (value) => drawerOpen.value = value,
					"width": 360,
					"placement": "right"
				}, { default: () => [createVNode(NDrawerContent, {
					"title": "Workspace drawer",
					"closable": true
				}, { default: () => [createVNode(NSpace, {
					"vertical": true,
					"size": 14
				}, { default: () => [
					createVNode(NAlert, {
						"type": "info",
						"title": "Drawer ready"
					}, { default: () => [createTextVNode("Use drawers for settings, filters, previews, and secondary workflows.")] }),
					createVNode(NSelect, {
						"value": formValue.value.status,
						"options": statusOptions,
						"onUpdateValue": (value) => formValue.value.status = value
					}, null),
					createVNode(NButton, {
						"type": "primary",
						"block": true,
						"onClick": () => drawerOpen.value = false
					}, { default: () => [createTextVNode("Save")] })
				] })] })] })
			]);
		};
	}
});
ssrRegisterHelper(__default__, "resources/js/pages/Home.jsx");
//#endregion
//#region resources/js/ssr.jsx
var appName = "Laravel";
var renderPage = async (page) => {
	let cssRender;
	const response = await createInertiaApp({
		page,
		title: (title) => title ? `${title} - ${appName}` : appName,
		resolve: (name) => {
			return (/* @__PURE__ */ Object.assign({ "./pages/Home.jsx": Home_exports }))[`./pages/${name}.jsx`];
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