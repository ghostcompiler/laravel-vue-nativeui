<script>
export const ThemeSymbol = Symbol('Theme');
</script>

<script setup>
import { usePage } from '@inertiajs/vue3';
import {
    NConfigProvider,
    NDialogProvider,
    NGlobalStyle,
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider,
} from 'naive-ui';
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
import { computed, provide, ref } from 'vue';
import { resolveNaiveTheme, themeOverrides } from '../theme/naive';

defineOptions({
    name: 'AppLayout',
});

const page = usePage();
const initialTheme = page.props.theme === 'dark' ? 'dark' : 'light';
const themeName = ref(initialTheme);

const setTheme = (nextTheme) => {
    themeName.value = nextTheme;

    if (typeof document !== 'undefined') {
        document.documentElement.dataset.theme = nextTheme;
        document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
    }

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', nextTheme);
    }
};

const toggleTheme = () => setTheme(themeName.value === 'dark' ? 'light' : 'dark');

provide(ThemeSymbol, {
    themeName,
    isDark: computed(() => themeName.value === 'dark'),
    setTheme,
    toggleTheme,
});
</script>

<template>
    <NConfigProvider
        :theme="resolveNaiveTheme(themeName)"
        :theme-overrides="themeOverrides[themeName]"
        abstract
    >
        <NLoadingBarProvider>
            <NDialogProvider>
                <NNotificationProvider>
                    <NMessageProvider>
                        <slot />
                        <Toaster
                            rich-colors
                            close-button
                            expand
                            position="top-right"
                            :theme="themeName"
                        />
                    </NMessageProvider>
                </NNotificationProvider>
            </NDialogProvider>
        </NLoadingBarProvider>
        <NGlobalStyle />
    </NConfigProvider>
</template>
