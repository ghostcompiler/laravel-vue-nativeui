import '../css/app.css';
import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, createSSRApp, h } from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.{vue,jsx}', { eager: true });

        return pages[`./pages/${name}.vue`] ?? pages[`./pages/${name}.jsx`];
    },
    progress: {
        color: '#18a058',
    },
    setup({ el, App, props, plugin }) {
        const appFactory = el?.hasAttribute('data-server-rendered') ? createSSRApp : createApp;
        const app = appFactory({ render: () => h(App, props) });

        app.use(plugin).mount(el);
    },
});
