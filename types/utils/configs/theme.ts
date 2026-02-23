export type ThemeConfigProps = Array<{
    name: string,
    light: {
        [key: string]: string;
    },
    dark: {
        [key: string]: string;
    }
}>