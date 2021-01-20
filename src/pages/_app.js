import React from "react";
import { AppContextProvider } from "../components/hooks/app-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
