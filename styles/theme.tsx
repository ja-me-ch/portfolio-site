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
    main: "blue",
    light: "",
    dark: "#363636",
    contrastText: ''
};

const lightMode: ThemeMode = {
    main: "#DEDEDE",
    light: "",
    dark: "#363636",
    contrastText: "",
};


const aquamarine: ThemePalette = {
    main: "",
    light: '',
    dark: '',
    contrastText: '',
};
const theme = createTheme({
    palette: {
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
