import React from "react";
import { styled } from "@mui/material";
import Preview from "../../interfaces/preview.interface";
import Link from "next/link";
import LinkTag from "../LinkTag";
import Image from "next/image";
import Tag from "../Tag";

const RootStyle = styled("section")(({ index }: { index: number }) => ({
    display: "flex",
    flexDirection: "column",
    // marginBlock: "1.3rem",
    paddingBlock: '1.3rem',
    paddingInline: '2rem',
    alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end'
}));

const PreviewImageContainer = styled("div")(() => ({
    flexBasis: "30%",
}));

const ImageStyle = styled(Image)(() => ({
    objectFit: "cover",
    height: "100%",
    width: "100%",
}));

const ProjectPreviewContent = styled("div")(() => ({
    // border: '1px solid red',
    flexBasis: "70%",
    flexGrow: "1",
    marginBlock: "0",
    
}));

const Title = styled("h2")(({ index }: { index: number }) => ({
    marginTop: "0",
    marginBottom: "0.3rem",
    fontWeight: "600",
    letterSpacing: "1px",
    // textTransform: 'uppercase',
    fontSize: "2rem",
    fontFamily: "Roboto",
    textAlign: index % 2 === 0 ? "left" : "right",
    '&:hover': {
        textDecoration: 'underline'
    }
}));

const ProjectLinks = styled("div")(({ index }: { index: number }) => ({
    margin: "0.7rem 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
    // border: "1px solid red",
    gap: "0.5rem",
    paddingBottom: "0.5rem",
}));

const Description = styled("p")(() => ({
    fontSize: "1.1rem",
    fontWeight: "600",
}));

const TagsContainer = styled("div")(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.3rem',
    alignItems: 'center',
    // border: "1px solid red",
}));

const TagsSpan = styled("span")(() => ({
    textTransform: "uppercase",
    fontSize: "0.9rem",
    fontWeight: '600',
    marginRight: '0.1rem'
}));

interface IProps {
    preview: Preview;
    index: number;
}

const Project = function (props: IProps) {
    const { preview, index } = props;
    const { title, imageUrl, description, siteUrl, github, tags } = preview;

    const projectReadMore = <LinkTag text={"Read More"} link={"/"} />;
    const projectLinkSiteUrl = siteUrl ? (
        <LinkTag text={"Site"} link={siteUrl} />
    ) : null;
    const projectLinkGithub = <LinkTag text={"GitHub"} link={github} />;

    return (
        <RootStyle index={index} className={'project-preview'} aria-label={`${title} Preview`}>
            {/* <PreviewImageContainer>
                <ImageStyle src={imageUrl} alt={`Preview of ${title}`} />
            </PreviewImageContainer> */}
            <ProjectPreviewContent>
                <Title index={index} role={'heading'}>
                    <Link href={"/"} role={'link'}>{title}</Link>
                </Title>
                <ProjectLinks index={index}>
                    {/* CHANGE TO LIST */}
                    {/* {projectReadMore} */}
                    {projectLinkGithub}
                    {projectLinkSiteUrl}
                </ProjectLinks>
                <Description aria-label="Description">{preview.description}</Description>
                {/* {preview.github}
                {preview.imageUrl}
                {preview.siteUrl} */}
                {/* {preview.tags} */}
            </ProjectPreviewContent>
            <TagsContainer>
                <TagsSpan>Tags:</TagsSpan>
                {/* CHANGE TO LIST */}
                {tags.map((t, index) => {
                    return <Tag text={t} key={`${title}-${index}-${t}`} />
                })}
            </TagsContainer>
        </RootStyle>
    );
};

export default Project;
