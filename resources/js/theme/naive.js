import { darkTheme } from 'naive-ui';

export const lightTheme = null;

const sharedTheme = {
    common: {
        fontFamily: 'Instrument Sans, Inter, ui-sans-serif, system-ui, sans-serif',
        fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        borderRadius: '8px',
        borderRadiusSmall: '6px',
        heightMedium: '40px',
        heightLarge: '46px',
        primaryColor: '#18a058',
        primaryColorHover: '#36ad6a',
        primaryColorPressed: '#0c7a43',
        primaryColorSuppl: '#36ad6a',
        infoColor: '#2080f0',
        successColor: '#18a058',
        warningColor: '#f0a020',
        errorColor: '#d03050',
    },
    Button: {
        fontWeight: '700',
        borderRadiusMedium: '8px',
        borderRadiusLarge: '8px',
    },
    Card: {
        borderRadius: '8px',
        paddingMedium: '22px',
        titleFontWeight: '800',
    },
    Tag: {
        borderRadius: '999px',
    },
};

export const themeOverrides = {
    light: {
        common: {
            ...sharedTheme.common,
            bodyColor: '#f5f7fb',
            cardColor: '#ffffff',
            modalColor: '#ffffff',
            popoverColor: '#ffffff',
            tableColor: '#ffffff',
            textColorBase: '#172033',
            textColor1: '#172033',
            textColor2: '#3a475f',
            textColor3: '#667085',
            borderColor: '#dde5ef',
            dividerColor: '#e8edf3',
            hoverColor: '#f2f6fb',
            pressedColor: '#eaf2f8',
        },
        Card: {
            ...sharedTheme.Card,
            color: '#ffffff',
            borderColor: '#dfe7f0',
        },
        Button: sharedTheme.Button,
        Tag: sharedTheme.Tag,
    },
    dark: {
        common: {
            ...sharedTheme.common,
            bodyColor: '#0e1117',
            cardColor: '#151a23',
            modalColor: '#171d27',
            popoverColor: '#171d27',
            tableColor: '#151a23',
            textColorBase: '#eef2f8',
            textColor1: '#eef2f8',
            textColor2: '#c7d0df',
            textColor3: '#8f9bad',
            borderColor: '#2d3544',
            dividerColor: '#252d3b',
            hoverColor: '#1d2430',
            pressedColor: '#242d3b',
        },
        Card: {
            ...sharedTheme.Card,
            color: '#151a23',
            borderColor: '#2d3544',
        },
        Button: sharedTheme.Button,
        Tag: sharedTheme.Tag,
    },
};

export function resolveNaiveTheme(themeName) {
    return themeName === 'dark' ? darkTheme : lightTheme;
}
