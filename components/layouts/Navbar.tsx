import React from "react";
import { styled } from "@mui/material";
import Link from "next/link";

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
    transition: "all 0s",
    overflow: "hidden",
    "&:hover": {
        borderBottom: "2px solid #1C74BD",
        borderRight: "2px solid #1C74BD",
        '.wave': {
            // top: '10px',
            opacity: '25%',
        }
    },
}));

const Wave = styled("span")(
    (props?: { duration?: number; scale?: number }) => ({
        position: "absolute",
        top: "10%",
        left: "-50%",
        height: "12rem",
        width: "12rem",
        backgroundColor: "#1C74BD",
        opacity: "10%",
        borderRadius: "43%",
        border: '1px solid white',
        transition: "1s all linear",
        animation: `wave ${
            props.duration ? props.duration : "5"
        }s infinite linear`,
        "@keyframes wave": {
            "0%": {
                transform: `rotate(0deg) scale(${
                    props.scale ? props.scale : 1
                })`,
            },
            "25%": {
                transform: `rotate(90deg) scale(${
                    props.scale ? props.scale : 0.95
                })`,
            },
            "50%": {
                transform: `rotate(180deg) scale(${
                    props.scale ? props.scale : 1
                })`,
            },
            "75%": {
                transform: `rotate(270deg) scale(${
                    props.scale ? props.scale : 0.9
                })`,
            },
            "100%": {
                transform: `rotate(360deg) scale(${
                    props.scale ? props.scale : 1
                })`,
            },
        },
    })
);

function Navbar(props: { title: string }) {
    const { title } = props;

    const waveDuration = [8, 15];
    const waveScale = [0.85, 1];

    const getRandomNumber = function (array) {
        const minNum = array[0];
        const maxNum = array[1];
        const rnd = Math.random() * (maxNum - minNum) + minNum;
        if (Number.isSafeInteger(minNum) && Number.isSafeInteger(maxNum))
            return Math.floor(rnd);
        return rnd;
    };

    return (
        <RootStyle>
            <Title>{title}</Title>
            <Nav>
                <NavItem className="NavItem" href={"/"}>
                    Home
                    <Wave
                        className="wave"
                        duration={getRandomNumber(waveDuration)}
                        scale={getRandomNumber(waveScale)}
                    />
                </NavItem>
                <NavItem className="NavItem" href={"/projects"}>
                    Projects
                    <Wave
                        className="wave"
                        duration={getRandomNumber(waveDuration)}
                        scale={getRandomNumber(waveScale)}
                    />
                </NavItem>
                <NavItem className="NavItem" href={"/"}>
                    About
                    <Wave
                        className="wave"
                        duration={getRandomNumber(waveDuration)}
                        scale={getRandomNumber(waveScale)}
                    />
                </NavItem>
                <NavItem className="NavItem" href={"/"}>
                    Glossary
                    <Wave
                        className="wave"
                        duration={getRandomNumber(waveDuration)}
                        scale={getRandomNumber(waveScale)}
                    />
                </NavItem>
            </Nav>
        </RootStyle>
    );
}

export default Navbar;
