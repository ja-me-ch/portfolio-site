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
        borderRadius: '0.2rem',
        background: alpha(theme.themes.themePalettes[selectedTheme].main, 0.15),
        color: theme.themes.modes[selectedMode].contrastText,
        marginBottom: "1rem",
    })
);

const LogoContainer = styled("div")(() => ({
    flexBasis: "50%",
    padding: '0.5rem',
    ['div:not(:last-child)']: {
        marginBottom: '0.5rem',
    }
}));

const DescriptionContainer = styled("div")(() => ({
    flexBasis: "50%",
}));

const Title = styled('h3')(() => ({

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
            filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))',
            fill: theme.themes.themePalettes[selectedTheme].main,
            path: {
                fill: theme.themes.themePalettes[selectedTheme].main,
            },
        },
    })
);

const LogoRow = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1rem',
    
}))

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

    const getLogos = function (logos: string[]) {
        return logos.map((l) => {
            const logo = glossary[l];
            return (
                <label htmlFor={l} key={`${l}-label`}>
                    <RadioButtonStyle
                        type="radio"
                        name="technologies"
                        value={l}
                        id={l}
                        onClick={handleOnClick}
                        selectedTheme={selectedTheme.value}
                    />
                    <logo.logo />
                </label>
            );
        });
    };

    return (
        <RootStyle
            selectedTheme={selectedTheme.value}
            selectedMode={selectedMode.value}
        >
            <LogoContainer>
                <LogoRow>{getLogos(['nextjs', 'react', 'materialui'])}</LogoRow>
                <LogoRow>{ getLogos(['javascript', 'typescript', 'html', 'css'])}</LogoRow>
                <LogoRow>{ getLogos(['nodejs', 'mongodb', 'graphql','restapi'])}</LogoRow>

                
            </LogoContainer>
            <DescriptionContainer>
                {selectedTech.value === null
                    ? <Title>The Web Developer Stack</Title>
                    : glossary[selectedTech.value].description}
            </DescriptionContainer>
        </RootStyle>
    );
}

export default Technologies;
