import '../styles/globals.css';
import DefaultLayout from "../components/layouts/DefaultLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import { CustomTheme, styled } from "@mui/material";
import Head from "next/head";

const RootStyle = styled("div")(() => ({}));

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <RootStyle>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </RootStyle>
        </ThemeProvider>
    );
}

export default MyApp
