import React from "react";
import { styled } from "@mui/material";
import Preview from "../../interfaces/preview.interface";
import Link from "next/link";
import LinkTag from "../LinkTag";
import Image from "next/image";

const RootStyle = styled("div")(({ index }: { index: number }) => ({
    display: "flex",
    flexDirection: index % 2 ? "row-reverse" : "row",
    marginBlock: "1.5rem",
}));

const PreviewImageContainer = styled("div")(() => ({
    flexBasis: '30%',
}));

const ImageStyle = styled(Image)(() => ({
    objectFit: 'cover',
    height: '100%',
    width: '100%',
}))

const ProjectPreviewContent = styled("div")(() => ({
    // border: '1px solid red',
    flexBasis: '70%',
    flexGrow: '1',
    marginBlock: "0",
}));

const Title = styled("h3")(({ index }: { index: number }) => ({
    marginTop: "0",
    marginBottom: "0.3rem",
    fontWeight: "600",
    letterSpacing: "1px",
    // textTransform: 'uppercase',
    fontSize: "2rem",
    fontFamily: "Roboto",
    textAlign: index % 2 === 0 ? "left" : "right",
}));

const ProjectLinks = styled("div")(({ index }: { index: number }) => ({
    margin: '0.7rem 0',
    display: "flex",
    flexDirection: "row",
    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
    // border: "1px solid red",
    gap: "0.5rem",
    paddingBottom: "0.5rem",
}));

const Description = styled('p')(() => ({
    fontSize: '1.1rem',
    fontWeight: '600',
}))

interface IProps {
    preview: Preview;
    index: number;
}

const Project = function (props: IProps) {
    const { preview, index } = props;
    const { title, imageUrl, description, siteUrl, github, tags } = preview;

    const projectReadMore = <LinkTag text={"Read More"} link={"/"} />;
    LinkTag;
    const projectLinkSiteUrl = siteUrl ? (
        <LinkTag text={"Site"} link={siteUrl} />
    ) : null;

    const projectLinkGithub = <LinkTag text={"GitHub"} link={github} />;

    return (
        <RootStyle index={index}>
            {/* <PreviewImageContainer>
                <ImageStyle src={imageUrl} alt={`Preview of ${title}`} />
            </PreviewImageContainer> */}
            <ProjectPreviewContent>
                <Title index={index}>
                    <Link href={'/'}>{title}</Link>
                </Title>
                <ProjectLinks index={index}>
                    {projectReadMore}
                    {projectLinkGithub}
                    {projectLinkSiteUrl}
                </ProjectLinks>
                <Description>
                {preview.description}
                </Description>
                {/* {preview.github}
                {preview.imageUrl}
                {preview.siteUrl} */}
                {/* {preview.tags} */}
            </ProjectPreviewContent>
        </RootStyle>
    );
};

export default Project;
