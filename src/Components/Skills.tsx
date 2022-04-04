import React from 'react';
import SimpleHeader, { SimpleHeaderParams } from './SimpleHeader';
import { Box, Chip } from '@mui/material';
import { SimpleResume, Skill } from '../Objects/SimpleResume';

const LEVELS : string[] = [
  "beginner", "intermediate", "advanced", "master"
];

const COLORS = [
  'secondary', 'primary', 'success', 'warning', undefined
] as const;


const Skills = (props: SimpleResume) => {

    let headerParams : Partial<SimpleHeaderParams> = {
      title: props.skillsPageTitle,
      conf: props
    };

    // remove to retain order
    let shuffled : Skill[] = props.resume?.skills
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value) as Skill[];

    return (

      <>

        <SimpleHeader {...headerParams} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: "2vmax",
          }}
        >

          <Box
           sx={{
             maxWidth: { xs: '95%', sm: '80%' },
           }}
          >

            {shuffled && shuffled.map((skill : Skill) => (

              <Chip 
                key={skill.name.replace(' ', '_') + "-chip"}
                label={skill.name} 
                color={COLORS[getColorIdx(skill.level)]} 
                size="medium"
                sx={{
                  mx: "1vmax",
                  my: "1vmax"
                }}
              />
            ))}

          </Box>

        </Box>


      </>

    )
}
export default Skills;

function getColorIdx(type : string) : number {
  if (type === "") return Math.floor(Math.random() * (4 - 1 + 1));
  return LEVELS.indexOf(type.toLowerCase());
}