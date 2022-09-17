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
 
const PDFResume = (site: SimpleResume) => {

    const resume: Resume = site.resume!;

    const maxHiglightSkills: number = 21;

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

    return (

      <>

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
                width: "21cm",
                alignItems: "left"
            }}>

              <PDFHeader {...site} />

              <PDFBanner {...site} />

              <PDFHighlight {...summary} />

              <PDFHighlight {...highlights} />

              <PDFSkills {...skills} />

              <PDFWork {...site.resume!}/>


              <Box
                sx={{
                  borderBottom: 1,
                  fontSize: "1.3vmax",
                  mb: 1
              }}>
                ADDITIONAL TOOLS, TECHNOLOGIES, & METHODOLOGIES
              </Box>
              <Box
                sx={{
                  fontSize: "1vmax",
                }}>
                {resume.skills
                  .filter((skill: Skill, index: number) => index >= maxHiglightSkills)
                  .map((skill: Skill, index: number) => (
                  <span 
                    key={"addskill" + index} 
                  >
                    { index > 0 && <span>, </span> }
                    {skill.name}
                  </span>
                ))}
              </Box>

            </Box>

          </Box>

        </ThemeProvider>

      </>

    )
}
export default PDFResume;