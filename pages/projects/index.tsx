import React from 'react';
import Link from "next/link";
import { styled } from "@mui/material";
import master from "../../helper-functions/previews/master";
import Project from "../../components/projects/Project";
import Preview from "../../interfaces/preview.interface";

const RootStyle = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
}));

const ProjectItem = styled("div")(() => ({
    backgroundColor: "#DEDEDE",
    height: "20rem",
}));

const previews = master.map((pv, index) => {
    return <Project preview={pv} key={index} index={index} />;
});

const ProjectsIndex: React.FC = function () {
    return <RootStyle>{previews}</RootStyle>;
};

export default ProjectsIndex
