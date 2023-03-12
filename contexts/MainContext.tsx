import React, { createContext, useState } from "react";
import { useTheme } from "@mui/material";

interface MainContextProps {
    showNavbar: {
        value: boolean;
        toggle: () => void;
    };
}

export const MainContext = createContext<MainContextProps | undefined>(undefined);

export function MainContextProvider(props) {
    const [showNavbar, setShowNavbar] = useState(true);

    const toggleNavbar = function () {
        setShowNavbar((s) => !s);
    };

    return (
        <MainContext.Provider
            value={
                {
                    showNavbar: {
                        value: showNavbar,
                        toggle: toggleNavbar,
                    },
                } as MainContextProps
            }
        >
            {props.children}
        </MainContext.Provider>
    );
}
