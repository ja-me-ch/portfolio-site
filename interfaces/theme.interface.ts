export interface IThemeMode {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

export interface IThemePalette {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

export interface IThemes {
    modes: {
        dark: IThemeMode;
        light: IThemeMode;
    };
    selectedTheme: string;
    themePalettes?: Record<string, IThemePalette>;
}