import { CustomTheme, styled } from "@mui/material";
import Link from "next/link";
import EmailSvg from "../public/svg/email";
import GitHubSvg from "../public/svg/github";
import LinkedInSvg from "../public/svg/linkedin";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const AboutContent = styled("div")(({ theme }: { theme: CustomTheme }) => ({
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

const ContactContent = styled("div")(({ theme }: { theme: CustomTheme }) => ({
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem praesentium neque dignissimos sint delectus tenetur
                    eligendi quia autem omnis nihil magni id minus provident,
                    amet perspiciatis voluptas! Enim, eveniet minima! Debitis
                    optio, odit nesciunt repellat qui aperiam facere consequatur
                    possimus officia, modi non voluptate sunt minima ipsum
                    itaque excepturi laborum labore, quia nulla. Ab impedit quod
                    aut, dolorem eum autem. Officia possimus sapiente facilis
                    quasi sint a. Atque earum, voluptatibus optio quaerat
                    tenetur, quod ducimus omnis facere, veritatis ea nemo
                    laborum est eum suscipit fugiat cupiditate vero. Eius, et
                    suscipit! Tempora, pariatur quod quo esse tempore molestiae
                    aliquam adipisci numquam dolor autem nobis. Eius excepturi
                    quod dignissimos harum nesciunt odit. Cupiditate aliquam
                    veritatis iusto commodi, accusamus quidem amet enim
                    quibusdam? Cumque ullam laudantium quae deserunt voluptate
                    est consectetur, voluptas culpa! Cupiditate modi odio
                    beatae, exercitationem, sit tempora ipsam illum doloremque
                    iusto dolores quos magni officiis reprehenderit rem iure,
                    libero necessitatibus. Quam nam atque maiores a alias, ad
                    nihil repellat, consequuntur culpa eveniet ratione sit,
                    quibusdam facilis rerum ea voluptatum aut earum? Perferendis
                    aspernatur modi natus ipsum rerum suscipit, dolore
                    quibusdam. Incidunt reprehenderit quae ducimus voluptate
                    iste inventore iure, velit id error eos omnis dignissimos
                    aut dicta pariatur nihil asperiores eius voluptatem
                    consequatur. At exercitationem sunt nam quasi modi quia
                    officia. Laborum quibusdam repudiandae voluptatem
                    temporibus, eveniet libero sit, provident quam tenetur
                    exercitationem, consequuntur blanditiis nulla optio?
                    Aspernatur unde corporis id, non ea cum ut ducimus error
                    quis esse iure nemo? Sequi, a atque quod mollitia aperiam
                    porro iusto soluta eveniet nemo minus vero corrupti numquam
                    tenetur deserunt facere commodi blanditiis delectus
                    distinctio. Asperiores labore aspernatur expedita atque
                    aperiam exercitationem nemo. Ratione ab dolore sint beatae
                    vel vitae repellendus, nihil recusandae id quo reprehenderit
                    voluptatibus ea est maxime iste qui corporis illum labore,
                    cumque consequatur nemo. Voluptatibus soluta necessitatibus
                    alias pariatur.
                </p>
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
