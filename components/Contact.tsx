import { styled, CustomTheme, useTheme } from "@mui/material";
import EmailSvg from "../public/svg/email";
import GitHubSvg from "../public/svg/github";
import LinkedInSvg from "../public/svg/linkedin";
import Link from "next/link";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { ThemeContextProps } from "../types/common";

const Title = styled("h2")(() => ({
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
}));

const ContactContent = styled("aside")<ThemeContextProps>(({ theme, selectedMode }: { theme: CustomTheme, selectedMode: string }) => ({
    // border: "1px solid green",
    // flexBasis: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    color: theme.themes.modes[selectedMode].contrastText,
    transition: "1s all ease",
    gap: "1rem",
    padding: "1rem",
    paddingTop: "0",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
    },
}));

const ContactRow = styled("div")(
    ({ borderColor }: { borderColor: string }) => ({
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
        borderBottom: `1px solid ${borderColor}`,
        "&:hover": {
            marginBottom: "-4px",
            borderBottom: `4px solid ${borderColor}`,
            "h4, svg": {
                textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
            },
        },
    })
);

const ContactContainer = styled("div")(({ theme }: { theme: CustomTheme }) => ({
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

const Contact = function () {
    const theme: CustomTheme = useTheme();
    const { selectedTheme, selectedMode } = useContext(MainContext);
    return (
        <ContactContent aria-labelledby="h2-contact" selectedMode={selectedMode.value}>
            <Title id="h2-contact">Contact</Title>
            {/* CHANGE TO LIST */}
            <ContactRow
                borderColor={
                    theme.themes.modes[selectedMode.value].contrastText
                }
            >
                <Link
                    href="https://www.linkedin.com/in/jamech/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ContactContainer>
                        <ContactHeading>LinkedIn</ContactHeading>
                        <LinkedInSvg
                            modeColor={
                                theme.themes.modes[selectedMode.value]
                                    .contrastText
                            }
                        />
                    </ContactContainer>
                </Link>
            </ContactRow>

            <ContactRow
                borderColor={
                    theme.themes.modes[selectedMode.value].contrastText
                }
            >
                <Link
                    href="https://github.com/ja-me-ch"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ContactContainer>
                        <ContactHeading>GitHub</ContactHeading>
                        <GitHubSvg
                            modeColor={
                                theme.themes.modes[selectedMode.value]
                                    .contrastText
                            }
                        />
                    </ContactContainer>
                </Link>
            </ContactRow>

            <ContactRow
                borderColor={
                    theme.themes.modes[selectedMode.value].contrastText
                }
            >
                <Link
                    href="mailto:ja.me.ch.95@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ContactContainer>
                        <ContactHeading>Email</ContactHeading>
                        <EmailSvg
                            modeColor={
                                theme.themes.modes[selectedMode.value]
                                    .contrastText
                            }
                        />
                    </ContactContainer>
                </Link>
            </ContactRow>
        </ContactContent>
    );
};

export default Contact;