import React, { createContext, useState } from "react";
import { CustomTheme, useTheme, useMediaQuery } from "@mui/material";
// import theme from "../styles/theme";

interface MainContextProps {
    showNavbar: {
        value: boolean;
        toggle: () => void;
    };
    selectedTheme: {
        value: string;
        update: (themeName: string) => void;
    };
    selectedMode: {
        value: string;
        toggle: () => void;
    };
    selectedTech: {
        value: string | null;
        update: (tech: string) => void;
    }
}

export const MainContext = createContext<MainContextProps | undefined>(
    undefined
);

export function MainContextProvider(props) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [themeMode, setThemeMode] = useState("light");
    const [selectedTheme, setSelectedTheme] = useState("aquamarine");
    const [selectedTech, setSelectedTech] = useState(null);
    const theme: CustomTheme = useTheme();

    const useDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    theme.themes.selectedTheme = selectedTheme;
    theme.themes.selectedMode = themeMode;

    const toggleNavbar = function (): void {
        setShowNavbar((s) => !s);
    };

    const toggleThemeMode = function (): void {
        setThemeMode((s) => (s === "light" ? "dark" : "light"));
    };

    if (useDarkMode === false && themeMode === "light") {
        toggleThemeMode();
    }

    const updateSelectedTheme = function (themeName: string): void {
        setSelectedTheme(themeName);
    };

    const updateSelectedTech = function (tech: string): void {
        setSelectedTech(tech);
    }

    return (
        <MainContext.Provider
            value={
                {
                    showNavbar: {
                        value: showNavbar,
                        toggle: toggleNavbar,
                    },
                    selectedTheme: {
                        value: selectedTheme,
                        update: updateSelectedTheme,
                    },
                    selectedMode: {
                        value: themeMode,
                        toggle: toggleThemeMode,
                    },
                    selectedTech: {
                        value: selectedTech,
                        update: updateSelectedTech
                    }
                } as MainContextProps
            }
        >
            {props.children}
        </MainContext.Provider>
    );
}
