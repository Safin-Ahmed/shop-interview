import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/header/Header";
import Head from "next/head";
import "./global.css";
import { createTheme, ThemeProvider } from "@mui/material";

// font-family: 'Inter', sans-serif;
function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <Provider store={store}>
      <Head>
        <title>Interview Shop</title>
        <meta
          name="description"
          content="Shop your desired products at Interview Shop"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component style={{ marginTop: "10rem" }} {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
