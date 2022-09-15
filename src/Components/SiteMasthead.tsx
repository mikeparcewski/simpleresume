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
            pb: '3vmax',
            bgcolor: 'warning.main',
            display: 'flex',
            justifyContent: 'center',
        }}>

          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
          }}>
            
            <Box>
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
                mt: '1vmax',
                fontSize: '3vmax',
                fontFamily: 'Montserrat',
                color: 'primary.contrastText',
                fontWeight: "700"
            }}>
              {props && props.resume!.basics!.name!.toUpperCase()}
            </Box>

            <Box
              sx={{
                display: "flex",
                fontSize: '1.2vmax',
                fontFamily: 'Montserrat',
                color: 'primary.main',
                fontWeight: "700",
                mt: 1.5
            }}>

              {props.resume?.basics?.titles!.map((title : string, index : number) => (
                  <Box 
                    key={"titles" + index}
                    sx={{
                      textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      width: 1/3
                  }}>
                    {title.toUpperCase()}
                  </Box>
              ))}
            </Box>            

          </Box>

        </Container>

      </>
 
    );
}
export default SiteMasthead;