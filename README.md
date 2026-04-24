<p align="center">
  <img src="assets/logo/logo.png" alt="Laravel Auth Logo" width="180">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-10%20to%2013-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
  <img src="https://img.shields.io/badge/PHP-8.2%2B-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP">
  <img src="https://img.shields.io/badge/UI-Naive%20UI-18A058?style=for-the-badge" alt="Naive UI">
  <img src="https://img.shields.io/badge/SSR-Inertia%20Vue-2563EB?style=for-the-badge" alt="Inertia SSR">
  <img src="https://img.shields.io/badge/Built%20With-Laravel%20Auth-0F172A?style=for-the-badge" alt="Laravel Auth">
</p>

# Laravel Vue NativeUI Starter

A full Laravel starter project using Vue 3, Inertia, JSX, Naive UI, vue-sonner, Tailwind CSS, and proper server-side rendering support.

Repository: `ghostcompiler/laravel-vue-nativeui`

Current release: `v1.0.0`

The app is intentionally set up without TypeScript or TSX. Pages, layouts, reusable components, and utilities are generated as JavaScript and JSX files.

## Naive UI Included

This starter is built around **Naive UI** as the default Vue component library. Naive UI is already installed, configured, SSR-ready, themed, and demonstrated in the homepage component lab.

Naive UI packages included in this project:

```bash
naive-ui
vfonts
@css-render/vue3-ssr
```

Primary Naive UI files:

```text
resources/js/layouts/AppLayout.jsx      Naive UI providers and app shell
resources/js/theme/naive.js             Light/dark Naive UI theme tokens
resources/js/pages/Home.jsx             Naive UI component showcase
resources/js/ssr.jsx                    Naive UI SSR style collection
```

Naive UI providers configured in `AppLayout.jsx`:

```jsx
<NConfigProvider theme={resolveNaiveTheme(themeName.value)} themeOverrides={themeOverrides[themeName.value]}>
    <NLoadingBarProvider>
        <NDialogProvider>
            <NNotificationProvider>
                <NMessageProvider>
                    {slots.default?.()}
                </NMessageProvider>
            </NNotificationProvider>
        </NDialogProvider>
    </NLoadingBarProvider>
    <NGlobalStyle />
</NConfigProvider>
```

The homepage includes working examples of daily-use Naive UI components:

| Category | Components |
| --- | --- |
| Layout | `NLayout`, `NLayoutHeader`, `NLayoutContent`, `NPageHeader`, `NSpace` |
| Display | `NCard`, `NAlert`, `NBadge`, `NTag`, `NStatistic`, `NDescriptions`, `NTimeline` |
| Forms | `NForm`, `NFormItem`, `NInput`, `NSelect`, `NDatePicker`, `NInputNumber`, `NSlider` |
| Choices | `NCheckbox`, `NRadioGroup`, `NRadioButton`, `NSwitch` |
| Overlays | `NModal`, `NDrawer`, `NPopover`, `NTooltip`, `NDropdown` |
| Data | `NDataTable`, `NTabs`, `NTabPane`, `NList`, `NListItem` |
| Feedback APIs | `useDialog`, `useMessage`, plus `vue-sonner` toasts |

Naive UI SSR is handled by `@css-render/vue3-ssr`. The SSR entry collects Naive UI generated CSS and pushes it into the Inertia SSR response head, so Naive UI components render styled on the first request instead of flashing during hydration.

```jsx
import { setup as setupCssRender } from '@css-render/vue3-ssr';

cssRender = setupCssRender(app);
const css = cssRender?.collect();
response.head.push(css);
```

To create a new Naive UI component:

```bash
php artisan make:component Forms/StatusSelect
```

Example component:

```jsx
import { NFormItem, NSelect } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StatusSelect',
    setup() {
        return () => (
            <NFormItem label="Status">
                <NSelect options={[{ label: 'Active', value: 'active' }]} />
            </NFormItem>
        );
    },
});
```

## Stack

- Laravel 13 application scaffolded from `laravel/laravel`
- Inertia Laravel v3 and `@inertiajs/vue3`
- Vue 3 with JSX through Vite
- Inertia SSR with `php artisan inertia:start-ssr`
- Naive UI with light and dark theme overrides
- Naive UI SSR CSS collection through `@css-render/vue3-ssr`
- vue-sonner for toast notifications
- Tailwind CSS v4 using `html[data-theme="dark"]`
- Cookie-backed theme cache to avoid refresh flicker
- GitHub Actions for quality, security, and tests

## Requirements

- PHP 8.3 or newer
- Composer 2
- Node.js 22 or newer
- npm
- SQLite, MySQL, PostgreSQL, or another Laravel-supported database

## Installation

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

## Development

Run Laravel and Vite in separate terminals:

```bash
php artisan serve
npm run dev
```

Or use the Composer helper:

```bash
composer run dev
```

## SSR

Build the browser assets and SSR bundle:

```bash
npm run build:ssr
```

Start the Inertia SSR renderer:

```bash
php artisan inertia:start-ssr
```

Stop the renderer:

```bash
php artisan inertia:stop-ssr
```

The SSR bundle is emitted to `bootstrap/ssr/ssr.js`.

## Theme System

The theme is stored in a plain `theme` cookie with either `light` or `dark`.

Laravel reads that cookie before rendering Blade, places the value on:

```html
<html data-theme="dark">
```

The same value is shared globally through Inertia as `theme`. Vue, Naive UI, Sonner, and Tailwind all consume the same initial value, so the UI does not flicker on refresh.

## Artisan Generators

This project includes starter-specific generators for frontend boilerplate.

Create an Inertia page:

```bash
php artisan make:page Dashboard
php artisan make:page Admin/Users/Index
```

Create a layout:

```bash
php artisan make:layout AdminLayout
php artisan make:layout Settings/Shell
```

Create a reusable component:

```bash
php artisan make:component EmptyState
php artisan make:component Forms/TextInput
```

Create a JavaScript utility module:

```bash
php artisan make:lib formatters/date
php artisan make:lib navigation
```

Overwrite an existing generated file:

```bash
php artisan make:page Dashboard --force
```

## Frontend Structure

```text
resources/js/app.jsx              Client-side Inertia entry
resources/js/ssr.jsx              Server-side Inertia entry
resources/js/layouts/             JSX layouts
resources/js/pages/               Inertia JSX pages
resources/js/components/          Reusable JSX components
resources/js/lib/                 Plain JavaScript helpers
resources/js/theme/naive.js       Naive UI theme tokens
resources/css/app.css             Tailwind and app shell styles
resources/views/app.blade.php     Inertia root view
```

## Naive UI

Naive UI is the primary component library for this starter. It is installed with:

```bash
npm install naive-ui vfonts @css-render/vue3-ssr
```

The app imports components directly from `naive-ui` inside JSX files:

```jsx
import { NButton, NCard, NInput, NSelect } from 'naive-ui';
```

Naive UI is mounted once in `resources/js/layouts/AppLayout.jsx` through these providers:

- `NConfigProvider`
- `NLoadingBarProvider`
- `NDialogProvider`
- `NNotificationProvider`
- `NMessageProvider`
- `NGlobalStyle`

The global provider receives the current server-shared theme:

```jsx
<NConfigProvider
    theme={resolveNaiveTheme(themeName.value)}
    themeOverrides={themeOverrides[themeName.value]}
    abstract
>
    {slots.default?.()}
</NConfigProvider>
```

Theme tokens live in `resources/js/theme/naive.js`. This file defines:

- `lightTheme`
- `darkTheme`
- shared common tokens
- per-component overrides for buttons, cards, tags, colors, borders, text, and surfaces

### Naive UI With SSR

Naive UI generates component CSS through `css-render`. The SSR entry collects those styles per request with `@css-render/vue3-ssr`:

```jsx
import { setup as setupCssRender } from '@css-render/vue3-ssr';

cssRender = setupCssRender(app);
const css = cssRender?.collect();
```

The collected CSS is pushed into the Inertia SSR head response, so Naive UI components render correctly on the first HTML response instead of waiting for client hydration.

### Included Naive UI Component Lab

The homepage includes a daily-use component lab for quick testing and reference:

- Layout: `NLayout`, `NLayoutHeader`, `NLayoutContent`, `NPageHeader`
- Display: `NCard`, `NAlert`, `NBadge`, `NTag`, `NStatistic`, `NDescriptions`, `NTimeline`
- Data: `NDataTable`, `NTabs`, `NTabPane`, `NList`, `NListItem`
- Forms: `NForm`, `NFormItem`, `NInput`, `NSelect`, `NDatePicker`, `NInputNumber`
- Choices: `NCheckbox`, `NRadioGroup`, `NRadioButton`, `NSwitch`
- Feedback: `NProgress`, `NModal`, `NDrawer`, `NPopover`, `NTooltip`, `NDropdown`
- Providers: `useDialog`, `useMessage`

This gives you working examples for common dashboard, admin, SaaS, and internal-tool screens.

### Adding New Naive UI Components

Create a component with the project generator:

```bash
php artisan make:component Forms/StatusSelect
```

Then import the Naive UI pieces you need:

```jsx
import { NFormItem, NSelect } from 'naive-ui';

export default defineComponent({
    setup() {
        return () => (
            <NFormItem label="Status">
                <NSelect options={[{ label: 'Active', value: 'active' }]} />
            </NFormItem>
        );
    },
});
```

## Toasts

vue-sonner is mounted in the app layout:

```jsx
<Toaster richColors closeButton expand position="top-right" theme={themeName.value} />
```

Use it anywhere in Vue:

```js
import { toast } from 'vue-sonner';

toast.success('Saved');
```

## Quality

Run the Laravel test suite:

```bash
php artisan test
```

Run the production build:

```bash
npm run build:ssr
```

Run PHP formatting checks:

```bash
./vendor/bin/pint --test
```

## GitHub Actions

The project includes:

- `.github/workflows/quality.yml`
- `.github/workflows/security.yml`
- `.github/workflows/tests.yml`

These workflows install PHP and Node dependencies, validate Laravel code style, run audits, build frontend assets, build SSR, and run the test suite.

## Development And Build Environment

This package was developed using **ServBay** as the local development environment.

### Development Tool Used

- Local development tool: `ServBay`
- Website: [www.servbay.com](https://www.servbay.com/)

### ServBay your developement friend

<p>
  <img src="assets/servbay/servbay-icon-blue-512.png" alt="ServBay Icon" width="96">
</p>

### Testing And Build Machine

- Tested on: `Mac M4`
- Built on: `Mac M4`
