import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { CustomTheme, styled, useTheme } from "@mui/material";
import master from "../../helper-functions/previews/master";
import Project from "../../components/projects/Preview";
import Preview from "../../interfaces/preview.interface";
import { MainContext } from "../../contexts/MainContext";
import { ThemeContextProps } from "../../types/common";
import Head from "next/head";

const RootStyle = styled("div")<ThemeContextProps>(
    ({
        theme,
        selectedTheme,
        selectedMode,
    }: {
        theme: CustomTheme;
        selectedTheme: string;
        selectedMode: string;
    }) => ({
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
        color: theme.themes.modes[selectedMode].contrastText,
        maxWidth: `${theme.breakpoints.values["lg"]}px`,
        justifySelf: "center",
        transition: "1s all ease",
        ".project-preview:not(:last-child)": {
            borderBlockEnd: "5px solid",
            paddingBlockEnd: "1rem",
            borderImageSlice: "1",
            borderImageSource: `linear-gradient(45deg, ${theme.themes.themePalettes[selectedTheme].light},
        ${theme.themes.themePalettes[selectedTheme].main}, ${theme.themes.themePalettes[selectedTheme].dark})`,
            marginBottom: "2rem",
        },
    })
);

const ProjectItem = styled("div")(() => ({
    backgroundColor: "#DEDEDE",
    height: "20rem",
}));

const ProjectsIndex = function () {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();

    const previews = master.map((pv, index) => {
        return (
            <Project preview={pv} key={`${pv.title}-${index}`} index={index} />
        );
    });
    // useEffect(() => {
    //     console.log("rerender projects index");
    // }, [selectedTheme.value]);
    return (
        <>
            <Head>
                <title>Projects | Jacky C.</title>
            </Head>
            <RootStyle
                selectedTheme={selectedTheme.value}
                selectedMode={selectedMode.value}
            >
                {previews}
            </RootStyle>
        </>
    );
};

export default ProjectsIndex;
