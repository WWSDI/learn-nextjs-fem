import React from 'react'
import { ThemeProvider } from "theme-ui";
import theme from "../theme"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* {console.log(theme)} */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
