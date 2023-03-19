import { useContext } from 'react';
import { CustomTheme, styled, useTheme } from "@mui/material";
import { MainContext } from '../contexts/MainContext';
import Link from "next/link";
import EmailSvg from "../public/svg/email";
import GitHubSvg from "../public/svg/github";
import LinkedInSvg from "../public/svg/linkedin";
import Head from "next/head";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "row",
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
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

const ContactContent = styled("aside")(
    ({ theme }: { theme: CustomTheme }) => ({
        // border: "1px solid green",
        // flexBasis: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
        gap: "1rem",
        padding: "1rem",
        paddingTop: "0",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    })
);

const ContactRow = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: 'space-between',
    // flexGrow: "1",
    // gap: "0.5rem",
    // border: '1px solid red',
    // width: '100%',
    boxSizing: "border-box",
    // marginBottom: '1rem',
    padding: "0",
    marginBottom: "-1px",
    borderBottom: `1px solid ${
        theme.themes.modes[theme.themes.selectedMode].contrastText
    }`,
    "&:hover": {
        marginBottom: "-4px",
        borderBottom: `4px solid ${
            theme.themes.modes[theme.themes.selectedMode].contrastText
        }`,
        "h4, svg": {
            textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
        },
    },
}));

const Contact = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: "0.5rem",
    // marginBlock: "0.5rem",
}));

const ContactHeading = styled("h3")(() => ({
    fontSize: "1.3rem",
    padding: "0",
    margin: "0",
    marginRight: "0.5rem",
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
    const theme: CustomTheme = useTheme();
    const { selectedTheme, themeMode } = useContext(MainContext);
    return (
        <>
            <Head>
                <title>About - Jacky C.</title>
            </Head>
            <RootStyle>
                <AboutContent aria-labelledby='h2-about'>
                    <Title id='h2-about'>About</Title>
                    <p aria-label='About Content'>
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
                <section aria-labelledby='h2-credits'>
                    <Title id='h2-credits'>Credits</Title>
                    <h3>Assets Used:</h3>
                    <ListStyle>
                        <ListItem>
                            <span>LinkedIn SVG: &nbsp;</span>
                            <LinkStyle
                                href="https://www.svgrepo.com/svg/922/linkedin"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                SVG Repo
                            </LinkStyle>
                        </ListItem>
                        <ListItem>
                            <span>GitHub SVG: &nbsp;</span>
                            <LinkStyle
                                href="https://www.svgrepo.com/svg/503359/github"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                SVG Repo
                            </LinkStyle>
                        </ListItem>
                        <ListItem>
                            <span>Email SVG: &nbsp;</span>
                            <LinkStyle
                                href="https://www.svgrepo.com/svg/502648/email"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                SVG Repo
                            </LinkStyle>
                        </ListItem>
                    </ListStyle>
                </section>
                        </AboutContent>
                <ContactContent aria-labelledby="h2-contact">
                    <Title id="h2-contact">Contact</Title>
                    {/* CHANGE TO LIST */}
                    <ContactRow>
                        <Link
                            href="https://www.linkedin.com/in/jamech/"
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                            <Contact>
                                <ContactHeading>LinkedIn</ContactHeading>
                                <LinkedInSvg
                                    modeColor={
                                        theme.themes.modes[
                                            theme.themes.selectedMode
                                        ].contrastText
                                    }
                                />
                            </Contact>
                        </Link>
                    </ContactRow>

                    <ContactRow>
                        <Link
                            href="https://github.com/ja-me-ch"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Contact>
                                <ContactHeading>GitHub</ContactHeading>
                                <GitHubSvg
                                    modeColor={
                                        theme.themes.modes[
                                            theme.themes.selectedMode
                                        ].contrastText
                                    }
                                />
                            </Contact>
                        </Link>
                    </ContactRow>

                    <ContactRow>
                        <Link
                            href="mailto:ja.me.ch.95@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Contact>
                                <ContactHeading>Email</ContactHeading>
                                <EmailSvg
                                    modeColor={
                                        theme.themes.modes[
                                            theme.themes.selectedMode
                                        ].contrastText
                                    }
                                />
                            </Contact>
                        </Link>
                    </ContactRow>
                </ContactContent>
            </RootStyle>
        </>
    );
}
