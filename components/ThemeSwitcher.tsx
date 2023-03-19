import { styled, useTheme, CustomTheme } from "@mui/material";
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "inline flex",
    // aspectRatio: '1 / 1',
    // border: "1px solid red",
    // display: 'inline',
    // borderRadius: '50%',
    minWidth: '70px',
    margin: "0.5rem",
    [theme.breakpoints.down("sm")]: {
        visibility: "hidden",
    },
}));

const CircleContainer = styled("div")(() => ({
    // flexGrow: '1',
    // display: 'relative',
    borderRadius: "50%",
    // border: "1px solid blue",
    aspectRatio: "1 / 1",
    // margin: 'auto'
}));

const CircleContents = styled("div")(() => ({
    width: "100%",
    height: "100%",
    position: "relative",
    // border: "1px solid green",
}));

const Shape = styled("div")<ICircleProps>(
    ({
        prop,
        theme,
    }: {
        prop?: { color: string; offset: number[] };
        theme: CustomTheme;
    }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transformOrigin: "center",
        backgroundColor: prop?.color ?? "red",
        position: "absolute",
        margin: "auto",
        padding: "0",
        top: prop ? `${prop.offset[2]}%` : "0",
        right: prop ? `${prop.offset[3]}%` : "0",
        bottom: prop ? `${prop.offset[0]}%` : "0",
        left: prop ? `${prop.offset[1]}%` : "0",
        border:
            theme.themes.selectedMode === "light"
                ? `2px solid ${theme.themes.modes.light.contrastText}`
                : `2px solid ${theme.themes.modes.dark.contrastText}`,
        width: "23%",
        overflow: "hidden",
        rotate: "45deg",
        // transform: 'translateX(-50%) translateY(-50%)',
        aspectRatio: "1 / 1",
        ":focus": {
            animation: "elastic-spin 1s ease-out",
        },
        ":active": {
            animation: "none",
        },
        "@keyframes elastic-spin": {
            "0%": {
                transform: "rotate(0deg) scale(1)",
            },
            "50%": {
                transform: "rotate(180deg) scale(1.1)",
            },
            "100%": {
                transform: "rotate(360deg) scale(1)",
            },
        },
    })
);

interface ICircleProps {
    tabIndex?: number;
    prop: { offset: number[]; color: string };
    theme?: CustomTheme;
}

const ThemeSwitcher = function () {
    const { selectedTheme, themeMode } = useContext(MainContext);
    const theme: CustomTheme = useTheme();

    const handleOnClick = function (e) {
        if (
            Object.getOwnPropertyNames(theme.themes.themePalettes).includes(
                e.target.id
            )
        ) {
            selectedTheme.update(e.target.id);
        } else {
            themeMode.toggle();
        }
    };

    const prop = [
        {
            offset: [0, 0, 40, 0],
            color:
                theme.themes.selectedMode === "light"
                    ? `2px solid ${theme.themes.modes.light.contrastText}`
                    : `2px solid ${theme.themes.modes.dark.contrastText}`,
        },
        {
            offset: [40, 0, 0, 0],
            color: theme.themes.themePalettes["aquamarine"].main,
        },
        {
            offset: [0, 0, 0, 40],
            color: theme.themes.themePalettes["rozenQueen"].main,
        },
        {
            offset: [0, 40, 0, 0],
            color: theme.themes.themePalettes["orangePrincess"].main,
        },
    ];
    return (
        <RootStyle>
            <CircleContainer>
                <CircleContents>
                    <Shape
                        tabIndex={-1}
                        prop={prop[0]}
                        onClick={handleOnClick}
                        id={"mode"}
                        key={"mode"}
                    >
                        {themeMode.value === "light" ? (
                            <ModeNightIcon
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    rotate: "-30deg",
                                }}
                            />
                        ) : (
                            <LightModeIcon
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    rotate: "-45deg",
                                }}
                            />
                        )}
                    </Shape>
                    <Shape
                        tabIndex={-1}
                        prop={prop[1]}
                        onClick={handleOnClick}
                        id={"aquamarine"}
                        key={"aquamarine"}
                    />
                    <Shape
                        tabIndex={-1}
                        prop={prop[2]}
                        onClick={handleOnClick}
                        id={"rozenQueen"}
                        key={"rozenQueen"}
                    />
                    <Shape
                        tabIndex={-1}
                        prop={prop[3]}
                        onClick={handleOnClick}
                        id={"orangePrincess"}
                        key={"orangePrincess"}
                    />
                </CircleContents>
            </CircleContainer>
        </RootStyle>
    );
};

export default ThemeSwitcher;
