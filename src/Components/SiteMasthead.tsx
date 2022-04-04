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
            py: '5vmax',
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
              my: 1
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
                fontWeight: "700",
            }}>
              {props && props.name!.toUpperCase()}
            </Box>

            <Box
              sx={{
                fontSize: '2vmax',
                fontFamily: 'Montserrat',
                color: 'primary.contrastText',
                fontWeight: "700",
            }}>
              {props && props.callOut}
            </Box>

          </Box>

        </Container>

      </>
 
    );
}
export default SiteMasthead;