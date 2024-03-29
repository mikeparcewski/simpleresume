import React from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { Resume, SimpleResume } from "../../Objects/SimpleResume";
import PrintTheme from "./PrintTheme";
import PDFHeader from "./PDFHeader";
import PDFBanner from "./PDFBanner";
import PDFHighlight, { SectionData } from "./PDFHighlight";
import PDFSkills, { PDFSkillsParam } from "./PDFSkills";
import PDFWork from "./PDFWork";
import { Helmet } from "react-helmet";
import PDFAdditionalSkills from "./PDFAdditionalSkills";

const PDFResume = (site: SimpleResume) => {
  const resume: Resume = site.resume ?? ({} as Resume);

  const maxHiglightSkills = 18;

  const summary: SectionData = {
    highlights: resume?.basics.careerSummary ?? [],
    compId: "summary",
    iconPrefix: "fa-solid",
    iconName: "fa-angles-right",
    header: "Career Summary"
  };

  const highlights: SectionData = {
    highlights: resume?.basics.highlights ?? [],
    compId: "highlights",
    separator: "|",
    header: "HIGHLIGHTED ACCOMPLISHMENTS, SKILLS AND EXPERIENCE"
  };

  const skills: PDFSkillsParam = {
    resume: resume,
    numberOfSkills: maxHiglightSkills
  };

  const interesting: SectionData = {
    highlights: resume?.basics.interestingFacts ?? [],
    compId: "interesting",
    header: "OTHER INTERESTING FACTS",
    iconPrefix: "fa-solid",
    iconName: "fa-angles-right"
  };

  // printing
  const body = document.querySelector("body");
  body?.style.setProperty("-webkit-print-color-adjust", "exact");
  body?.style.setProperty("-moz-print-color-adjust", "exact");
  body?.style.setProperty("-ms-print-color-adjust", "exact");
  body?.style.setProperty("print-color-adjust", "exact");

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
          }}
        >
          <Box
            sx={{
              width: "19.7cm",
              alignItems: "left"
            }}
          >
            <PDFHeader {...site} />

            <PDFBanner {...site} />

            <PDFHighlight {...summary} />

            <PDFHighlight {...highlights} />

            <PDFSkills {...skills} />

            <PDFWork {...(site.resume ?? ({} as Resume))} />

            <PDFAdditionalSkills {...skills} />

            <PDFHighlight {...interesting} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default PDFResume;
