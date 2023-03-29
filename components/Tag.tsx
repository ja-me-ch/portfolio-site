import React, { useContext } from "react";
import { alpha, CustomTheme, styled, useTheme } from "@mui/material";
import { MainContext } from "../contexts/MainContext";

const RootStyle = styled("div")(
    ({
        fontColor,
        bgColor,
        bgHoverColor,
    }: {
        fontColor: string;
        bgColor: string;
        bgHoverColor: string;
    }) => ({
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        borderRadius: "0.5rem",
        color: fontColor,
        backgroundColor: alpha(bgColor, 0.7),
        // boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.15)",
        padding: "0.2rem 0.6rem 0.3rem 0.6rem",
        transition: "all 0.6s ease",
        "&:hover": {
            borderRadius: "0.4rem",
            backgroundColor: alpha(bgHoverColor, 0.5),
            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
        },
    })
);

const TextSpan = styled("span")(() => ({
    fontSize: "0.8rem",
}));

const Tag = function ({ text }) {
    const { selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <RootStyle
            fontColor={
                theme.themes.themePalettes[selectedTheme.value].contrastText
            }
            bgColor={theme.themes.themePalettes[selectedTheme.value].light}
            bgHoverColor={theme.themes.themePalettes[selectedTheme.value].dark}
        >
            <TextSpan>{text}</TextSpan>
        </RootStyle>
    );
};

export default Tag;
