import { styled } from "@mui/material";

const NavBarSvgStyle = styled("svg")(() => ({
    // border: "4px solid black",
    // borderRadius: "0.3rem",
    cursor: "pointer",
    background: "transparent",
    width: "50",
    ".line": {
        transition:
            "y 100ms ease-in 100ms, rotate 100ms ease-in, opacity 0ms 100ms",
        // : "y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 0ms 300ms",
        transformOrigin: "center",
    },
    // ".top": {
    //     y: toggle ? "45" : "25",
    //     rotate: toggle ? "45deg" : "0",
    // },
    // ".bottom": {
    //     y: toggle ? "45" : "70",
    //     rotate: toggle ? "-45deg" : "0",
    // },
    // ".middle": {
    //     opacity: "0",
    // },
    // "&:hover": {
    //     ".line": {
    //         transition:
    //             "y 300ms ease-in, rotate 300ms ease-in 300ms, opacity 0ms 300ms",
    //     },
    //     ".top": {
    //         y: "45",
    //         rotate: "45deg",
    //     },
    //     ".bottom": {
    //         y: "45",
    //         rotate: "-45deg",
    //     },
    //     ".middle": {
    //         opacity: "0",
    //     },
    // },
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

const NavbarSvg = function ({toggle, modeColor} : {toggle: boolean, modeColor: string}) {
    const width = 80;
    const height = 10;
    const rx = 2;
    return (
        <NavBarSvgStyle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={50}
            fill={modeColor}
        >
            <rect
                width={width}
                height={height}
                x={10}
                y={20}
                rx={rx}
                className={`top line ${
                    toggle ? "top-toggle line-toggle" : ""
                }`}
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
