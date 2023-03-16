import { useContext } from "react";
import { createTheme, Theme, CustomTheme } from "@mui/material";
import { MainContext } from "../contexts/MainContext";
import { IThemeMode, IThemePalette } from "../interfaces/theme.interface";

const darkMode: IThemeMode = {
    main: "red",
    light: "",
    dark: "#363636",
    contrastText: "",
};

const lightMode: IThemeMode = {
    main: "#d9d9d9",
    light: "#C2B4AE",
    dark: "#363636",
    contrastText: "",
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
    contrastText: "#000",
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
        selectedTheme: "jade",
        themePalettes: {
            aquamarine: aquamarine,
            rozenQueen: rozenQueen,
            orangePrincess: orangePrincess
        },
    },
});

export default theme;
