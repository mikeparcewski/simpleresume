import React from 'react';

import ReactDOM from 'react-dom'

import SiteConfig from "./Components/SiteConfig";

import App from './Components/App';
import Home from './Components/Home';
import Resume from './Components/Resume'
import PDFResume from './Components/Printable/PDFResume';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

import { SimpleResume } from './Objects/SimpleResume';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter, Route, Routes } from "react-router-dom";

library.add(fab as IconPack);
library.add(fas as IconPack);

const resume : SimpleResume = SiteConfig();

ReactDOM.render(
    <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App simpleResume={resume}><Home {...resume} /></App>} />
            <Route path="/resume" element={<App simpleResume={resume}><Resume {...resume} /></App>} />
            <Route path="/portfolio" element={<App simpleResume={resume}><Portfolio {...resume} /></App>} />
            <Route path="/skills"element={<App simpleResume={resume}><Skills {...resume} /></App>} />
            <Route path="/print" element={<PDFResume {...resume} />} />
          </Routes>
        </BrowserRouter>


    </>,
    document.getElementById("root")
);