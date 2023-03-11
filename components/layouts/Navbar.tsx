import React, { useEffect } from "react";
import { CustomTheme, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { WaveProps, NavItemProps } from "../../types/common";
import { lighten } from "@mui/material";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    position: "sticky",
    top: "0",
    backgroundColor: theme.themes.modes[theme.palette.mode].main,
}));

const Title = styled("h1")(({ theme }) => ({
    margin: "0",
    // paddingBottom: "0rem",
    textAlign: "right",
    paddingRight: "1rem",
    fontSize: "4rem",
    borderBottom: "2px solid #000",
    fontWeight: "400",
    fontFamily: "Yrsa, Roboto",
    [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
    },
}));

const Nav = styled("div")(({ theme }) => ({
    display: "flex",
    // justifyContent: 'center',
    flexDirection: "row-reverse",
    paddingRight: "1rem",
    marginTop: "1rem",
    // border: '1px solid red',
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "0",
        marginTop: '2px',
        marginBottom: '0',
        gap: '2px'
    },
}));

const NavItem = styled(Link)<NavItemProps>(
    ({ theme }: { theme: CustomTheme }) => ({
        // border: "1px solid blue",
        position: "relative",
        borderBottom: "2px solid #000",
        borderRight: "2px solid #000",
        backgroundColor: lighten(
            theme.themes.modes[theme.palette.mode].light,
            0.2
        ),
        marginLeft: "0.5rem",
        padding: "0.3rem",
        fontSize: "1.5rem",
        borderRadius: "0.3rem",
        transition: "all 0s ease",
        overflow: "hidden",
        "&:hover": {
            borderBottom: `2px solid ${
                theme.themes[theme.themes.selectedTheme].light
            }`,
            borderRight: `2px solid ${
                theme.themes[theme.themes.selectedTheme].light
            }`,
            ".wave": {
                top: "10px",
                opacity: "25%",
            },
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            width: "100%",
            border: "unset",
            paddingBlock: '0.4rem',
            margin: '0',
            borderRadius: '0',
            fontWeight: '600',
            "&:hover": {
                border: "unset",
                background: lighten(theme.themes.modes[theme.palette.mode].light, 0),
            },
        },
    })
);

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
        transition: "all 1s ease",
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
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    })
);

function Navbar(props: { title: string }) {
    const { title } = props;

    const params = useRouter();
    // console.log(params);
    let rndWaveDuration = 10;
    let rndWaveScales = [1, 0.95, 1, 0.95];

    useEffect(() => {
        console.log("useEffect!");
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
                <NavItem href={"/"}>
                    Home
                    <Wave
                        className="wave"
                        duration={rndWaveDuration}
                        scale={rndWaveScales}
                    />
                </NavItem>
                <NavItem href={"/projects"}>
                    Projects
                    <Wave
                        className="wave"
                        duration={rndWaveDuration}
                        scale={rndWaveScales}
                    />
                </NavItem>
                <NavItem href={"/"}>
                    <div>
                        About
                        <Wave
                            className="wave"
                            duration={rndWaveDuration}
                            scale={rndWaveScales}
                        />
                    </div>
                </NavItem>
                <NavItem href={"/"}>
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
