import React from "react";
import { styled } from "@mui/material";
import Link from "next/link";

const RootStyle = styled("div")(() => ({
    border: "1px solid red",
    borderRadius: '10px',
    padding: '0 0.5rem 0 0.5rem'
}));

interface IProps {
    text: string;
    link: string;
}

const LinkTag = function (props: IProps) {
    const { text, link } = props;
    return (
        <Link href={link}>
            <RootStyle><span>{text}</span></RootStyle>
        </Link>
    );
};

export default LinkTag;
