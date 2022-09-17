import React, {  } from 'react';
import { Box } from '@mui/material';
import { Resume } from '../../Objects/SimpleResume';

const PDFWork = (resume: Resume) => {

  return (

    <>

      <Box
        sx={{
          borderBottom: 1,
          fontSize: "1.3vmax",
      }}>
        PROFESSIONAL EXPERIENCE
      </Box>

      <Box
        sx={{
          mb: 2
      }}>
        TODO
      </Box>


    </>

  )
}
export default PDFWork;