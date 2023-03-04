import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { styled } from "@mui/material";

const RootStyle = styled("div")((props: {offset: string}) => ({
    display: "grid",
    gridTemplateRows: `${props.offset}% 1fr ${props.offset}%`,
    width: "100%",
    maxHeight: '100vh',
    height: "100%",
    position: "absolute",
    backgroundColor: "#535353",
    overflow: 'hidden',
}));

const Canvas = styled("div")((props: {offset: string}) => ({
    borderRadius: "0.2rem",
    borderTopRightRadius: 'unset',
    padding: "1rem",
    height: '100%',
    maxHeight: `${100 - Number.parseInt(props.offset) * 2}vh`,
    background: "#d9d9d9",
    boxShadow: "3px 5px 5px 5px rgba(0, 0, 0, 0.35)",
}));

const AccentBar = styled("div")(() => ({
    // marginLeft: "5%",
    height: "1rem",
    position: "relative",
    // width: "100%",
    // overflow: 'hidden',
    backgroundColor: "#4272BA",
}));

const HorizontalSpacer = styled("div")(() => ({
    height: "100%",
    width: "100%",
    // position: 'absolute',
    // transform: 'translateY(-8vh)',
    // border: "1px solid blue",
}));

const VerticalSpacer = styled("div")(() => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column-reverse",
    // border: '1px solid red',
}));

const CenterColumns = styled("div")((props: {offset: string}) => ({
    display: "grid",
    gridTemplateColumns: `${props.offset}% 1fr ${props.offset}%`,
}));

const HorizontalWave = styled("div")(() => ({
    width: "100%",
    height: "12px",
    // opacity: "100%",
    background:
        "linear-gradient(90deg, rgba(66, 114, 186, 0) 0%, rgba(66, 114, 186, 0.4) 0.01%, #4272BA 60%, #4272BA 100%)",
    // transform: "rotate(-90deg)",
}));

const VerticalWave = styled("div")((props: {offset}) => ({
    position: 'relative',
    top: `-${props.offset}vh`,
    width: "12px",
    height: "100vh",
    // overflow: 'visible',
    // opacity: "100%",
    background:
        "linear-gradient(0deg, rgba(66, 114, 186, 0) 0%, rgba(66, 114, 186, 0.4) 0.01%, #4272BA 60%, #4272BA 100%)",
    // transform: "rotate(-90deg)",
}));

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
