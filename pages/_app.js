import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { useState } from "react";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component style={{ marginTop: "10rem" }} {...pageProps} />
    </Provider>
  );
}

export default MyApp;
