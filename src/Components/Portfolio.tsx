import React from 'react'
import { Box, Stack } from '@mui/material';
import { Project, SimpleResume } from '../Objects/SimpleResume';
import ProjectCard from './ProjectCard';
import SimpleHeader, { SimpleHeaderParams } from './SimpleHeader';
 
const Portfolio = (props: SimpleResume) => {

    let headerParams : Partial<SimpleHeaderParams> = {
      title: props.portfolioPageTitle,
      conf: props
    };

    return (

      <>

        <SimpleHeader {...headerParams} />

        <Box 
          component={Stack}
          direction="row"
          spacing={0}
          sx={{ 
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            mb: '4vmax',
            flexWrap: 'wrap'
        }}>

            {props.resume?.projects.map((project: Project) => (
              <Box
                key={"box" + project.name}
                sx={{
                  maxWidth: "350px",
                  m: "2vmax"
                }}
              >
                <ProjectCard
                  key={"card" + project.name}
                  {...{ "project": project, "resume": props}}
                />
              </Box>
            ))}


        </Box>

      </>

    )
}
export default Portfolio;