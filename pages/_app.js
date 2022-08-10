import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/header/Header";
import Head from "next/head";
import "./global.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Loader from "../components/UI/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// font-family: 'Inter', sans-serif;
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);
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
        {loading && <Loader />}
        <Component style={{ marginTop: "10rem" }} {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
