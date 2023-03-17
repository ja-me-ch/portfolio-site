import { CustomTheme, styled } from "@mui/material";
import Link from "next/link";
import EmailSvg from "../public/svg/email";
import GitHubSvg from "../public/svg/github";
import LinkedInSvg from "../public/svg/linkedin";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "row",
    border: '1px solid red',
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const AboutContent = styled("section")(({ theme }: { theme: CustomTheme }) => ({
    // border: "1px solid blue",
    flexBasis: "60%",
    flexGrow: "1",
    paddingRight: "1rem",
    [theme.breakpoints.down("sm")]: {
        paddingRight: "0",
    },
}));

const Title = styled("h3")(() => ({
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
}));

const ContactContent = styled("section")(({ theme }: { theme: CustomTheme }) => ({
    // border: "1px solid green",
    // flexBasis: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    gap: '1rem',
    padding: "1rem",
    paddingTop: "0",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
    },
}));

const ContactRow = styled("div")(() => ({
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: 'space-between',
    // flexGrow: "1",
    // gap: "0.5rem",
    // border: '1px solid red',
    // width: '100%',
    boxSizing: 'border-box',
    // marginBottom: '1rem',
    padding: "0",
    borderBottom: "1px solid black",
    "&:hover": {
        marginBottom: '-1px',
        borderBottom: '2px solid black',
        "h4, svg": {
            textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
        },
    },
}));

const Contact = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBlock: "0.5rem",
    // marginBlock: "0.5rem",
}));

const ContactHeading = styled("h4")(() => ({
    fontSize: "1.3rem",
    padding: "0",
    margin: "0",
    marginRight: '0.5rem'
}));

export default function About() {
    return (
        <RootStyle>
            <AboutContent>
                <Title>About</Title>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime eaque magni fugiat fugit! Quidem placeat obcaecati modi officiis, cupiditate aperiam laboriosam fugiat labore optio velit et, blanditiis exercitationem dolore?
                    Iusto corrupti maiores illo quae veritatis exercitationem harum eaque nihil, dolore fugit magni perspiciatis ratione recusandae est! Cumque ad similique, deserunt eaque quaerat est atque quo, animi dolores autem fuga.
                    Itaque sit perferendis totam cupiditate perspiciatis laboriosam soluta iste sint neque officiis odit, enim nemo rem et omnis eos nisi autem, deleniti ratione consequuntur vel odio optio, suscipit repellendus! Quasi?
                    Maxime officiis ea deserunt itaque quae quos hic libero, nemo, sequi aperiam dolor. Dignissimos, pariatur! Deserunt, distinctio. Deserunt optio non excepturi molestias quos! Aliquam expedita numquam blanditiis possimus deleniti corporis.
                    Nihil reiciendis excepturi sit dolor reprehenderit eius, blanditiis molestiae hic est! Et est laborum suscipit asperiores nemo, magnam deleniti ipsa veritatis rem maiores vitae ullam quidem dolores, animi voluptas beatae.
                </p>

                <Title>Credits</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam deleniti aut amet, magnam minus ducimus eos hic sed molestias repellendus! Quaerat ullam aliquam magnam tempore consequatur dolorum placeat itaque?
                At, ad doloribus consequatur eius animi, earum dolorum omnis doloremque cum enim, quaerat nobis debitis ipsa voluptate deleniti laboriosam? Dolorum vel tempora nemo eveniet sequi vitae, quod odio neque necessitatibus?
                Officia quidem ea necessitatibus mollitia dolor ab, tempore cum voluptatem adipisci id, beatae alias harum quo tenetur suscipit aliquid enim asperiores voluptates blanditiis sequi odit velit animi ipsum fuga. Aperiam?
                Praesentium cupiditate placeat dolorem architecto labore voluptas mollitia blanditiis maiores cumque, modi accusamus nesciunt magnam odio aut, eaque corporis iusto, impedit voluptate a odit quas delectus dolore ea deserunt! Vero?
                Nihil pariatur velit eligendi qui eveniet nostrum sed dolores, possimus, minima fuga aspernatur cumque quam cupiditate odio. Obcaecati qui amet, repudiandae sequi possimus corrupti quasi aliquam rerum velit architecto maiores!</p>
            </AboutContent>
            <ContactContent>
                <Title>Contact</Title>

                <ContactRow>
                    <Link
                        href="https://www.linkedin.com/in/jamech/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Contact>
                            <ContactHeading>LinkedIn</ContactHeading>
                            <LinkedInSvg />
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
                            <GitHubSvg />
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
                            <EmailSvg />
                        </Contact>
                    </Link>
                </ContactRow>
            </ContactContent>
        </RootStyle>
    );
}
