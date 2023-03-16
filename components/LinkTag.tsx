import React from "react";
import { alpha, CustomTheme, styled } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    color: theme.themes.themePalettes[theme.themes.selectedTheme].contrastText,
    backgroundColor: alpha(
        theme.themes.themePalettes[theme.themes.selectedTheme].main,
        0.8
    ),
    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.15)",
    padding: "0.3rem 0.6rem 0.3rem 0.6rem",
    transition: "all 0.6s ease",
    "&:hover": {
        borderRadius: "0.4rem",
        backgroundColor: alpha(
            theme.themes.themePalettes[theme.themes.selectedTheme].dark,
            0.8
        ),
        boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.1)",
    },
}));

const TextSpan = styled("span")(() => ({
    fontSize: "1rem",
}));

interface IProps {
    text: string;
    link: string;
}

const LinkTag = function (props: IProps) {
    const { text, link } = props;
    return (
        <Link
            href={link}
            rel={text === "Read_ More" ? null : "noopener noreferrer"}
            target={text === "Read More" ? null : "_blank"}
        >
            <RootStyle>
                <TextSpan>{text}</TextSpan>
                {text !== "Read More" && (
                    <OpenInNewIcon
                        sx={{
                            fontSize: "1rem",
                            marginLeft: "0.2rem",
                        }}
                    />
                )}
            </RootStyle>
        </Link>
    );
};

export default LinkTag;
