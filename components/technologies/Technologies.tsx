import { CustomTheme, useTheme, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import glossary from "../../helper-functions/glossary";
import { ThemeContextProps } from "../../types/common";

const RootStyle = styled("div")<ThemeContextProps>(
    ({
        theme,
        selectedTheme,
        selectedMode,
    }: {
        theme: CustomTheme;
        selectedMode: string;
        selectedTheme: string;
    }) => ({
        background: alpha(theme.themes.themePalettes[selectedTheme].main, 0.15),
        color: theme.themes.modes[selectedMode].contrastText,
        marginBottom: "1rem",
    })
);

function Technologies() {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const { nextjs, react, nodejs, mongodb, javascript, typescript } = glossary;
    const theme: CustomTheme = useTheme();
    return (
        <RootStyle
            selectedTheme={selectedTheme.value}
            selectedMode={selectedMode.value}
        >
            <nextjs.logo />
            <react.logo />
            <nodejs.logo />
            <mongodb.logo />
            <javascript.logo />
            <typescript.logo />
            {/* <div><span>{NextJs.description}</span></div> */}
        </RootStyle>
    );
}

export default Technologies;
