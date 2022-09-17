import React from 'react';
import SiteMasthead from './SiteMasthead';
import { SimpleResume } from '../Objects/SimpleResume';
import HomeSection, { SectionData } from './HomeSection';
import { Box } from '@mui/material';

const Home = (props: SimpleResume) => {

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

      <SiteMasthead {...props} />

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

            <HomeSection {...summary} />

            <HomeSection {...highlights} />

          </Box>

      </Box>

    </>

  );
}
export default Home;