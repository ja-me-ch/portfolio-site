import React from "react";
import { alpha, CustomTheme, styled } from "@mui/material";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: "0.5rem",
    color: theme.themes[theme.themes.selectedTheme].contrastText,
    backgroundColor: alpha(theme.themes[theme.themes.selectedTheme].light, 0.9),
    // boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.15)",
    padding: "0.2rem 0.6rem 0.3rem 0.6rem",
    transition: "all 0.6s ease",
    "&:hover": {
        borderRadius: "0.4rem",
        backgroundColor: alpha(
            theme.themes[theme.themes.selectedTheme].dark,
            0.7
        ),
         boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
    },
}));

const TextSpan = styled("span")(() => ({
    fontSize: "0.8rem",
}));

const Tag = function ({ text }) {
    return <RootStyle><TextSpan>{text}</TextSpan></RootStyle>;
};

export default Tag;
