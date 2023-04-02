import { useContext } from 'react';
import { CustomTheme, styled, useTheme } from "@mui/material";
import { MainContext } from '../contexts/MainContext';
import Link from "next/link";

import Head from "next/head";
import Contact from "../components/Contact";
import { ThemeContextProps } from '../types/common';

const RootStyle = styled("div")<ThemeContextProps>(({ theme, selectedMode }: { theme: CustomTheme, selectedMode: string }) => ({
    display: "flex",
    flexDirection: "row",
    color: theme.themes.modes[selectedMode].contrastText,
    transition: "1s all ease",
    maxWidth: `${theme.breakpoints.values["lg"]}px`,
    // border: '1px solid red',
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const AboutContent = styled("main")(({ theme }: { theme: CustomTheme }) => ({
    // border: "1px solid blue",
    flexBasis: "60%",
    flexGrow: "1",
    paddingRight: "1rem",
    [theme.breakpoints.down("sm")]: {
        paddingRight: "0",
    },
}));

const Title = styled("h2")(() => ({
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
}));

const ListStyle = styled("ul")(() => ({
    paddingLeft: "1.5rem",
}));

const ListItem = styled("li")(() => ({
    // listStyle: "none",
    marginBlock: "0.3rem",
}));

const LinkStyle = styled(Link)(() => ({
    fontWeight: "600",
    "&:hover": {
        textDecoration: "underline",
    },
}));

export default function About() {
    const { selectedMode } = useContext(MainContext);
    return (
        <>
            <Head>
                <title>About | Jacky C.</title>
            </Head>
            <RootStyle selectedMode={selectedMode.value}>
                <AboutContent aria-labelledby="h2-about">
                    <Title id="h2-about">About</Title>
                    <p aria-label="About Content">
                        A web developer with a focus on React.js, Next.js, and
                        related technologies. While simultaneously developing
                        with accessibility and responsive design in mind.
                    </p>
                    <h3 id="h3-experience">
                        Experience in the following technologies:
                    </h3>
                    <ListStyle aria-labelledby="h3-experience">
                        <ListItem>
                            React.js
                            <ListStyle>
                                <ListItem>Next.js</ListItem>
                                <ListItem>Node.js</ListItem>
                                <ListItem>MongoDb</ListItem>
                                <ListItem>JavaScript</ListItem>
                                <ListItem>TypeScript</ListItem>
                            </ListStyle>
                        </ListItem>
                        <ListItem>
                            HTML, CSS
                            <ListStyle>
                                <ListItem>Material UI, Emotion</ListItem>
                                <ListItem>Bootstrap</ListItem>
                            </ListStyle>
                        </ListItem>
                        <ListItem>
                            API
                            <ListStyle>
                                <ListItem>REST</ListItem>
                                <ListItem>GraphQL</ListItem>
                            </ListStyle>
                        </ListItem>
                    </ListStyle>
                    <p>And more!</p>
                    <section aria-labelledby="h2-credits">
                        <Title id="h2-credits">Credits</Title>
                        <h3>Assets Used:</h3>
                        <ListStyle>
                            <ListItem>
                                <span>Linkedin SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/922/linkedin"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Github SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/503359/github"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Email SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/502648/email"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Nextjs Icon SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/354113/nextjs-icon"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>React SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/394388/react"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Nodejs02 SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/508935/nodejs02"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Mongodb SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/473729/mongodb"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Javascript 155 SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/512400/javascript-155"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Typescript SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/342317/typescript"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Html 124 SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/512355/html-124"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Css3 02 SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/508795/css3-02"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Material Ui SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/306383/material-ui"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Rest Api SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/447473/rest-api"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                            <ListItem>
                                <span>Graphql SVG Vector: &nbsp;</span>
                                <LinkStyle
                                    href="https://www.svgrepo.com/svg/306155/graphql"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    SVG Repo
                                </LinkStyle>
                            </ListItem>
                        </ListStyle>
                    </section>
                </AboutContent>
                <Contact />
            </RootStyle>
        </>
    );
}
