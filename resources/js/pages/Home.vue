<script setup>
import { Head } from '@inertiajs/vue3';
import {
    NAlert,
    NBadge,
    NButton,
    NCard,
    NCheckbox,
    NDataTable,
    NDatePicker,
    NDescriptions,
    NDescriptionsItem,
    NDivider,
    NDrawer,
    NDrawerContent,
    NDropdown,
    NForm,
    NFormItem,
    NH1,
    NH2,
    NIcon,
    NInput,
    NInputNumber,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NList,
    NListItem,
    NModal,
    NPageHeader,
    NPopover,
    NProgress,
    NRadioButton,
    NRadioGroup,
    NSelect,
    NSlider,
    NSpace,
    NStatistic,
    NSwitch,
    NTabPane,
    NTabs,
    NTag,
    NText,
    NTimeline,
    NTimelineItem,
    NTooltip,
    useDialog,
    useMessage,
} from 'naive-ui';
import { Check, CheckCircle, ChevronDown, Copy, Moon, PanelRightOpen, Sparkles, Sun, Zap } from 'lucide-vue-next';
import { h, inject, ref } from 'vue';
import { toast } from 'vue-sonner';
import AppLayout, { ThemeSymbol } from '../layouts/AppLayout.vue';

defineOptions({
    name: 'Home',
    layout: AppLayout,
});

const props = defineProps({
    laravelVersion: String,
    phpVersion: String,
});

const theme = inject(ThemeSymbol);
const dialog = useDialog();
const message = useMessage();
const modalOpen = ref(false);
const drawerOpen = ref(false);
const copiedCommand = ref('');

const formValue = ref({
    title: 'Starter dashboard',
    status: 'review',
    visibility: 'team',
    date: Date.now(),
    enabled: true,
    priority: 6,
    estimate: 3,
});

const stackItems = [
    'Laravel 13 blank project',
    'Inertia Vue 3 single-file components',
    'SSR bundle and Artisan SSR scripts',
    'Naive UI provider, global styles, theme overrides',
    'vue-sonner toaster wired into the app layout',
];

const dependencyRows = [
    { key: 'inertia', name: 'Inertia', role: 'Server-driven SPA routing', status: 'Configured' },
    { key: 'naive', name: 'Naive UI', role: 'Themeable Vue component system', status: 'Configured' },
    { key: 'sonner', name: 'vue-sonner', role: 'Accessible toast notifications', status: 'Configured' },
    { key: 'ssr', name: 'Vue SSR', role: 'Server-rendered first response', status: 'Configured' },
];

const dependencyColumns = [
    { title: 'Package', key: 'name' },
    { title: 'Role', key: 'role' },
    {
        title: 'Status',
        key: 'status',
        render(row) {
            return h(NTag, { type: 'success' }, { default: () => row.status });
        },
    },
];

const statusOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'In review', value: 'review' },
    { label: 'Published', value: 'published' },
];

const menuOptions = [
    { label: 'Create page', key: 'page' },
    { label: 'Create component', key: 'component' },
    { label: 'Open documentation', key: 'docs' },
];

const installMethods = [
    {
        name: 'composer',
        tab: 'Composer',
        commands: ['composer create-project ghostcompiler/laravel-vue-nativeui'],
    },
    {
        name: 'installer',
        tab: 'Laravel Installer',
        commands: ['laravel new project --using=ghostcompiler/laravel-vue-nativeui'],
    },
    {
        name: 'clone',
        tab: 'Git Clone',
        commands: [
            'git clone https://github.com/ghostcompiler/laravel-vue-nativeui demo',
            'cd demo',
            'composer install',
            'npm install',
            'cp .env.example .env',
            'php artisan key:generate',
            'npm run start',
        ],
    },
];

const productionCommands = ['npm run start', 'npm run build:ssr'];
const generatorCommands = [
    'php artisan make:page Dashboard',
    'php artisan make:component EmptyState',
    'php artisan make:layout AdminLayout',
];

const notify = () => {
    toast.success('Sonner is ready', {
        description: 'Toast notifications are mounted inside the Naive UI app shell.',
    });
};

const copyCommand = async (command) => {
    if (!command || typeof navigator === 'undefined' || !navigator.clipboard) {
        toast.error('Copy is not available in this browser');

        return;
    }

    await navigator.clipboard.writeText(command);
    copiedCommand.value = command;
    toast.success('Command copied');

    window.setTimeout(() => {
        copiedCommand.value = '';
    }, 1400);
};

const openDialog = () => {
    dialog.success({
        title: 'Naive UI dialog',
        content: 'Dialogs work through the global provider in AppLayout.',
        positiveText: 'Nice',
    });
};

const selectMenuItem = (key) => {
    message.success(`Selected: ${key}`);
};
</script>

<template>
    <Head title="Laravel Vue NativeUI Starter" />

    <NLayout class="app-shell" embedded>
        <NLayoutContent class="app-container" embedded>
            <NSpace vertical :size="22">
                <NLayoutHeader class="app-hero rounded-lg p-5 sm:p-7" :bordered="false">
                    <NPageHeader>
                        <template #header>
                            <NSpace align="center" :size="10">
                                <NTag type="success" :round="false">SSR Ready</NTag>
                                <NTag type="info" :round="false">Vue SFC</NTag>
                                <NTag type="warning" :round="false">Naive UI</NTag>
                            </NSpace>
                        </template>

                        <template #title>
                            <NH1 class="!mb-2 !mt-4 !text-3xl sm:!text-4xl">
                                Laravel + Vue starter with Naive UI
                            </NH1>
                        </template>

                        <template #subtitle>
                            <NText :depth="2">
                                A clean Inertia foundation with server-side rendering, Naive UI theming,
                                and Sonner notifications already connected.
                            </NText>
                        </template>

                        <template #extra>
                            <NSpace align="center" :size="16">
                                <NIcon :size="22">
                                    <Moon v-if="theme?.isDark.value" />
                                    <Sun v-else />
                                </NIcon>
                                <NSwitch :value="theme?.isDark.value" @update:value="theme?.toggleTheme" />
                                <NButton type="primary" size="large" @click="notify">
                                    <template #icon>
                                        <NIcon><Sparkles /></NIcon>
                                    </template>
                                    Try Toast
                                </NButton>
                            </NSpace>
                        </template>
                    </NPageHeader>
                </NLayoutHeader>

                <div class="app-grid">
                    <NCard title="Framework" bordered>
                        <NStatistic label="Laravel" :value="props.laravelVersion" />
                        <NDivider />
                        <NStatistic label="PHP" :value="props.phpVersion" />
                    </NCard>

                    <NCard title="Render Path" bordered>
                        <NSpace vertical :size="12">
                            <NText>Client entry</NText>
                            <div class="command-snippet">
                                <code class="code-snippet">resources/js/app.js</code>
                            </div>
                            <NText>SSR entry</NText>
                            <div class="command-snippet">
                                <code class="code-snippet">resources/js/ssr.js</code>
                            </div>
                        </NSpace>
                    </NCard>

                    <NCard title="Theme System" bordered>
                        <NSpace vertical :size="12">
                            <NText>
                                Theme is shared by Laravel, Inertia, Naive UI, and Tailwind from one
                                cookie-backed HTML tag.
                            </NText>
                            <NButton secondary @click="theme?.toggleTheme">Toggle Theme</NButton>
                        </NSpace>
                    </NCard>
                </div>

                <NCard title="Installation" bordered>
                    <NTabs type="segment" animated>
                        <NTabPane
                            v-for="method in installMethods"
                            :key="method.name"
                            :name="method.name"
                            :tab="method.tab"
                        >
                            <NSpace vertical :size="10">
                                <div v-for="command in method.commands" :key="command" class="command-snippet">
                                    <code class="code-snippet">{{ command }}</code>
                                    <NTooltip trigger="hover">
                                        <template #trigger>
                                            <NButton
                                                class="command-copy"
                                                quaternary
                                                circle
                                                size="small"
                                                aria-label="Copy command"
                                                @click="copyCommand(command)"
                                            >
                                                <template #icon>
                                                    <NIcon>
                                                        <Check v-if="copiedCommand === command" />
                                                        <Copy v-else />
                                                    </NIcon>
                                                </template>
                                            </NButton>
                                        </template>
                                        {{ copiedCommand === command ? 'Copied' : 'Copy command' }}
                                    </NTooltip>
                                </div>
                            </NSpace>
                        </NTabPane>
                    </NTabs>
                    <NAlert class="mt-4" title="Start command" type="info" bordered>
                        Run npm run start to build browser assets, build the SSR bundle, start Laravel,
                        and start the Inertia SSR renderer.
                    </NAlert>
                </NCard>

                <NCard bordered>
                    <div class="feature-grid">
                        <div>
                            <NSpace align="center" :size="10">
                                <NIcon :size="24" color="#18a058"><Zap /></NIcon>
                                <NH2 class="!m-0 !text-2xl">Included setup</NH2>
                            </NSpace>
                            <NList class="mt-4">
                                <NListItem v-for="item in stackItems" :key="item">
                                    <NSpace align="center">
                                        <NIcon color="#18a058"><CheckCircle /></NIcon>
                                        <NText>{{ item }}</NText>
                                    </NSpace>
                                </NListItem>
                            </NList>
                        </div>

                        <div class="rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]">
                            <NText :depth="3">Production start</NText>
                            <div class="mt-4 flex flex-col gap-3">
                                <div v-for="command in productionCommands" :key="command" class="command-snippet">
                                    <code class="code-snippet">{{ command }}</code>
                                    <NTooltip trigger="hover">
                                        <template #trigger>
                                            <NButton
                                                class="command-copy"
                                                quaternary
                                                circle
                                                size="small"
                                                aria-label="Copy command"
                                                @click="copyCommand(command)"
                                            >
                                                <template #icon>
                                                    <NIcon>
                                                        <Check v-if="copiedCommand === command" />
                                                        <Copy v-else />
                                                    </NIcon>
                                                </template>
                                            </NButton>
                                        </template>
                                        {{ copiedCommand === command ? 'Copied' : 'Copy command' }}
                                    </NTooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </NCard>

                <div class="app-grid">
                    <NAlert title="Theme cache" type="success" bordered>
                        Laravel reads the plain theme cookie before Blade renders, shares it through Inertia,
                        and keeps Naive UI, Tailwind, and Sonner in sync.
                    </NAlert>

                    <NCard title="Build confidence" bordered>
                        <NSpace vertical :size="14">
                            <NProgress type="line" :percentage="100" indicator-placement="inside" processing />
                            <NText :depth="2">
                                Client build, SSR build, and feature tests are wired for local development and
                                GitHub Actions.
                            </NText>
                        </NSpace>
                    </NCard>

                    <NCard title="Generator commands" bordered>
                        <NSpace vertical :size="10">
                            <NText :depth="2">Generators create Vue .vue files by default.</NText>
                            <div v-for="command in generatorCommands" :key="command" class="command-snippet">
                                <code class="code-snippet">{{ command }}</code>
                                <NTooltip trigger="hover">
                                    <template #trigger>
                                        <NButton
                                            class="command-copy"
                                            quaternary
                                            circle
                                            size="small"
                                            aria-label="Copy command"
                                            @click="copyCommand(command)"
                                        >
                                            <template #icon>
                                                <NIcon>
                                                    <Check v-if="copiedCommand === command" />
                                                    <Copy v-else />
                                                </NIcon>
                                            </template>
                                        </NButton>
                                    </template>
                                    {{ copiedCommand === command ? 'Copied' : 'Copy command' }}
                                </NTooltip>
                            </div>
                        </NSpace>
                    </NCard>
                </div>

                <NCard bordered>
                    <NTabs type="line" animated>
                        <NTabPane name="stack" tab="Stack">
                            <NDataTable
                                :columns="dependencyColumns"
                                :data="dependencyRows"
                                :pagination="false"
                                :bordered="false"
                            />
                        </NTabPane>
                        <NTabPane name="metadata" tab="Metadata">
                            <NDescriptions bordered :column="2" label-placement="top">
                                <NDescriptionsItem label="Frontend">Vue 3 SFC</NDescriptionsItem>
                                <NDescriptionsItem label="Bridge">Inertia Laravel</NDescriptionsItem>
                                <NDescriptionsItem label="Theme">Cookie-backed SSR</NDescriptionsItem>
                                <NDescriptionsItem label="Notifications">vue-sonner</NDescriptionsItem>
                            </NDescriptions>
                        </NTabPane>
                        <NTabPane name="timeline" tab="Workflow">
                            <NTimeline>
                                <NTimelineItem
                                    type="success"
                                    title="Scaffold"
                                    content="Create Laravel, install Inertia, and configure Vue single-file components."
                                />
                                <NTimelineItem
                                    type="info"
                                    title="Theme"
                                    content="Resolve theme on the server and hydrate without flicker."
                                />
                                <NTimelineItem
                                    type="warning"
                                    title="Ship"
                                    content="Build client assets, build SSR, then start the SSR renderer."
                                />
                            </NTimeline>
                        </NTabPane>
                    </NTabs>
                </NCard>

                <NCard title="Daily Naive UI Controls" bordered>
                    <div class="controls-grid">
                        <NForm label-placement="top">
                            <NFormItem label="Project title">
                                <NInput v-model:value="formValue.title" placeholder="Enter a title" clearable />
                            </NFormItem>

                            <NFormItem label="Status">
                                <NSelect v-model:value="formValue.status" :options="statusOptions" />
                            </NFormItem>

                            <NFormItem label="Due date">
                                <NDatePicker v-model:value="formValue.date" type="date" clearable />
                            </NFormItem>

                            <NFormItem label="Visibility">
                                <NRadioGroup v-model:value="formValue.visibility">
                                    <NRadioButton value="private">Private</NRadioButton>
                                    <NRadioButton value="team">Team</NRadioButton>
                                    <NRadioButton value="public">Public</NRadioButton>
                                </NRadioGroup>
                            </NFormItem>

                            <NFormItem label="Enabled">
                                <NCheckbox v-model:checked="formValue.enabled">
                                    Include this item in the active workspace
                                </NCheckbox>
                            </NFormItem>
                        </NForm>

                        <NSpace vertical :size="16">
                            <NForm label-placement="top">
                                <NFormItem label="Priority">
                                    <NSlider v-model:value="formValue.priority" :min="1" :max="10" />
                                </NFormItem>

                                <NFormItem label="Estimate">
                                    <NInputNumber v-model:value="formValue.estimate" :min="1" :max="30" />
                                </NFormItem>
                            </NForm>

                            <NSpace wrap>
                                <NDropdown :options="menuOptions" @select="selectMenuItem">
                                    <NButton secondary>
                                        Actions
                                        <template #icon>
                                            <NIcon><ChevronDown /></NIcon>
                                        </template>
                                    </NButton>
                                </NDropdown>

                                <NPopover trigger="click">
                                    <template #trigger>
                                        <NButton secondary>Popover</NButton>
                                    </template>
                                    <NText>Popovers are useful for compact previews, hints, and contextual controls.</NText>
                                </NPopover>

                                <NTooltip trigger="hover">
                                    <template #trigger>
                                        <NButton secondary>Tooltip</NButton>
                                    </template>
                                    Naive UI tooltip provider is working.
                                </NTooltip>
                            </NSpace>

                            <NSpace wrap>
                                <NButton type="primary" @click="modalOpen = true">Open Modal</NButton>
                                <NButton secondary @click="drawerOpen = true">
                                    <template #icon>
                                        <NIcon><PanelRightOpen /></NIcon>
                                    </template>
                                    Open Drawer
                                </NButton>
                                <NButton tertiary type="success" @click="openDialog">Dialog</NButton>
                                <NButton tertiary type="info" @click="message.info('Message provider ready')">
                                    Message
                                </NButton>
                            </NSpace>

                            <NDescriptions bordered :column="1" label-placement="left">
                                <NDescriptionsItem label="Title">{{ formValue.title }}</NDescriptionsItem>
                                <NDescriptionsItem label="Status">{{ formValue.status }}</NDescriptionsItem>
                                <NDescriptionsItem label="Priority">{{ formValue.priority }}</NDescriptionsItem>
                            </NDescriptions>
                        </NSpace>
                    </div>
                </NCard>

                <NCard bordered>
                    <NSpace align="center" justify="space-between">
                        <NSpace align="center">
                            <NBadge value="SSR" type="success" />
                            <NText strong>Ready for application work</NText>
                        </NSpace>
                        <NButton tertiary type="primary" @click="notify">Confirm toast wiring</NButton>
                    </NSpace>
                </NCard>
            </NSpace>
        </NLayoutContent>
    </NLayout>

    <NModal
        v-model:show="modalOpen"
        preset="card"
        title="Reusable modal"
        class="starter-modal"
        :bordered="false"
    >
        <NSpace vertical :size="12">
            <NText>This modal is rendered by Naive UI and inherits the same SSR-safe theme.</NText>
            <NInput v-model:value="formValue.title" placeholder="Update title from modal" />
            <NSpace justify="end">
                <NButton @click="modalOpen = false">Close</NButton>
            </NSpace>
        </NSpace>
    </NModal>

    <NDrawer v-model:show="drawerOpen" :width="360" placement="right">
        <NDrawerContent title="Workspace drawer" closable>
            <NSpace vertical :size="14">
                <NAlert type="info" title="Drawer ready">
                    Use drawers for settings, filters, previews, and secondary workflows.
                </NAlert>
                <NSelect v-model:value="formValue.status" :options="statusOptions" />
                <NButton type="primary" block @click="drawerOpen = false">Save</NButton>
            </NSpace>
        </NDrawerContent>
    </NDrawer>
</template>
