import { useContext } from "react";
import { useTheme, styled, alpha, CustomTheme } from "@mui/material";
import { MainContext } from "../../../contexts/MainContext";

const SvgStyle = styled("svg")(
    ({ modeColor, themeColor }: { modeColor: string; themeColor: string }) => ({
        fill: alpha(modeColor, 0.3),
        path: {
            transition: "0.3s all ease-out",
        },
        ":hover": {
            // transition: "0.5s all linear",
            fill: alpha(themeColor, 1),
        },
    })
);

const NodeJsSvg = function () {
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <SvgStyle
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            modeColor={theme.themes.modes[selectedMode.value].contrastText}
            themeColor={theme.themes.themePalettes[selectedTheme.value].main}
        >
            <title>Node.js</title>
            <desc>Node.js Logo Vector</desc>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="5151e0c8492e5103c096af88a51f17e3">
                    {" "}
                    <path
                        display="inline"
                        d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241 c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128 c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0 l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716 c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99 l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747 c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287 c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526 c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367 c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104 c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35 c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576 c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695 c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702 c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z"
                    >
                        {" "}
                    </path>{" "}
                </g>{" "}
            </g>
        </SvgStyle>
    );
};

export default NodeJsSvg;
