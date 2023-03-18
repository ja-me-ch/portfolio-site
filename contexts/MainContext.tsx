import React, { createContext, useState } from "react";
import { CustomTheme, useTheme } from "@mui/material";
// import theme from "../styles/theme";

interface MainContextProps {
    showNavbar: {
        value: boolean;
        toggle: () => void;
    };
    themeMode: {
        value: string;
        toggle: () => void;
    };
    selectedTheme: {
        value: string;
        update: (themeName: string) => void;
    };
}

export const MainContext = createContext<MainContextProps | undefined>(
    undefined
);

export function MainContextProvider(props) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [themeMode, setThemeMode] = useState("light");
    const [selectedTheme, setSelectedTheme] = useState("aquamarine");
    const theme: CustomTheme = useTheme();
    theme.themes.selectedTheme = selectedTheme;
    theme.themes.selectedMode = themeMode;

    const toggleNavbar = function (): void {
        setShowNavbar((s) => !s);
    };

    const toggleThemeMode = function (): void {
        setThemeMode((s) => (s === "light" ? "dark" : "light"));
    };

    const updateSelectedTheme = function (themeName: string): void {
        setSelectedTheme(themeName);
    };

    return (
        <MainContext.Provider
            value={
                {
                    showNavbar: {
                        value: showNavbar,
                        toggle: toggleNavbar,
                    },
                    themeMode: {
                        value: themeMode,
                        toggle: toggleThemeMode,
                    },
                    selectedTheme: {
                        value: selectedTheme,
                        update: updateSelectedTheme,
                    },
                } as MainContextProps
            }
        >
            {props.children}
        </MainContext.Provider>
    );
}
