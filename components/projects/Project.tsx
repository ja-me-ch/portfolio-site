import React from "react";
import { styled } from "@mui/material";
import Preview from "../../interfaces/preview.interface";
import Image from "next/image";
import LinkTag from "../LinkTag";

const RootStyle = styled("div")(({ index }: { index: number }) => ({
    display: "flex",
    flexDirection: index % 2 ? "row-reverse" : "row",
    marginBlock: "1rem",
}));

const PreviewImageContainer = styled("div")(() => ({}));

const ProjectPreviewContent = styled("div")(() => ({
    // border: '1px solid red',
    marginBlock: "0",
}));

const Title = styled("h3")(() => ({
    marginTop: "0",
    marginBottom: "0.3rem",
    fontWeight: "600",
}));

const ProjectLinks = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    border: "1px solid red",
    gap: '0.5rem',
}));

interface IProps {
    preview: Preview;
    index: number;
}

const Project = function (props: IProps) {
    const { preview, index } = props;
    const { title, imageUrl, description, siteUrl, github, tags } = preview;
    // console.log(props);

    const projectReadMore = <LinkTag text={"Read More"} link={"/"} />;
    LinkTag;
    const projectLinkSiteUrl = siteUrl ? (
        <LinkTag text={"Site"} link={siteUrl} />
    ) : null;

    const projectLinkGithub = <LinkTag text={"GitHub"} link={github} />;

    return (
        <RootStyle index={index}>
            <PreviewImageContainer>
                {/* <Image src={''} alt={`Preview of ${title}`} /> */}
            </PreviewImageContainer>
            <ProjectPreviewContent>
                <Title>{title}</Title>
                <ProjectLinks>
                    {projectReadMore}
                    {projectLinkSiteUrl}
                    {projectLinkGithub}
                </ProjectLinks>
                {preview.description}
                {preview.github}
                {preview.imageUrl}
                {preview.siteUrl}
                {preview.tags}
            </ProjectPreviewContent>
        </RootStyle>
    );
};

export default Project;
