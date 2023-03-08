import { Theme, ThemeOptions } from "@mui/material/styles";
import "@mui/material";

declare module "@mui/material/styles" {
    interface ThemeMode {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    }

    interface ThemePalette {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    }

    interface CustomTheme extends Theme {
        themes: {
            modes: {
                dark: ThemeMode,
                light: ThemeMode
            };
            selectedTheme: string,
            themePalettes: Record<string, ThemePalette>
        };
    }
    interface CustomThemeOptions extends ThemeOptions {
        themes?: Object;
    }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
