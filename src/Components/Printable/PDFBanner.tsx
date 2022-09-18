import React, {  } from 'react';
import { Box, Typography } from '@mui/material';
import { Resume, SimpleResume } from '../../Objects/SimpleResume';
 
const PDFHeader = (site: SimpleResume) => {

    const resume: Resume = site.resume!;

    return (

      <>

        { resume.basics.titles &&
          resume.basics.titles.length > 0 &&

          <Box sx={{ 
            backgroundColor: "primary.main",
            color: "secondary.contrastText",
            p:1,
            mt: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}>

            { resume.basics.titles.map((title: string, index: number) => (

              <Typography
                key={ "titles" + index }
                sx={{
                  mr: 2,
                  px: 2,
                  borderLeft: index === 0 ? 0 : 1,
                  fontSize: ".7vmax"
              }}>
                {title}
              </Typography>

            ))}                
          </Box>

        }

      </>

    )
}
export default PDFHeader;