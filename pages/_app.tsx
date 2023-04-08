import '../styles/globals.css';
import { MainContextProvider } from '../contexts/MainContext';
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Theme, ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { styled } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


const RootStyle = styled("div")(({ theme }: { theme: Theme }) => ({
    "*": {
        animation: "none",
    },
    [theme.breakpoints.down("sm")]: {
        "*": {
            animation: "none",
        },
    },
}));

function MyApp({ Component, pageProps }) {
    // const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce");

    // console.log(reducedMotion);
    return (
        <ThemeProvider theme={theme}>
            <MainContextProvider>
                <RootStyle>
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </RootStyle>
            </MainContextProvider>
        </ThemeProvider>
    );
}

export default MyApp
