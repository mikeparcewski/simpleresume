import React from 'react';

import ReactDOM from 'react-dom'

import SiteConfig from "./Components/SiteConfig";

import { ThemeProvider } from '@mui/system';
import SiteTheme from './Components/SiteTheme';

import {Helmet} from "react-helmet";

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import Resume from './Components/Resume'

import reportWebVitals from './reportWebVitals';
import { SimpleResume } from './Objects/SimpleResume';
import { CssBaseline } from '@mui/material';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

library.add(fab as IconPack);
library.add(fas as IconPack);


const simpleResume : SimpleResume = SiteConfig();
 
ReactDOM.render(
    <>

      <CssBaseline />

      <ThemeProvider theme={SiteTheme}>

        <Helmet>
          <title>{simpleResume.pageTitle}</title>
          <meta name="description" content={simpleResume.pageDescription} />
        </Helmet>

        <Header {...simpleResume} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home {...simpleResume} />} />
            <Route path="/resume" element={<Resume {...simpleResume} />} />
            <Route path="/portfolio" element={<Portfolio {...simpleResume} />} />
            <Route path="/skills" element={<Skills {...simpleResume} />} />
          </Routes>
        </BrowserRouter>

        <Footer {...simpleResume} />

        <Copyright {...simpleResume} />

      </ThemeProvider>

    </>,
    document.getElementById("root")
);

reportWebVitals();