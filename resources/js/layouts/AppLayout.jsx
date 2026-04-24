import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
import {
    NConfigProvider,
    NDialogProvider,
    NGlobalStyle,
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider,
} from 'naive-ui';
import { usePage } from '@inertiajs/vue3';
import { computed, defineComponent, h, provide, ref } from 'vue';
import { resolveNaiveTheme, themeOverrides } from '../theme/naive';

export const ThemeSymbol = Symbol('Theme');

export default defineComponent({
    name: 'AppLayout',
    setup(_, { slots }) {
        const page = usePage();
        const initialTheme = page.props.theme === 'dark' ? 'dark' : 'light';
        const themeName = ref(initialTheme);

        const setTheme = (nextTheme) => {
            themeName.value = nextTheme;

            if (typeof document !== 'undefined') {
                document.documentElement.dataset.theme = nextTheme;
            }

            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', nextTheme);
            }

            if (typeof document !== 'undefined') {
                document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
            }
        };

        const toggleTheme = () => setTheme(themeName.value === 'dark' ? 'light' : 'dark');

        provide(ThemeSymbol, {
            themeName,
            isDark: computed(() => themeName.value === 'dark'),
            setTheme,
            toggleTheme,
        });

        return () => (
            <NConfigProvider
                theme={resolveNaiveTheme(themeName.value)}
                themeOverrides={themeOverrides[themeName.value]}
                abstract
            >
                <NLoadingBarProvider>
                    <NDialogProvider>
                        <NNotificationProvider>
                            <NMessageProvider>
                                {slots.default?.()}
                                <Toaster
                                    richColors
                                    closeButton
                                    expand
                                    position="top-right"
                                    theme={themeName.value}
                                />
                            </NMessageProvider>
                        </NNotificationProvider>
                    </NDialogProvider>
                </NLoadingBarProvider>
                {h(NGlobalStyle)}
            </NConfigProvider>
        );
    },
});
