import { Theme, ThemeOptions } from "@mui/material/styles";
import { IThemeMode, IThemePalette, IThemes } from "../interfaces/theme.interface";
import "@mui/material";

declare module "@mui/material/styles" {

    interface CustomTheme extends Theme {
        themes: IThemes
    }
    interface CustomThemeOptions extends ThemeOptions {
        themes?: IThemes;
    }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
