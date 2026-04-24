# Laravel Vue NativeUI Developer Guide

This guide documents the conventions used by the Laravel Vue NativeUI starter.

## Local Setup

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

Run the app:

```bash
php artisan serve
npm run dev
```

Build production assets and SSR:

```bash
npm run build:ssr
php artisan inertia:start-ssr
```

## Frontend Conventions

- Use Vue single-file components for pages, layouts, and reusable components.
- Put Inertia pages in `resources/js/pages`.
- Put shared layouts in `resources/js/layouts`.
- Put reusable UI components in `resources/js/components`.
- Put plain JavaScript helpers in `resources/js/lib`.
- Keep app-wide theme tokens in `resources/js/theme/naive.js`.

## Generators

Use the project commands to create boilerplate:

```bash
php artisan make:page Reports/Index
php artisan make:layout ReportsLayout
php artisan make:component Reports/SummaryCard
php artisan make:lib reports/formatReportStatus
```

Pass `--force` to overwrite an existing file.

## Theme Contract

The theme contract is shared by server and client:

- Cookie name: `theme`
- Allowed values: `light`, `dark`
- Root HTML attribute: `data-theme`
- Inertia shared prop: `theme`

Do not reintroduce a client-only localStorage theme bootstrap. That causes refresh flicker because SSR renders before browser storage can be read.

## SSR Contract

The SSR entry is `resources/js/ssr.js`.

SSR must:

- Resolve pages from `resources/js/pages/**/*.vue`
- Use `createSSRApp`
- Install the Inertia plugin
- Collect Naive UI CSS through `@css-render/vue3-ssr`
- Return collected CSS in the Inertia SSR head payload

## Pull Request Checklist

- `php artisan test`
- `npm run build:ssr`
- `./vendor/bin/pint --test`
- Confirm theme refresh does not flicker in light or dark mode
- Confirm `php artisan inertia:start-ssr` starts after a fresh build

## CI

GitHub Actions are split by concern:

- `quality.yml` checks PHP style and production frontend builds.
- `security.yml` runs Composer and npm audits.
- `tests.yml` runs Laravel tests against SQLite.
