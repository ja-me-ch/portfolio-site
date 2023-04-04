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
                // transition: "0.5s all linear",
                fill: alpha(themeColor, 1),
            }
        },
    })
);

const JavaScriptSvg = function () {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <SvgStyle
            width="100"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            modeColor={theme.themes.modes[selectedMode.value].contrastText}
            themeColor={theme.themes.themePalettes[selectedTheme.value].main}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <title>JavaScript</title> <desc>Javascript Logo Vector</desc>{" "}
                <defs> </defs>{" "}
                <g id="Page-1" stroke="none" strokeWidth="1">
                    {" "}
                    <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-420.000000, -7479.000000)"
                    >
                        {" "}
                        <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                        >
                            {" "}
                            <path
                                d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"
                                id="javascript-[#155]"
                            >
                                {" "}
                            </path>{" "}
                        </g>{" "}
                    </g>{" "}
                </g>{" "}
            </g>
        </SvgStyle>
    );
};

export default JavaScriptSvg;
