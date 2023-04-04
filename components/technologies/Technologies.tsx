import { CustomTheme, useTheme, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import glossary from "../../helper-functions/glossary";
import { ThemeContextProps } from "../../types/common";

interface IProps {
    theme: CustomTheme;
    selectedTheme: string;
    selectedMode: string;
}

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
    flexBasis: "50%",
}));

const DescriptionContainer = styled("div")(() => ({
    flexBasis: "50%",
}));

const RadioButtonStyle = styled("input")<ThemeContextProps>(
    ({
        theme,
        selectedTheme,
    }: {
        theme: CustomTheme;
        selectedTheme: string;
    }) => ({
        opacity: "0",
        position: "absolute",
        width: "0",
        ":checked+svg": {
            fill: theme.themes.themePalettes[selectedTheme].main,
            path: {
                fill: theme.themes.themePalettes[selectedTheme].main,
            },
        },
    })
);

function Technologies() {
    const { selectedMode, selectedTheme, selectedTech } =
        useContext(MainContext);
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
        selectedTech.update(e.target.value);
    };

    return (
        <RootStyle
            selectedTheme={selectedTheme.value}
            selectedMode={selectedMode.value}
        >
            <LogoContainer>
                <div>
                    <label htmlFor="nextjs">
                        <RadioButtonStyle
                            type="radio"
                            name="technologies"
                            value="nextjs"
                            id="nextjs"
                            onClick={handleOnClick}
                            selectedTheme={selectedTheme.value}
                        />
                        <nextjs.logo />
                    </label>

                    <label htmlFor="react">
                        <RadioButtonStyle
                            type="radio"
                            name="technologies"
                            value="react"
                            id="react"
                            onClick={handleOnClick}
                            selectedTheme={selectedTheme.value}
                        />
                        <react.logo />
                    </label>
                </div>

                <label htmlFor="nodejs">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="nodejs"
                        id="nodejs"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <nodejs.logo />
                </label>

                <label htmlFor="mongodb">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="mongodb"
                        id="mongodb"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <mongodb.logo />
                </label>

                <label htmlFor="javascript">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="javascript"
                        id="javascript"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <javascript.logo />
                </label>

                <label htmlFor="typescript">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="typescript"
                        id="typescript"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <typescript.logo />
                </label>
                <label htmlFor="html">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="html"
                        id="html"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <html.logo />
                </label>
                <label htmlFor="css">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="css"
                        id="css"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <css.logo />
                </label>

                <label htmlFor="materialui">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="materialui"
                        id="materialui"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <materialui.logo />
                </label>

                <label htmlFor="restapi">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="restapi"
                        id="restapi"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <restapi.logo />
                </label>

                <label htmlFor="graphql">
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value="graphql"
                        id="graphql"
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <graphql.logo />
                </label>
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
