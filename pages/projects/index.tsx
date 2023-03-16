import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { styled } from "@mui/material";
import master from "../../helper-functions/previews/master";
import Project from "../../components/projects/Project";
import Preview from "../../interfaces/preview.interface";
import { MainContext } from "../../contexts/MainContext";

const RootStyle = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    // height: '100%',
    // border: '1px solid red',
    overflow: "hidden",
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
    useEffect(() => {
        console.log("rerender projects index");
    }, [selectedTheme.value]);
    return <RootStyle>{previews}</RootStyle>;
};

export default ProjectsIndex;
