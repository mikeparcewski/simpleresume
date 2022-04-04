import React from 'react';
import { Box, Divider, Icon, Typography } from '@mui/material';
import { MainSection } from '../Objects/SimpleResume';
 
const AboutSection = (props: MainSection) => {

    return (
      <>

        <Box>

          <Typography
            sx={{
              fontSize: "3vmax",
              fontWeight: "700",
              color: 'primary.main',
              textTransform: 'uppercase',
              lineHeight: 1,
              mt: '4vmax',
            }}>
            {props.name}            
          </Typography>

        </Box>

        <Box
          display="flex"
          flexDirection="row"
          sx={{
            alignItems: 'center',
            my: 1
        }}>

          <Box>
            <Divider 
              sx={{ 
                borderBottomWidth: 5, 
                backgroundColor: 'primary.main',
                color: 'primary',
                width: '8vmax',
            }}/>
          </Box>

          <Box>
            <Icon
              sx={{
                mx: 2,
                fontSize: '4vmax',
              }}
            >
              {props.iconName}
            </Icon>
          </Box>

          <Box>
            <Divider 
              sx={{ 
                borderBottomWidth: 5, 
                backgroundColor: 'primary.main',
                color: 'primary',
                width: '8vmax',
            }}/>
          </Box>

        </Box>

        <Box sx={{maxWidth: { sm: "70%", md: "40%" }, mx: "4vmax" }}>
          {props.description}
        </Box>    

      </>

    )
}
export default AboutSection;