import React, { createContext, useState } from "react";
import { useTheme } from "@mui/material";

interface MainContextProps {}

export const MainContext = createContext<MainContextProps | undefined>(
    undefined
);

export function MainContextProvider(props) {
    return (
        <MainContext.Provider value={
            {} as MainContextProps
        }>
            {props.children}
        </MainContext.Provider>
    );
}
