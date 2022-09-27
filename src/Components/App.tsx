import React from "react";
import { Helmet } from "react-helmet";

import { SimpleResume } from "../Objects/SimpleResume";

import { CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/system";
import SiteTheme from "./SiteTheme";

import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

import reportWebVitals from "../reportWebVitals";

const App: React.FC<{ simpleResume: SimpleResume }> = ({ children, simpleResume }) => {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={SiteTheme}>
        <Helmet>
          <title>{simpleResume.siteTitle}</title>
          <meta name="description" content={simpleResume.siteDescription} />
        </Helmet>

        <Header {...simpleResume} />

        {children}

        <Footer {...simpleResume} />

        <Copyright {...simpleResume} />
      </ThemeProvider>
    </>
  );
};

export default App;

reportWebVitals();
