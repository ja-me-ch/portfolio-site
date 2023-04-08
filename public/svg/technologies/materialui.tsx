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
            }
        },
    })
);

const MaterialUiSvg = function () {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <SvgStyle
            // fill="#000000"
            viewBox="0 0 24 24"
            width="100"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            modeColor={theme.themes.modes[selectedMode.value].contrastText}
            themeColor={theme.themes.themePalettes[selectedTheme.value].main}
        >
                <title>Material UI</title>
                <desc>Material UI Logo Vector</desc>
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
                <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
            </g>
        </SvgStyle>
    );
};

export default MaterialUiSvg;
