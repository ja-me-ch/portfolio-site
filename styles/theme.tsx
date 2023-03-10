import { createTheme, Theme } from "@mui/material";

interface ThemePalette {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

// Modes
interface ThemeMode {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

const darkMode: ThemeMode = {
    main: "red",
    light: "",
    dark: "#363636",
    contrastText: ''
};

const lightMode: ThemeMode = {
    main: "#d9d9d9",
    light: "#535353",
    dark: "#363636",
    contrastText: "",
};


const aquamarine: ThemePalette = {
    main: "#1C74BD",
    light: "#4272BA",
    dark: "",
    contrastText: "",
};
const theme = createTheme({
    palette: {
        mode: 'light',
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
        selectedTheme: "aquamarine",
        aquamarine: aquamarine,
    },
});

export default theme;
