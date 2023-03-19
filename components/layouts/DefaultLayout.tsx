import React, { useEffect, useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { OffsetProps } from "../../types/common";
import { CustomTheme, styled, useMediaQuery } from "@mui/material";
import { MainContext } from "../../contexts/MainContext";

const RootStyle = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        display: "grid",
        gridTemplateRows: `${offset}% 1fr ${offset}%`,
        width: "100%",
        maxHeight: "100vh",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        backgroundColor: theme.themes.modes.light.dark,
        [theme.breakpoints.down("sm")]: {
            gridTemplateRows: "1fr",
            // maxWidth: "100dvw",
            overflow: "scroll",
        },
    })
);

const Canvas = styled("div")<OffsetProps>(
    ({ offset, theme }: { offset: string; theme: CustomTheme }) => ({
        display: "flex",
        flexDirection: "column",
        borderRadius: "0.2rem",
        borderTopRightRadius: "unset",
        color: theme.themes.modes[theme.themes.selectedMode].contrastText,
        // height: "100%",
        maxHeight: `${100 - Number.parseInt(offset) * 2}vh`,
        background: theme.themes.modes[theme.themes.selectedMode].main,
        boxShadow: "3px 5px 5px 5px rgba(0, 0, 0, 0.35)",
        // zIndex: "0",
        transition: '1s all ease',
        [theme.breakpoints.down("sm")]: {
            maxHeight: "unset",
        },
    })
);

const HorizontalSpacer = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        position: 'relative',
        top: `-${offset}vh`,
        height: "100vh",
        width: "100%",
        maskImage: "linear-gradient(to bottom, black 40%, transparent 110%)",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    })
);

const VerticalSpacer = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column-reverse",
    maskImage: "linear-gradient(to left, black 40%, transparent 110%)",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const CenterColumns = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        display: "grid",
        gridTemplateColumns: `${offset}% 1fr ${offset}%`,
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
        },
    })
);

const HorizontalWave = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    width: "100%",
    height: "12px",
    // zIndex: "10",
    transition: "all 2s ease",
    transformOrigin: "right",
    background: theme.themes.themePalettes[theme.themes.selectedTheme].light,
    // background: `linear-gradient(90deg, ${alpha(
    //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
    //     0
    // )} 0%, ${alpha(
    //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
    //     0.4
    // )} 0.01%, ${alpha(
    //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
    //     1
    // )} 60%, ${alpha(
    //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
    //     1
    // )} 100%)`,
}));

const VerticalWave = styled("div")<OffsetProps>(
    ({ theme, offset }: { theme: CustomTheme; offset: string }) => ({
        position: "relative",
        // top: `-${offset}vh`,
        width: "12px",
        height: "100%",
        zIndex: "5",
        transition: "all 2s ease",
        transformOrigin: "top",
        background:
            theme.themes.themePalettes[theme.themes.selectedTheme].light,
        // background: `linear-gradient(0deg, ${alpha(
        //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
        //     0
        // )} 0%, ${alpha(
        //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
        //     0.4
        // )} 0.01%, ${alpha(
        //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
        //     1
        // )} 60%, ${alpha(
        //     theme.themes.themePalettes[theme.themes.selectedTheme].light,
        //     1
        // )} 100%)`,
    })
);

const ChildrenContainer = styled("div")(
    ({ theme }: { theme: CustomTheme }) => ({
        display: 'flex',
        justifyContent: 'center',
        padding: "1rem",
        height: "100%",
        color: theme.themes.modes[theme.palette.mode].contrastText,
        // maxWidth: '1280px',
        // margin: 'auto',
        // overflow: "scroll",
        // border: '1px solid blue',
        // overflowY: 'auto',
        overflow: "overlay",
        overflowX: "hidden",
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
        [theme.breakpoints.down("sm")]: {
            overflow: "hidden",
        },
    })
);

function DefaultLayout({ children }) {
    const { selectedTheme, themeMode } = useContext(MainContext);
    const useDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    if (useDarkMode === false && themeMode.value === 'light') themeMode.toggle();
    const verticalOffset = "4";
    const horizontalOffset = "4";
    // children.props = {s: 's'}
    // useEffect(() => {
    //     console.log('useeffect!')
    // }, [selectedTheme.value]);
    return (
        <RootStyle offset={verticalOffset}>
            <VerticalSpacer>
                <HorizontalWave />
            </VerticalSpacer>
            <CenterColumns offset={horizontalOffset}>
                <HorizontalSpacer></HorizontalSpacer>
                <Canvas offset={verticalOffset}>
                    <Navbar />
                    <ChildrenContainer>{children}</ChildrenContainer>
                    <Footer />
                </Canvas>
                <HorizontalSpacer offset={verticalOffset}>
                    <VerticalWave offset={verticalOffset} />
                </HorizontalSpacer>
            </CenterColumns>
            <VerticalSpacer></VerticalSpacer>
        </RootStyle>
    );
}

export default DefaultLayout;
