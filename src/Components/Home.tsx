import React from 'react';
import SiteMasthead from './SiteMasthead';
import About from './About';
import { SimpleResume } from '../Objects/SimpleResume';

const Home = (props: SimpleResume) => {

    return (

      <>

        <SiteMasthead {...props} />
        <About {...props} />

      </>
 
    );
}
export default Home;