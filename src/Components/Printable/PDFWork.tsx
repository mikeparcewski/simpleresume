import React, {  } from 'react';
import { Box } from '@mui/material';
import { Resume, Work } from '../../Objects/SimpleResume';
import PDFWorkItem from './PDFWorkItem';

interface WorkMap {
  [name: string]: Work[];
}

const PDFWork = (resume: Resume) => {

  let workMap : WorkMap = {};
  resume.work.forEach((work: Work, index: number) => {
    if (workMap[work.name] === undefined) workMap[work.name] = [];
    workMap[work.name].push(work);
  });

  return (

    <>

      <Box
        sx={{
          borderBottom: 1,
          fontSize: "1.3vmax",
          color: "primary.contrastText",
          fontWeight: "700"
      }}>
        PROFESSIONAL EXPERIENCE
      </Box>

      <Box
        sx={{
          mb: 2
      }}>

        {Object.values(workMap).map((jobs : Work[], index: number) => (
            <Box
              key={"workItem" + index}
              sx={{
                mt: 1,
                mb: 3,
                alignItems: "left",
                justifyItems: "left"
              }}
            >
              <PDFWorkItem roles={jobs} />
            </Box>
        ))}

      </Box>


    </>

  )
}
export default PDFWork;