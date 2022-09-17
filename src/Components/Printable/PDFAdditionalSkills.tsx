import React, {  } from 'react';
import { Box } from '@mui/material';
import { Skill } from '../../Objects/SimpleResume';
import { PDFSkillsParam } from './PDFSkills';

const PDFAdditionalSkills = (param: PDFSkillsParam) => {

  var skills = param.resume.skills.sort((a, b) => b.level - a.level);

  return (

    <>

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
        {skills
          .filter((skill: Skill, index: number) => index >= param.numberOfSkills)
          .map((skill: Skill, index: number) => (
          <span 
            key={"addskill" + index} 
          >
            { index > 0 && <span>, </span> }
            {skill.name}
          </span>
        ))}
      </Box>

    </>

  )
}
export default PDFAdditionalSkills;