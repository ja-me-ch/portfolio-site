import { useContext } from "react";
import { createTheme, Theme, CustomTheme } from "@mui/material";
import { MainContext } from "../contexts/MainContext";
import { IThemeMode, IThemePalette } from "../interfaces/theme.interface";

const darkMode: IThemeMode = {
    main: "#423C42",
    light: "#363636",
    dark: "#17171A",
    contrastText: "#FFFFFF",
};

const lightMode: IThemeMode = {
    main: "#d9d9d9",
    light: "#F0E4D8",
    dark: "#363636",
    contrastText: "#000000",
};

const aquamarine: IThemePalette = {
    main: "#3FA0D1",
    light: "#4272BA",
    dark: "#3F53D1",
    contrastText: "#FFFFFF",
};

const rozenQueen: IThemePalette = {
    main: "#B83939",
    light: "#CF4D36",
    dark: "#9E4C29",
    contrastText: "#ffffff",
};

const orangePrincess: IThemePalette = {
    main: "#E8AF5D",
    light: "#F2C661",
    dark: "#DCC362",
    contrastText: "#000000",
};

const theme: CustomTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper: "#DEDEDE",
            default: "",
        },
    },
    themes: {
        modes: {
            dark: darkMode,
            light: lightMode,
        },
        selectedMode: 'light',
        selectedTheme: "jade",
        themePalettes: {
            aquamarine: aquamarine,
            rozenQueen: rozenQueen,
            orangePrincess: orangePrincess
        },
    },
});

export default theme;
