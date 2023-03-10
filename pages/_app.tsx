import '../styles/globals.css';
import DefaultLayout from "../components/layouts/DefaultLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import { CustomTheme, styled } from "@mui/material";

const RootStyle = styled("div")(() => ({
  // backgroundColor: theme.themes.modes.dark.main,
  // border: '1px solid red',
  padding: `0`,
  margin: '0',
}));

function MyApp({ Component, pageProps }) {
  const a = 1;
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
