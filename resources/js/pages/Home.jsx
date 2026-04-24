import { Head } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
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
    NRadioButton,
    NRadioGroup,
    NSelect,
    NSlider,
    NSpace,
    NProgress,
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
import { defineComponent, inject, ref } from 'vue';
import AppLayout, { ThemeSymbol } from '../layouts/AppLayout';

const stackItems = [
    'Laravel 13 blank project',
    'Inertia Vue 3 in JSX',
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
            return <NTag type="success">{row.status}</NTag>;
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

const CodeSnippet = defineComponent({
    name: 'CodeSnippet',
    setup(_, { slots }) {
        const copied = ref(false);

        const getCommand = () => {
            const nodes = slots.default?.() ?? [];

            return nodes
                .map((node) => (typeof node.children === 'string' ? node.children : ''))
                .join('')
                .trim();
        };

        const copyCommand = async () => {
            const command = getCommand();

            if (!command || typeof navigator === 'undefined' || !navigator.clipboard) {
                toast.error('Copy is not available in this browser');

                return;
            }

            await navigator.clipboard.writeText(command);
            copied.value = true;
            toast.success('Command copied');

            window.setTimeout(() => {
                copied.value = false;
            }, 1400);
        };

        return () => (
            <div class="command-snippet">
                <code class="code-snippet">{slots.default?.()}</code>
                <NTooltip trigger="hover">
                    {{
                        trigger: () => (
                            <NButton
                                class="command-copy"
                                quaternary
                                circle
                                size="small"
                                aria-label="Copy command"
                                onClick={copyCommand}
                            >
                                <NIcon>{copied.value ? <Check /> : <Copy />}</NIcon>
                            </NButton>
                        ),
                        default: () => (copied.value ? 'Copied' : 'Copy command'),
                    }}
                </NTooltip>
            </div>
        );
    },
});

export default defineComponent({
    name: 'Home',
    layout: AppLayout,
    props: {
        laravelVersion: String,
        phpVersion: String,
    },
    setup(props) {
        const theme = inject(ThemeSymbol);
        const dialog = useDialog();
        const message = useMessage();
        const modalOpen = ref(false);
        const drawerOpen = ref(false);
        const formValue = ref({
            title: 'Starter dashboard',
            status: 'review',
            visibility: 'team',
            date: Date.now(),
            enabled: true,
            priority: 6,
            estimate: 3,
        });

        const notify = () => {
            toast.success('Sonner is ready', {
                description: 'Toast notifications are mounted inside the Naive UI app shell.',
            });
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

        return () => (
            <>
                <Head title="Laravel Vue JSX Starter" />

                <NLayout class="app-shell" embedded>
                    <NLayoutContent class="app-container" embedded>
                        <NSpace vertical size={22}>
                            <NLayoutHeader class="app-hero rounded-lg p-5 sm:p-7" bordered={false}>
                                <NPageHeader>
                                    {{
                                        title: () => (
                                            <NH1 class="!mb-2 !mt-4 !text-3xl sm:!text-4xl">
                                                Laravel + Vue starter, rebuilt in JSX
                                            </NH1>
                                        ),
                                        subtitle: () => (
                                            <NText depth={2}>
                                                A clean Inertia foundation with server-side rendering,
                                                Naive UI theming, and Sonner notifications already connected.
                                            </NText>
                                        ),
                                        header: () => (
                                            <NSpace align="center" size={10}>
                                                <NTag type="success" round={false}>
                                                    SSR Ready
                                                </NTag>
                                                <NTag type="info" round={false}>
                                                    JSX
                                                </NTag>
                                                <NTag type="warning" round={false}>
                                                    Naive UI
                                                </NTag>
                                            </NSpace>
                                        ),
                                        extra: () => (
                                            <NSpace align="center" size={16}>
                                                <NIcon size={22}>
                                                    {theme?.isDark.value ? <Moon /> : <Sun />}
                                                </NIcon>
                                                <NSwitch
                                                    value={theme?.isDark.value}
                                                    onUpdateValue={theme?.toggleTheme}
                                                />
                                                <NButton type="primary" size="large" onClick={notify}>
                                                    <NIcon class="mr-2">
                                                        <Sparkles />
                                                    </NIcon>
                                                    Try Toast
                                                </NButton>
                                            </NSpace>
                                        ),
                                    }}
                                </NPageHeader>
                            </NLayoutHeader>

                            <div class="app-grid">
                                <NCard title="Framework" bordered>
                                    <NStatistic label="Laravel" value={props.laravelVersion} />
                                    <NDivider />
                                    <NStatistic label="PHP" value={props.phpVersion} />
                                </NCard>
                                <NCard title="Render Path" bordered>
                                    <NSpace vertical size={12}>
                                        <NText>Client entry</NText>
                                        <CodeSnippet>resources/js/app.jsx</CodeSnippet>
                                        <NText>SSR entry</NText>
                                        <CodeSnippet>resources/js/ssr.jsx</CodeSnippet>
                                    </NSpace>
                                </NCard>
                                <NCard title="Theme System" bordered>
                                    <NSpace vertical size={12}>
                                        <NText>
                                            Theme is shared by Laravel, Inertia, Naive UI, and Tailwind
                                            from one cookie-backed HTML tag.
                                        </NText>
                                        <NButton secondary onClick={theme?.toggleTheme}>
                                            Toggle Theme
                                        </NButton>
                                    </NSpace>
                                </NCard>
                            </div>

                            <NCard title="Installation" bordered>
                                <NTabs type="segment" animated>
                                    {installMethods.map((method) => (
                                        <NTabPane key={method.name} name={method.name} tab={method.tab}>
                                            <NSpace vertical size={10}>
                                                {method.commands.map((command) => (
                                                    <CodeSnippet key={command}>{command}</CodeSnippet>
                                                ))}
                                            </NSpace>
                                        </NTabPane>
                                    ))}
                                </NTabs>
                                <NAlert class="mt-4" title="Start command" type="info" bordered>
                                    Run npm run start to build browser assets, build the SSR bundle, start
                                    Laravel, and start the Inertia SSR renderer.
                                </NAlert>
                            </NCard>

                            <NCard bordered>
                                <div class="feature-grid">
                                    <div>
                                        <NSpace align="center" size={10}>
                                            <NIcon size={24} color="#18a058">
                                                <Zap />
                                            </NIcon>
                                            <NH2 class="!m-0 !text-2xl">Included setup</NH2>
                                        </NSpace>
                                        <NList class="mt-4">
                                            {stackItems.map((item) => (
                                                <NListItem key={item}>
                                                    <NSpace align="center">
                                                        <NIcon color="#18a058">
                                                            <CheckCircle />
                                                        </NIcon>
                                                        <NText>{item}</NText>
                                                    </NSpace>
                                                </NListItem>
                                            ))}
                                        </NList>
                                    </div>

                                    <div class="rounded-lg border border-black/10 bg-[#f6f8fb] p-5 dark:border-white/10 dark:bg-[#10151d]">
                                        <NText depth={3}>Production start</NText>
                                        <div class="mt-4 flex flex-col gap-3">
                                            <CodeSnippet>npm run start</CodeSnippet>
                                            <CodeSnippet>npm run build:ssr</CodeSnippet>
                                        </div>
                                    </div>
                                </div>
                            </NCard>

                            <div class="app-grid">
                                <NAlert title="Theme cache" type="success" bordered>
                                    Laravel reads the plain theme cookie before Blade renders, shares it through
                                    Inertia, and keeps Naive UI, Tailwind, and Sonner in sync.
                                </NAlert>

                                <NCard title="Build confidence" bordered>
                                    <NSpace vertical size={14}>
                                        <NProgress
                                            type="line"
                                            percentage={100}
                                            indicatorPlacement="inside"
                                            processing
                                        />
                                        <NText depth={2}>
                                            Client build, SSR build, and feature tests are wired for local
                                            development and GitHub Actions.
                                        </NText>
                                    </NSpace>
                                </NCard>

                                <NCard title="Generator commands" bordered>
                                    <NSpace vertical size={10}>
                                        <CodeSnippet>php artisan make:page Dashboard</CodeSnippet>
                                        <CodeSnippet>php artisan make:component EmptyState</CodeSnippet>
                                        <CodeSnippet>php artisan make:layout AdminLayout</CodeSnippet>
                                    </NSpace>
                                </NCard>
                            </div>

                            <NCard bordered>
                                <NTabs type="line" animated>
                                    <NTabPane name="stack" tab="Stack">
                                        <NDataTable
                                            columns={dependencyColumns}
                                            data={dependencyRows}
                                            pagination={false}
                                            bordered={false}
                                        />
                                    </NTabPane>
                                    <NTabPane name="metadata" tab="Metadata">
                                        <NDescriptions bordered column={2} labelPlacement="top">
                                            <NDescriptionsItem label="Frontend">Vue 3 JSX</NDescriptionsItem>
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
                                                content="Create Laravel, install Inertia, and configure Vue JSX."
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
                                    <NForm labelPlacement="top">
                                        <NFormItem label="Project title">
                                            <NInput
                                                value={formValue.value.title}
                                                onUpdateValue={(value) => (formValue.value.title = value)}
                                                placeholder="Enter a title"
                                                clearable
                                            />
                                        </NFormItem>

                                        <NFormItem label="Status">
                                            <NSelect
                                                value={formValue.value.status}
                                                options={statusOptions}
                                                onUpdateValue={(value) => (formValue.value.status = value)}
                                            />
                                        </NFormItem>

                                        <NFormItem label="Due date">
                                            <NDatePicker
                                                value={formValue.value.date}
                                                type="date"
                                                clearable
                                                onUpdateValue={(value) => (formValue.value.date = value)}
                                            />
                                        </NFormItem>

                                        <NFormItem label="Visibility">
                                            <NRadioGroup
                                                value={formValue.value.visibility}
                                                onUpdateValue={(value) => (formValue.value.visibility = value)}
                                            >
                                                <NRadioButton value="private">Private</NRadioButton>
                                                <NRadioButton value="team">Team</NRadioButton>
                                                <NRadioButton value="public">Public</NRadioButton>
                                            </NRadioGroup>
                                        </NFormItem>

                                        <NFormItem label="Enabled">
                                            <NCheckbox
                                                checked={formValue.value.enabled}
                                                onUpdateChecked={(value) => (formValue.value.enabled = value)}
                                            >
                                                Include this item in the active workspace
                                            </NCheckbox>
                                        </NFormItem>
                                    </NForm>

                                    <NSpace vertical size={16}>
                                        <NForm labelPlacement="top">
                                            <NFormItem label="Priority">
                                                <NSlider
                                                    value={formValue.value.priority}
                                                    min={1}
                                                    max={10}
                                                    onUpdateValue={(value) => (formValue.value.priority = value)}
                                                />
                                            </NFormItem>

                                            <NFormItem label="Estimate">
                                                <NInputNumber
                                                    value={formValue.value.estimate}
                                                    min={1}
                                                    max={30}
                                                    onUpdateValue={(value) => (formValue.value.estimate = value)}
                                                />
                                            </NFormItem>
                                        </NForm>

                                        <NSpace wrap>
                                            <NDropdown options={menuOptions} onSelect={selectMenuItem}>
                                                <NButton secondary>
                                                    Actions
                                                    <NIcon class="ml-2">
                                                        <ChevronDown />
                                                    </NIcon>
                                                </NButton>
                                            </NDropdown>

                                            <NPopover trigger="click">
                                                {{
                                                    trigger: () => <NButton secondary>Popover</NButton>,
                                                    default: () => (
                                                        <NText>
                                                            Popovers are useful for compact previews, hints, and
                                                            contextual controls.
                                                        </NText>
                                                    ),
                                                }}
                                            </NPopover>

                                            <NTooltip trigger="hover">
                                                {{
                                                    trigger: () => <NButton secondary>Tooltip</NButton>,
                                                    default: () => 'Naive UI tooltip provider is working.',
                                                }}
                                            </NTooltip>
                                        </NSpace>

                                        <NSpace wrap>
                                            <NButton type="primary" onClick={() => (modalOpen.value = true)}>
                                                Open Modal
                                            </NButton>
                                            <NButton secondary onClick={() => (drawerOpen.value = true)}>
                                                <NIcon class="mr-2">
                                                    <PanelRightOpen />
                                                </NIcon>
                                                Open Drawer
                                            </NButton>
                                            <NButton tertiary type="success" onClick={openDialog}>
                                                Dialog
                                            </NButton>
                                            <NButton tertiary type="info" onClick={() => message.info('Message provider ready')}>
                                                Message
                                            </NButton>
                                        </NSpace>

                                        <NDescriptions bordered column={1} labelPlacement="left">
                                            <NDescriptionsItem label="Title">
                                                {formValue.value.title}
                                            </NDescriptionsItem>
                                            <NDescriptionsItem label="Status">
                                                {formValue.value.status}
                                            </NDescriptionsItem>
                                            <NDescriptionsItem label="Priority">
                                                {formValue.value.priority}
                                            </NDescriptionsItem>
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
                                    <NButton tertiary type="primary" onClick={notify}>
                                        Confirm toast wiring
                                    </NButton>
                                </NSpace>
                            </NCard>
                        </NSpace>
                    </NLayoutContent>
                </NLayout>

                <NModal
                    show={modalOpen.value}
                    onUpdateShow={(value) => (modalOpen.value = value)}
                    preset="card"
                    title="Reusable modal"
                    class="starter-modal"
                    bordered={false}
                >
                    <NSpace vertical size={12}>
                        <NText>
                            This modal is rendered by Naive UI and inherits the same SSR-safe theme.
                        </NText>
                        <NInput
                            value={formValue.value.title}
                            onUpdateValue={(value) => (formValue.value.title = value)}
                            placeholder="Update title from modal"
                        />
                        <NSpace justify="end">
                            <NButton onClick={() => (modalOpen.value = false)}>Close</NButton>
                        </NSpace>
                    </NSpace>
                </NModal>

                <NDrawer
                    show={drawerOpen.value}
                    onUpdateShow={(value) => (drawerOpen.value = value)}
                    width={360}
                    placement="right"
                >
                    <NDrawerContent title="Workspace drawer" closable>
                        <NSpace vertical size={14}>
                            <NAlert type="info" title="Drawer ready">
                                Use drawers for settings, filters, previews, and secondary workflows.
                            </NAlert>
                            <NSelect
                                value={formValue.value.status}
                                options={statusOptions}
                                onUpdateValue={(value) => (formValue.value.status = value)}
                            />
                            <NButton type="primary" block onClick={() => (drawerOpen.value = false)}>
                                Save
                            </NButton>
                        </NSpace>
                    </NDrawerContent>
                </NDrawer>
            </>
        );
    },
});
