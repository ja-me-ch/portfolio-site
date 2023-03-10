import React, { useEffect } from "react";
import { CustomTheme, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { WaveProps } from "../../types/common";

const RootStyle = styled("div")(() => ({
    // border: "1px solid red",
}));

const Title = styled("h1")(() => ({
    margin: "0 0 0.5rem 0",
    paddingBottom: "0.3rem",
    textAlign: "right",
    paddingRight: "1rem",
    fontSize: "3rem",
    borderBottom: "2px solid #000",
}));

const Nav = styled("div")(() => ({
    display: "flex",
    flexDirection: "row-reverse",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
}));

const NavItem = styled(Link)(() => ({
    // border: "1px solid blue",
    position: "relative",
    borderBottom: "2px solid #000",
    borderRight: "2px solid #000",
    backgroundColor: "#e8e8e8",
    marginLeft: "0.5rem",
    padding: "0.3rem",
    fontSize: "1.5rem",
    borderRadius: "0.3rem",
    transition: "all 0s linear",
    overflow: "hidden",
    "&:hover": {
        borderBottom: "2px solid #1C74BD",
        borderRight: "2px solid #1C74BD",
        ".wave": {
            top: "5px",
            opacity: "25%",
        },
    },
}));

const Wave = styled("span")<WaveProps>(
    ({
        duration,
        scale,
        theme,
    }: {
        duration: number;
        scale: number[];
        theme: CustomTheme;
    }) => ({
        position: "absolute",
        top: "15px",
        left: "-55%",
        height: "12rem",
        width: "12rem",
        backgroundColor: theme.themes[theme.themes.selectedTheme].main,
        opacity: "20%",
        borderRadius: "43%",
        border: "1px solid white",
        transition: "all 1s ease-in-out",
        animation: `waves ${duration ? duration : "5"}s infinite linear`,
        "@keyframes waves": {
            "0%": {
                transform: `rotate(0deg) scale(${
                    scale ? scale[0] : 1
                }) translateX(-5%)`,
            },
            "25%": {
                transform: `rotate(90deg) scale(${
                    scale ? scale[1] : 0.95
                }) translateX(5%)`,
            },
            "50%": {
                transform: `rotate(180deg) scale(${
                    scale ? scale[2] : 1
                }) translateX(-5%)`,
            },
            "75%": {
                transform: `rotate(270deg) scale(${
                    scale ? scale[3] : 0.9
                }) translateX(5%)`,
            },
            "100%": {
                transform: `rotate(360deg) scale(${
                    scale ? scale[0] : 1
                }) translateX(-5%)`,
            },
        },
    })
);

function Navbar(props: { title: string }) {
    const { title } = props;

    const params = useRouter();
    // console.log(params);
    let rndWaveDuration = 10;
    let rndWaveScales = [1, 0.95, 1, 0.95];

    useEffect(() => {
        const waveDuration = [8, 12];
        const waveScale = [0.85, 1];
        const getRandomNumber = function (array): number[] | number {
            // const minNum = array[0];
            // const maxNum = array[1];

            const rnd = function (array: number): number {
                return Math.random() * (array[1] - array[0]) + array[0];
            };
            if (
                Number.isSafeInteger(array[0]) &&
                Number.isSafeInteger(array[1])
            )
                return Math.floor(rnd(array));
            return [rnd(array), rnd(array), rnd(array), rnd(array)];
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
        rndWaveDuration = getRandomNumber(waveDuration) as number;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        rndWaveScales = getRandomNumber(waveScale) as number[];
    }, []);

    return (
        <RootStyle>
            <Title>{title}</Title>
            <Nav>
                <NavItem className="NavItem" href={"/"}>
                    Home
                    <Wave
                        className="wave"
                        duration={rndWaveDuration}
                        scale={rndWaveScales}
                    />
                </NavItem>
                <NavItem className="NavItem" href={"/projects"}>
                    Projects
                    <Wave
                        className="wave"
                        duration={rndWaveDuration}
                        scale={rndWaveScales}
                    />
                </NavItem>
                <NavItem className="NavItem" href={"/"}>
                    <div>
                        About
                        <Wave
                            className="wave"
                            duration={rndWaveDuration}
                            scale={rndWaveScales}
                        />
                    </div>
                </NavItem>
                <NavItem className="NavItem" href={"/"}>
                    Glossary
                    <Wave
                        className="wave"
                        duration={rndWaveDuration}
                        scale={rndWaveScales}
                    />
                </NavItem>
            </Nav>
        </RootStyle>
    );
}

export default Navbar;
