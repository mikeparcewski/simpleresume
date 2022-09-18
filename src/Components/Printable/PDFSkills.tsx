import React, {  } from 'react';
import { Box, Grid } from '@mui/material';
import { Resume, Skill } from '../../Objects/SimpleResume';

export interface PDFSkillsParam {
  resume: Resume;
  numberOfSkills: number;
}

const PDFSkills = (param: PDFSkillsParam) => {

  const skills = param.resume.skills;
  skills.sort((a, b) => b.level - a.level);

  return (

    <>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          my: 2
        }}
      >

        <Grid container columnSpacing={1} columns={3} sx={{ width: "95%" }}>
          {skills
            .filter((skill: Skill, index: number) => index < param.numberOfSkills)
            .map((skill: Skill, index: number) => (
            <Grid 
              xs={1}
              key={"skill" + index} 
              item
              sx={{
                fontSize: ".9vmax"
            }}>
                * {skill.name}
            </Grid>
          ))}
        </Grid>

      </Box>

    </>

  )
}
export default PDFSkills;