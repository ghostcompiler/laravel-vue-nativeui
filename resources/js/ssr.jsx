import '../css/app.css';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { setup as setupCssRender } from '@css-render/vue3-ssr';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(async (page) => {
    let cssRender;

    const response = await createInertiaApp({
        page,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.{vue,jsx}', { eager: true });

            return pages[`./pages/${name}.vue`] ?? pages[`./pages/${name}.jsx`];
        },
        render: (app) => renderToString(app),
        setup({ App, props, plugin }) {
            const app = createSSRApp({ render: () => h(App, props) });

            app.use(plugin);
            cssRender = setupCssRender(app);

            return app;
        },
    });

    const css = cssRender?.collect();

    if (css) {
        response.head.push(css);
    }

    return response;
});
