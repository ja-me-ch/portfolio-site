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
        selectedMode,
    }: {
        prop: { color: string; offset: number[] };
        theme: CustomTheme;
        selectedMode: string;
    }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transformOrigin: "center",
        backgroundColor: prop.color,
        position: "absolute",
        margin: "auto",
        padding: "0",
        top: prop ? `${prop.offset[2]}%` : "0",
        right: prop ? `${prop.offset[3]}%` : "0",
        bottom: prop ? `${prop.offset[0]}%` : "0",
        left: prop ? `${prop.offset[1]}%` : "0",
        border:
            selectedMode === "light"
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
    // tabIndex?: number;
    prop: { offset: number[]; color: string };
    theme?: CustomTheme;
    selectedMode?: string;
}

const ThemeSwitcher = function () {
    const { selectedTheme, selectedMode } = useContext(MainContext);
    const theme: CustomTheme = useTheme();

    const handleOnClick = function (e) {
        if (
            Object.getOwnPropertyNames(theme.themes.themePalettes).includes(
                e.target.id
            )
        ) {
            selectedTheme.update(e.target.id);
        } else {
            selectedMode.toggle();
        }
    };

    const props = [
        {
            offset: [0, 0, 40, 0],
            palette: "mode",
        },
        {
            offset: [40, 0, 0, 0],
            palette: "aquamarine",
        },
        {
            offset: [0, 0, 0, 40],
            palette: "rozenQueen",
        },
        {
            offset: [0, 40, 0, 0],
            palette: "orangePrincess",
        },
    ];
    
    const shapes = props.map((p) => {
        return (
            <Shape
                tabIndex={-1}
                prop={{
                    color:
                        p.palette !== "mode"
                            ? theme.themes.themePalettes[p.palette].main
                            : selectedMode.value === "dark"
                            ? theme.themes.modes["dark"].main
                            : theme.themes.modes["light"].main,
                    offset: p.offset,
                }}
                onClick={handleOnClick}
                id={p.palette}
                key={`${p.palette}-shape`}
                selectedMode={selectedMode.value}
            >
                {p.palette === "mode" ? (
                    selectedMode.value === "light" ? (
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
                    )
                ) : null}
            </Shape>
        );
    });
    return (
        <RootStyle>
            <CircleContainer>
                <CircleContents>
                    {shapes}
                </CircleContents>
            </CircleContainer>
        </RootStyle>
    );
};

export default ThemeSwitcher;
