import '../styles/globals.css';
import { MainContextProvider } from '../contexts/MainContext';
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Theme, ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { styled } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


const RootStyle = styled("div")(
    ({ reducedMotion, theme }: { reducedMotion: boolean, theme:Theme }) => ({
        "*": {
            transitionDuration: reducedMotion ?? "0s all ease",
        },
        [theme.breakpoints.down("sm")]: {
            '*': {
                transitionDuration: reducedMotion ?? "0s"
            }
        },
    })
);

function MyApp({ Component, pageProps }) {
    const reducedMotion = useMediaQuery('(prefers-reduced-motion');


    console.log(reducedMotion);
    return (
        <ThemeProvider theme={theme}>
            <MainContextProvider>
                <RootStyle reducedMotion={reducedMotion}>
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </RootStyle>
            </MainContextProvider>
        </ThemeProvider>
    );
}

export default MyApp
