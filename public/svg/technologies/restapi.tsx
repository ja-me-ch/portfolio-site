import { useContext } from "react";
import { useTheme, styled, alpha, CustomTheme } from "@mui/material";
import { MainContext } from "../../../contexts/MainContext";

const SvgStyle = styled("svg")(
    ({ modeColor, themeColor }: { modeColor: string; themeColor: string }) => ({
        fill: alpha(modeColor, 0.3),
        path: {
            transition: "0.3s all ease-out",
        },
        g: {
            fill: alpha(modeColor, 0.3),
        },
        ":hover": {
            path: {
                fill: alpha(themeColor, 1),
            },
            // transition: "0.5s all linear",
        },
    })
);

const RestApiSvg = function () {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <SvgStyle
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            role="img"
            modeColor={theme.themes.modes[selectedMode.value].contrastText}
            themeColor={theme.themes.themePalettes[selectedTheme.value].main}
        >
            <title>REST API</title>
            <desc>REST API Logo Vector</desc>
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
                {" "}
                <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                <g>
                    {" "}
                    <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"></path>{" "}
                </g>{" "}
            </g>
        </SvgStyle>
    );
};

export default RestApiSvg;
