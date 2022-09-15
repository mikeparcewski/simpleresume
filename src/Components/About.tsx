import React from 'react'
import { Box } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';
import AboutSection, { SectionData } from './AboutSection';
 
const About = (props: SimpleResume) => {

    const summary: SectionData = {
      highlights: props?.resume?.basics.careerSummary!,
      compId: "summary",
      iconPrefix: "fa-solid",
      iconName: "fa-square-check",
      header: "Career Summary"
    }

    const highlights: SectionData = {
      highlights: props?.resume?.basics.highlights!,
      compId: "highlights",
      separator: "|",
      iconPrefix: "fa-solid",
      iconName: "fa-forward",
      header: "Selected Accomplishments"
    }

    return (

      <>

        <Box 
          display="flex"
          flexDirection="column"
          sx={{ 
            mt: '3vmax',
            mb: '4vmax',
            alignItems: "center"
        }}>

          <Box
            sx={{
              justifyItems: "left",
              alignItems: "left",
              justifyContent: "left",
              width: '100%',
              maxWidth: { xs: '95%', md: '70%' }
            }}
          >

            <AboutSection {...summary} />

            <AboutSection {...highlights} />

          </Box>

        </Box>
 
      </>

    )
}
export default About;