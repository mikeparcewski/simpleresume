import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';
import ReactRoundedImage from 'react-rounded-image'

export type SimpleHeaderParams = {
  title?: string;
  conf?: SimpleResume;
}
 
const SimpleHeader = (props: SimpleHeaderParams) => {

    return (

      <>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: '4vmax',
            mb: '1vmax',
            flexWrap: 'wrap'
          }}
        >

          <Box>
            <ReactRoundedImage
              image={require('../Customize/avatar.png')} 
              alt={props.conf!.masthead?.youngAlt}
              roundedSize="13"
              imageWidth="60"
              imageHeight="60"
            ></ReactRoundedImage>        
          </Box>  
          <Box
            sx={{ alignItems: "center", mx: '1vmax' }}>
            <Typography
              sx={{
                fontSize: "3vmax",
                fontWeight: "700",
                color: 'primary.main',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                {props.title}
            </Typography>              
          </Box>

          <Box>
            <ReactRoundedImage
              image={require('../Customize/avatar-old.png')} 
              alt={props.conf!.masthead?.todayAlt}
              roundedSize="13"
              imageWidth="60"
              imageHeight="60"
            ></ReactRoundedImage>        
          </Box>  

        </Box>

      </>

    )
}

export default SimpleHeader;