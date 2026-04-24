<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

function starterComponentName(string $name): string
{
    return Str::studly(class_basename(str_replace('\\', '/', $name)));
}

function starterResourcePath(string $basePath, string $name, string $extension = 'vue'): string
{
    $normalized = collect(explode('/', str_replace('\\', '/', $name)))
        ->filter()
        ->map(fn (string $part) => Str::studly($part))
        ->implode('/');

    return resource_path(trim($basePath, '/').'/'.$normalized.'.'.$extension);
}

function starterWriteFile(object $command, string $path, string $contents): int
{
    if (File::exists($path) && ! $command->option('force')) {
        $command->warn("File already exists: {$path}");
        $command->line('Run the command again with --force to overwrite it.');

        return 1;
    }

    File::ensureDirectoryExists(dirname($path));
    File::put($path, $contents);

    $command->info("Created: {$path}");

    return 0;
}

function starterImportPath(string $fromFile, string $toFile): string
{
    $fromParts = explode('/', trim(str_replace('\\', '/', dirname($fromFile)), '/'));
    $toParts = explode('/', trim(str_replace('\\', '/', $toFile), '/'));

    while ($fromParts && $toParts && $fromParts[0] === $toParts[0]) {
        array_shift($fromParts);
        array_shift($toParts);
    }

    $relative = str_repeat('../', count($fromParts)).implode('/', $toParts);
    $relative = preg_replace('/\.[^.]+$/', '', $relative);

    return str_starts_with($relative, '.') ? $relative : './'.$relative;
}

Artisan::command('make:page {name : Page name, for example Dashboard or Admin/Users/Index} {--force : Overwrite an existing file}', function (string $name): int {
    $component = starterComponentName($name);
    $path = starterResourcePath('js/pages', $name);
    $title = Str::headline($component);
    $layoutImport = starterImportPath($path, resource_path('js/layouts/AppLayout.vue'));

    return starterWriteFile($this, $path, <<<VUE
<script setup>
import { Head } from '@inertiajs/vue3';
import { NCard, NH1, NSpace, NText } from 'naive-ui';
import AppLayout from '{$layoutImport}';

defineOptions({
    name: '{$component}',
    layout: AppLayout,
});
</script>

<template>
    <Head title="{$title}" />

    <main class="app-shell">
        <section class="app-container">
            <NCard bordered>
                <NSpace vertical :size="12">
                    <NH1 class="!m-0">{$title}</NH1>
                    <NText depth="2">Start building this Inertia page.</NText>
                </NSpace>
            </NCard>
        </section>
    </main>
</template>
VUE);
})->purpose('Create an Inertia Vue page in resources/js/pages');

Artisan::command('make:layout {name : Layout name, for example AdminLayout or Settings/Shell} {--force : Overwrite an existing file}', function (string $name): int {
    $component = starterComponentName($name);
    $path = starterResourcePath('js/layouts', $name);

    return starterWriteFile($this, $path, <<<VUE
<script setup>
import { NCard, NLayout, NLayoutContent, NSpace } from 'naive-ui';

defineOptions({
    name: '{$component}',
});
</script>

<template>
    <NLayout class="app-shell" embedded>
        <NLayoutContent class="app-container" embedded>
            <NCard bordered>
                <NSpace vertical :size="16">
                    <slot />
                </NSpace>
            </NCard>
        </NLayoutContent>
    </NLayout>
</template>
VUE);
})->purpose('Create a Vue layout in resources/js/layouts');

Artisan::command('make:component {name : Component name, for example EmptyState or Forms/TextInput} {--force : Overwrite an existing file}', function (string $name): int {
    $component = starterComponentName($name);
    $path = starterResourcePath('js/components', $name);

    return starterWriteFile($this, $path, <<<VUE
<script setup>
import { NCard, NSpace, NText } from 'naive-ui';

defineOptions({
    name: '{$component}',
});

defineProps({
    title: {
        type: String,
        default: '{$component}',
    },
});
</script>

<template>
    <NCard bordered>
        <NSpace vertical :size="8">
            <NText strong>{{ title }}</NText>
            <slot />
        </NSpace>
    </NCard>
</template>
VUE);
})->purpose('Create a reusable Vue component in resources/js/components');

Artisan::command('make:lib {name : Library module name, for example formatters/date} {--force : Overwrite an existing file}', function (string $name): int {
    $normalized = collect(explode('/', str_replace('\\', '/', $name)))
        ->filter()
        ->map(fn (string $part) => Str::camel($part))
        ->implode('/');

    $path = resource_path('js/lib/'.$normalized.'.js');
    $exportName = Str::camel(class_basename($normalized));

    return starterWriteFile($this, $path, <<<JS
export function {$exportName}(...values) {
    return values.filter(Boolean).join(' ');
}
JS);
})->purpose('Create a plain JavaScript utility module in resources/js/lib');
