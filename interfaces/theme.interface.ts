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
    selectedMode: string;
    selectedTheme: string;
    themePalettes?: {
        aquamarine: IThemePalette,
        rozenQueen: IThemePalette,
        orangePrincess: IThemePalette,
    };
}