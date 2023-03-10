import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { OffsetProps } from "../../types/common";
import { CustomTheme, styled, alpha } from "@mui/material";

const RootStyle = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        display: "grid",
        gridTemplateRows: `${offset}% 1fr ${offset}%`,
        width: "100%",
        maxHeight: "100vh",
        height: "100%",
        position: "absolute",
        backgroundColor: theme.themes.modes.light.light,
        overflow: "hidden",
    })
);

const Canvas = styled("div")<OffsetProps>(
    ({ offset, theme }: { offset: string; theme: CustomTheme }) => ({
        borderRadius: "0.2rem",
        borderTopRightRadius: "unset",
        padding: "1rem",
        height: "100%",
        maxHeight: `${100 - Number.parseInt(offset) * 2}vh`,
        background: theme.themes.modes[theme.palette.mode].main,
        boxShadow: "3px 5px 5px 5px rgba(0, 0, 0, 0.35)",
        overflow: "overlay",
        "&::-webkit-scrollbar": {
            width: "0px",
            transition: "all 1s ease",
        },
        "&::-webkit-scrollbar-track": {
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "rgba(26, 26, 26, 0.3)",
            borderRadius: "100vw",
            position: "relative",
        },
        "&:hover": {
            "&::-webkit-scrollbar": {
                width: "5px",
            },
        },
    })
);

const AccentBar = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    height: "1rem",
    position: "relative",
    backgroundColor: theme.themes[theme.themes.selectedTheme].main,
}));

const HorizontalSpacer = styled("div")(() => ({
    height: "100%",
    width: "100%",
}));

const VerticalSpacer = styled("div")(() => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column-reverse",
}));

const CenterColumns = styled("div")(({ offset }: { offset: string }) => ({
    display: "grid",
    gridTemplateColumns: `${offset}% 1fr ${offset}%`,
}));

const HorizontalWave = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    width: "100%",
    height: "12px",
    background: `linear-gradient(90deg, ${alpha(
        theme.themes[theme.themes.selectedTheme].light,
        0
    )} 0%, ${alpha(
        theme.themes[theme.themes.selectedTheme].light,
        0.4
    )} 0.01%, ${alpha(
        theme.themes[theme.themes.selectedTheme].light,
        1
    )} 60%, ${alpha(theme.themes[theme.themes.selectedTheme].light, 1)} 100%)`,
}));

const VerticalWave = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        position: "relative",
        top: `-${offset}vh`,
        width: "12px",
        height: "100vh",
        background: `linear-gradient(0deg, ${alpha(
            theme.themes[theme.themes.selectedTheme].light,
            0
        )} 0%, ${alpha(
            theme.themes[theme.themes.selectedTheme].light,
            0.4
        )} 0.01%, ${alpha(
            theme.themes[theme.themes.selectedTheme].light,
            1
        )} 60%, ${alpha(
            theme.themes[theme.themes.selectedTheme].light,
            1
        )} 100%)`,
    })
);

function DefaultLayout({ children }) {
    const verticalOffset = '5'
    const horizontalOffset = '5'
    return (
        <RootStyle offset={verticalOffset}>
            <VerticalSpacer>
                <HorizontalWave/>
            </VerticalSpacer>
            <CenterColumns offset={horizontalOffset}>
                <HorizontalSpacer></HorizontalSpacer>
                <Canvas offset={verticalOffset}>
                    <Navbar title={"Home"} />
                    {children}
                    <Footer />
                </Canvas>
                <HorizontalSpacer>
                    <VerticalWave offset={verticalOffset} />
                </HorizontalSpacer>
            </CenterColumns>
            <VerticalSpacer></VerticalSpacer>
        </RootStyle>
    );
}

export default DefaultLayout;
