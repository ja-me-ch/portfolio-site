import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { CustomTheme, styled } from "@mui/material";
import master from "../../helper-functions/previews/master";
import Project from "../../components/projects/Project";
import Preview from "../../interfaces/preview.interface";
import { MainContext } from "../../contexts/MainContext";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    maxWidth: `${theme.breakpoints.values["lg"]}px`,
    justifySelf: "center",
    transition: '1s all ease',
    ".project-preview:not(:last-child)": {
        borderBlockEnd: "5px solid",
        paddingBlockEnd: "1rem",
        borderImageSlice: "1",
        borderImageSource: `linear-gradient(45deg, ${
            theme.themes.themePalettes[theme.themes.selectedTheme].light
        },
        ${theme.themes.themePalettes[theme.themes.selectedTheme].main}, ${
            theme.themes.themePalettes[theme.themes.selectedTheme].dark
        })`,
        marginBottom: "2rem",
    },
}));

const ProjectItem = styled("div")(() => ({
    backgroundColor: "#DEDEDE",
    height: "20rem",
}));

const ProjectsIndex = function () {
    const { selectedTheme } = useContext(MainContext);

    const previews = master.map((pv, index) => {
        return (
            <Project preview={pv} key={`${pv.title}-${index}`} index={index} />
        );
    });
    // useEffect(() => {
    //     console.log("rerender projects index");
    // }, [selectedTheme.value]);
    return <RootStyle>
        {previews}
    </RootStyle>;
};

export default ProjectsIndex;
