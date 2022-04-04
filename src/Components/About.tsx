import React from 'react'
import { Box } from '@mui/material';
import { MainSection, SimpleResume } from '../Objects/SimpleResume';
import AboutSection from './AboutSection';
 
const About = (props: SimpleResume) => {

    return (

      <>

        <Box 
          display="flex"
          flexDirection="column"
          sx={{ 
            alignItems: "center",
            mb: '4vmax'
        }}>

          {props?.mainSections?.map((section: MainSection) => (
            <AboutSection 
              key={section.name}
              {...section} 
            />
          ))}

        </Box>

      </>

    )
}
export default About;