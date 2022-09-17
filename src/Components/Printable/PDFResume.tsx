import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { Resume, SimpleResume, Skill } from '../../Objects/SimpleResume';
import { CssBaseline } from '@mui/material';
import PrintTheme from '../PrintTheme';
import PDFHeader from './PDFHeader';
import PDFBanner from './PDFBanner';
import PDFHighlight, { SectionData } from './PDFHighlight';
import PDFSkills, { PDFSkillsParam } from './PDFSkills';
import PDFWork from './PDFWork';
import { Helmet } from 'react-helmet';
import PDFAdditionalSkills from './PDFAdditionalSkills';
 
const PDFResume = (site: SimpleResume) => {

    const resume: Resume = site.resume!;

    const maxHiglightSkills: number = 18;

    const summary: SectionData = {
      highlights: resume?.basics.careerSummary!,
      compId: "summary",
      iconPrefix: "fa-solid",
      iconName: "fa-angles-right",
      header: "Career Summary"
    }
  
    const highlights: SectionData = {
      highlights: resume?.basics.highlights!,
      compId: "highlights",
      separator: "|",
      header: "HIGHLIGHTED ACCOMPLISHMENTS, SKILLS AND EXPERIENCE"
    }

    const skills: PDFSkillsParam = {
      resume: resume,
      numberOfSkills: maxHiglightSkills
    }  

    const interesting: SectionData = {
      highlights: resume?.basics.interestingFacts!,
      compId: "interesting",
      header: "OTHER INTERESTING FACTS",
      iconPrefix: "fa-solid",
      iconName: "fa-angles-right",
    }

    return (

      <>

        <Helmet>
            <title>{site.resume?.basics.name.replace(" ", "_")}_resume</title>
            <meta name="description" content={site.resume?.basics.name.replace(" ", "_") + "_resume"} />
        </Helmet>

        <CssBaseline />

        <ThemeProvider theme={PrintTheme}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 1,
              width: "100%",
              alignItems: "center"
          }}>

            <Box
              sx={{
                width: "19.7cm",
                alignItems: "left"
            }}>

              <PDFHeader {...site} />

              <PDFBanner {...site} />

              <PDFHighlight {...summary} />

              <PDFHighlight {...highlights} />

              <PDFSkills {...skills} />

              <PDFWork {...site.resume!}/>

              <PDFAdditionalSkills {...skills} />

              <PDFHighlight {...interesting} />

            </Box>

          </Box>

        </ThemeProvider>

      </>

    )
}
export default PDFResume;