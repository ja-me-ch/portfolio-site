import { useContext } from "react";
import { CustomTheme, styled, useTheme } from "@mui/material";
import { MainContext } from "../../contexts/MainContext";

const NavBarSvgStyle = styled("svg")(() => ({
    cursor: "pointer",
    background: "transparent",
    width: "50",
    ".line": {
        transition:
            "y 100ms ease-in 100ms, rotate 100ms ease-in, opacity 0ms 100ms",
        transformOrigin: "center",
    },
    ".line-toggle": {
        transition:
            "y 100ms ease-in, rotate 100ms ease-in 300ms, opacity 0ms 100ms",
    },
    ".top-toggle": {
        y: "45",
        rotate: "45deg",
    },
    ".bottom-toggle": {
        y: "45",
        rotate: "-45deg",
    },
    ".middle-toggle": {
        opacity: "0",
    },
}));

const NavbarSvg = function ({ toggle }: { toggle: boolean }) {
    const { selectedMode } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    const width = 80;
    const height = 10;
    const rx = 2;
    return (
        <NavBarSvgStyle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={50}
            fill={theme.themes.modes[selectedMode.value].contrastText}
        >
            <rect
                width={width}
                height={height}
                x={10}
                y={20}
                rx={rx}
                className={`top line ${toggle ? "top-toggle line-toggle" : ""}`}
            ></rect>
            <rect
                width={width}
                height={height}
                x={10}
                y={45}
                rx={rx}
                className={`middle line ${
                    toggle ? "middle-toggle line-toggle" : ""
                }`}
            ></rect>
            <rect
                width={width}
                height={height}
                x={10}
                y={70}
                rx={rx}
                className={`bottom line ${
                    toggle ? "bottom-toggle line-toggle" : ""
                }`}
            ></rect>
        </NavBarSvgStyle>
    );
};

export default NavbarSvg;
