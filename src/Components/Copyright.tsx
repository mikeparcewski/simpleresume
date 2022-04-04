import React from 'react';
import { Container, Typography } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';
 
const Copyright = (resume: SimpleResume) => {
    return (

      <>

        <Container 
          maxWidth={false}
          sx={{ 
            py: '1rem',
            bgcolor: 'secondary.main',
            display: 'flex',
            justifyContent: "center",
        }}>

          <Typography
            sx={{
              color: 'secondary.contrastText',
              fontSize: "1.5vmax",
              fontWeight: "700",
            }}>
            © Copyright {new Date().getFullYear()} {resume.siteName}
          </Typography>

        </Container>

      </>

    )
}
export default Copyright;