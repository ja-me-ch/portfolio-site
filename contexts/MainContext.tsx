import React, { createContext, useState } from "react";
import { CustomTheme, useTheme } from "@mui/material";
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
}

export const MainContext = createContext<MainContextProps | undefined>(
    undefined
);

export function MainContextProvider(props) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [selectedTheme, setSelectedTheme] = useState("orangePrincess");
    const theme: CustomTheme = useTheme();
    theme.themes.selectedTheme = selectedTheme;


    const toggleNavbar = function (): void {
        setShowNavbar((s) => !s);
    };

    const updateSelectedTheme = function (themeName: string): void {
        setSelectedTheme((s) => (themeName));
    };

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
                        update: setSelectedTheme,
                    },
                } as MainContextProps
            }
        >
            {props.children}
        </MainContext.Provider>
    );
}
