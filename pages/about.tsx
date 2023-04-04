import { useContext } from 'react';
import { CustomTheme, styled, useTheme } from "@mui/material";
import { MainContext } from '../contexts/MainContext';
import Link from "next/link";

import Head from "next/head";
import Contact from "../components/Contact";
import credits from "../helper-functions/credits";
import { ThemeContextProps } from "../types/common";

const RootStyle = styled("div")<ThemeContextProps>(
    ({
        theme,
        selectedMode,
    }: {
        theme: CustomTheme;
        selectedMode: string;
    }) => ({
        display: "flex",
        flexDirection: "column",
        color: theme.themes.modes[selectedMode].contrastText,
        transition: "1s all ease",
        maxWidth: `${theme.breakpoints.values["lg"]}px`,
        // border: '1px solid red',
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    })
);

const AboutContent = styled("main")(({ theme }: { theme: CustomTheme }) => ({
    // border: "1px solid blue",
    // flexBasis: "60%",
    // flexGrow: "1",
    display: 'flex',
    flexDirection: 'row',
    paddingRight: "1rem",
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        paddingRight: "0",
    },
}));

const Title = styled("h2")(() => ({
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
}));

const ListStyle = styled("ul")(() => ({
    paddingLeft: "1.5rem",
}));

const ListItem = styled("li")(() => ({
    // listStyle: "none",
    marginBlock: "0.3rem",
}));

const CreditsSection = styled("section")(() => ({
    display: "flex",
    flexDirection: "row",
    // width: "100%",
}));

const LinkStyle = styled(Link)(() => ({
    fontWeight: "600",
    "&:hover": {
        textDecoration: "underline",
    },
}));

export default function About() {
    const { selectedMode } = useContext(MainContext);

    const creditsMap = new Map();
    credits.forEach((c) => {
        if (creditsMap.has(c.type)) {
            creditsMap.get(c.type).push(c);
        } else {
            creditsMap.set(c.type, [c]);
        }
        // console.log(creditsMap)
    });

    const creditColumns = [];

    for (const key of creditsMap.keys()) {
        const listItems = creditsMap.get(key).map((c) => {
            return (
                <ListItem key={`${c.name}-${c.type}`}>
                    <span>{`${c.name}: `}</span>
                    <LinkStyle
                        href={c.site}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {c.siteName}
                    </LinkStyle>
                </ListItem>
            );
        });
        creditColumns.push(
            <div>
                <h3>{`${key}:`}</h3>
                <ListStyle>{listItems}</ListStyle>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>About | Jacky C.</title>
            </Head>
            <RootStyle selectedMode={selectedMode.value}>
                <AboutContent aria-labelledby="h2-about">
                    <div>

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
                    </div>
                    <Contact />
                </AboutContent>
                <Title id="h2-credits">Credits</Title>
                <CreditsSection aria-labelledby="h2-credits">
                    {creditColumns}
                </CreditsSection>
            </RootStyle>
        </>
    );
}
