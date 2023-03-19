import React, { useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import {
    CustomTheme,
    styled,
    Collapse,
    useMediaQuery,
    useTheme,
    darken,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { WaveProps, NavItemProps, NavProps } from "../../types/common";
import { lighten } from "@mui/material";
import NavbarSvg from "../../public/svg/navbar";
import ThemeSwitcher from "../ThemeSwitcher";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    top: "0",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    transition: "1s all ease",
    // maxWidth: '1280px',
    backgroundColor: theme.themes.modes[theme.themes.selectedMode].main,
}));

const TopBar = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    maxHeight: "90px",
    borderBottom: `2px solid ${
        theme.themes.modes[theme.themes.selectedMode].contrastText
    }`,
    transition: "1s all ease",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}));

const HamburgerIconContainer = styled("div")(({ theme }) => ({
    display: "none",
    // border: '1px solid red',
    position: "absolute",
    top: "0.2rem",
    // visibility: "hidden",
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "0.1rem",
        display: "unset",
    },
}));

const SiteName = styled("span")(({ theme }: { theme: CustomTheme }) => ({
    display: "block",
    fontWeight: "600",
    fontSize: "1.5em",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    transition: "1s all ease",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
    },
}));

const Subtitle = styled("span")(({ theme }: { theme: CustomTheme }) => ({
    fontWeight: "600",
    fontSize: "0.75em",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    transition: "1s all ease",
}));

const Title = styled("h1")(({ theme }: { theme: CustomTheme }) => ({
    margin: "0",
    display: "inline",
    // paddingBottom: "0rem",
    // alignContent: 'center',
    textAlign: "right",
    paddingRight: "1rem",
    fontSize: "3.8rem",
    marginTop: "0.6rem",
    // borderBottom: "2px solid #000",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    fontWeight: "400",
    fontFamily: "Yrsa, Roboto",
    transition: "1s all ease",
    [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
    },
}));

const Nav = styled("nav")<NavProps>(
    ({ theme, showNavbar }: { theme: CustomTheme; showNavbar: boolean }) => ({
        display: "flex",
        // justifySelf: 'center',
        // justifyContent: 'center',
        width: "100%",
        flexDirection: "row-reverse",
        paddingRight: "1rem",
        marginTop: "1rem",
        marginInline: "auto",
        // visibility: "visible",
        // border: '1px solid red',
        maxWidth: `${theme.breakpoints.values["lg"]}px`,
        marginBottom: "1rem",
        transition: "1s all ease",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            padding: "0",
            marginTop: "2px",
            marginBottom: "0",
            gap: "2px",
        },
    })
);

const NavItem = styled(Link)<NavItemProps>(
    ({ theme }: { theme: CustomTheme }) => ({
        // border: "1px solid blue",
        position: "relative",
        borderBottom: `2px solid ${
            theme.themes.modes[theme.themes.selectedMode].dark
        }`,
        borderRight: `2px solid ${
            theme.themes.modes[theme.themes.selectedMode].dark
        }`,
        color: theme.themes.modes[theme.themes.selectedMode].contrastText,
        backgroundColor: lighten(
            theme.themes.modes[theme.themes.selectedMode].light,
            0.4
        ),
        marginLeft: "0.5rem",
        padding: "0.3rem",
        fontSize: "1.5rem",
        borderRadius: "0.3rem",
        transition: "all 0s ease",
        overflow: "hidden",
        "&:hover": {
            borderBottom: `2px solid ${
                theme.themes.themePalettes[theme.themes.selectedTheme].light
            }`,
            borderRight: `2px solid ${
                theme.themes.themePalettes[theme.themes.selectedTheme].light
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
            paddingBlock: "0.5rem",
            margin: "0",
            borderRadius: "0",
            fontWeight: "600",
            backgroundColor: lighten(
                theme.themes.modes[theme.themes.selectedMode].main,
                0.4
            ),
            "&:hover": {
                border: "unset",
                background: darken(
                    theme.themes.modes[theme.themes.selectedMode].main,
                    0.1
                ),
            },
        },
    })
);

const NavContainer = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    // alignItems: 'flex-end',
    // border: '1px solid blue',
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
        backgroundColor:
            theme.themes.themePalettes[theme.themes.selectedTheme].main,
        opacity: "15%",
        borderRadius: "43%",
        border: "1px solid white",
        transition: "all 2s ease",
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
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    })
);

function Navbar() {
    const { showNavbar } = useContext(MainContext);
    const params = useRouter();
    const theme: CustomTheme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    if (matches && showNavbar.value === false) {
        showNavbar.toggle();
    }

    const getPageTitle = function (params) {
        if (params.pathname === "/") return "Home";
        const path = params.pathname.split("/")[1];
        return path[0].toUpperCase() + path.slice(1);
    };

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

    const onHamburgerClick = () => showNavbar.toggle();

    return (
        <RootStyle>
            <TopBar>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <ThemeSwitcher />
                    <div style={{
                        alignSelf: 'center'
                    }}>
                        <SiteName>Jacky C.</SiteName>
                        <Subtitle>Web Developer</Subtitle>
                    </div>
                </div>
                <Title>{getPageTitle(params)}</Title>
            </TopBar>
            <HamburgerIconContainer onClick={onHamburgerClick}>
                <NavbarSvg
                    toggle={showNavbar.value}
                    modeColor={
                        theme.themes.modes[theme.themes.selectedMode]
                            .contrastText
                    }
                />
            </HamburgerIconContainer>
            <Collapse in={showNavbar.value} collapsedSize={0}>
                <NavContainer>
                    {/* CHANGE TO LIST */}
                    <Nav showNavbar={showNavbar.value}>
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
                        <NavItem href={"/about"}>
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
                </NavContainer>
            </Collapse>
        </RootStyle>
    );
}

export default Navbar;
