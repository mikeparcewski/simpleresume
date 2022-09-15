import React from 'react';
import ReactRoundedImage from 'react-rounded-image'
import { Box, Container } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';

const SiteMasthead = (props: SimpleResume) => {

    return (

      <>

        <Container 
          maxWidth={false}
          sx={{ 
            pt: '3vmax',
            bgcolor: 'warning.main',
            display: 'flex',
            justifyContent: 'center',
        }}>

          <Box
            display="flex"
            flexWrap="wrap"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
          }}>
            
            <Box
              sx={{
                pb: '3vmax'
              }}
            >
              <ReactRoundedImage
                image={require('../Customize/masthead-lead.gif')} 
                alt={props && props.masthead?.youngAlt}
                roundedSize="13"
                imageWidth="230"
                imageHeight="230"
              ></ReactRoundedImage>
            </Box>

            <Box
              sx={{
                fontSize: '1.4vmax',
                color: 'primary.contrastText',
                fontWeight: "700",
                ml: 3,
                pb: '3vmax'
            }}>

              &lt; {props.resume?.basics?.titles && props.resume?.basics?.titles[0].replaceAll(" ", "_") } &gt;

              {props.resume?.basics?.titles!
                .slice(1)
                .map((title : string, index : number) => (
                  <Box 
                    key={"titles" + index}
                    sx={{
                      my: 1.3
                  }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; {title.replaceAll(" ", "_")} /&gt;
                  </Box>
              ))}

              &lt;/ {props.resume?.basics?.titles && props.resume?.basics?.titles[0].replaceAll(" ", "_") } &gt;

            </Box>            

          </Box>

        </Container>

      </>
 
    );
}
export default SiteMasthead;