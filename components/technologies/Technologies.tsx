import { CustomTheme, useTheme, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext, useState } from "react";
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
        display: "flex",
        flexDirection: "row",
        background: alpha(theme.themes.themePalettes[selectedTheme].main, 0.15),
        color: theme.themes.modes[selectedMode].contrastText,
        marginBottom: "1rem",
    })
);

const LogoContainer = styled("div")(() => ({
    flexBasis: "60%",
}));

const DescriptionContainer = styled("div")(() => ({}));

const LogoWrapper = styled("span")(() => ({
    svg: {
        fill: "red",
    },
}));

function Technologies() {
    const { selectedMode, selectedTheme, selectedTech } = useContext(MainContext);
    const {
        nextjs,
        react,
        nodejs,
        mongodb,
        javascript,
        typescript,
        html,
        css,
        materialui,
        restapi,
        graphql,
    } = glossary;
    const theme: CustomTheme = useTheme();

    const handleOnClick = function (e) {
        const getSvgId = function (e) {
            if (e.target.tagName === "path") return e.target.ownerSVGElement.id
                else return e.nativeEvent.target.id
        }

        const svgId = getSvgId(e);

        selectedTech.update(svgId);
        
    };

    return (
        <RootStyle
            selectedTheme={selectedTheme.value}
            selectedMode={selectedMode.value}
        >
            <LogoContainer>
                <LogoWrapper onClick={handleOnClick}>
                    <nextjs.logo />
                </LogoWrapper>
                <react.logo />
                <nodejs.logo />
                <mongodb.logo />
                <javascript.logo />
                <typescript.logo />
                <html.logo />
                <css.logo />
                <materialui.logo />
                <restapi.logo />
                <graphql.logo />
            </LogoContainer>
            <DescriptionContainer>
                {selectedTech.value === null
                    ? "The Web Developer Stack"
                    : glossary[selectedTech.value].description}
            </DescriptionContainer>
        </RootStyle>
    );
}

export default Technologies;
