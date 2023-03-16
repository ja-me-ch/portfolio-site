import { styled, useTheme, CustomTheme } from "@mui/material";
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "inline flex",
    // aspectRatio: '1 / 1',
    // border: "1px solid red",
    // display: 'inline',
    // borderRadius: '50%',
    width: "100%",
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
    // width: '100%',
    aspectRatio: "1 / 1",
    // margin: 'auto'
}));

const CircleContents = styled("div")(() => ({
    width: "100%",
    height: "100%",
    position: "relative",
    // border: "1px solid green",
}));

const Shape = styled("div")(({ prop }: { prop?: ICircleProps }) => ({
    transformOrigin: "center",
    backgroundColor: prop?.color ?? "red",
    position: "absolute",
    margin: "auto",
    padding: "0",
    top: prop ? `${prop.offset[2]}%` : "0",
    right: prop ? `${prop.offset[3]}%` : "0",
    bottom: prop ? `${prop.offset[0]}%` : "0",
    left: prop ? `${prop.offset[1]}%` : "0",
    border: "2px solid white",
    width: "23%",
    rotate: "45deg",
    // transform: 'translateX(-50%) translateY(-50%)',
    aspectRatio: "1 / 1",
    ":focus": {
        animation: "elastic-spin 1s ease-in-out",
    },
    ":active": {
        animation: "none",
    },
    "@keyframes elastic-spin": {
        "0%": {
            transform: "rotate(0deg) scale(1)",
        },
        "50%": {
            transform: "rotate(360deg) scale(1.2)",
        },
        "100%": {
            transform: "rotate(720deg) scale(1)",
        },
    },
}));

interface ICircleProps {
    offset: number[];
    color: string;
}

const ThemeSwitcher = function () {
    const { selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();

    const handleOnClick = function (e) {
        console.log(e.target.id);
        selectedTheme.update(e.target.id);
    };

    const prop: ICircleProps[] = [
        {
            offset: [0, 0, 40, 0],
            color: "#000",
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
                    <Shape prop={prop[0]} onClick={handleOnClick} id={"mode"} />
                    <Shape
                        tabIndex={999}
                        prop={prop[1]}
                        onClick={handleOnClick}
                        id={"aquamarine"}
                    />
                    <Shape
                        tabIndex={999}
                        prop={prop[2]}
                        onClick={handleOnClick}
                        id={"rozenQueen"}
                    />
                    <Shape
                        tabIndex={999}
                        prop={prop[3]}
                        onClick={handleOnClick}
                        id={"orangePrincess"}
                    />
                </CircleContents>
            </CircleContainer>
        </RootStyle>
    );
};

export default ThemeSwitcher;
