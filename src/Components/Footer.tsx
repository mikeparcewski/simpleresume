import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Profile, SimpleResume } from '../Objects/SimpleResume';
import * as Config from '../Components/SiteConfig'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';


const Footer = (config: SimpleResume) => {

  return (
    <>

      <Box 
        display="flex"
        flexDirection="column"
        sx={{ 
          py: '2rem',
          bgcolor: 'primary.main',
          alignItems: 'center',
      }}>

        <Box>

          <Typography
            sx={{
              fontSize: '3vmax',
              fontWeight: 800,
              display: 'block',
              color: 'primary.contrastText',
          }}>
            LEARN MORE
          </Typography>

        </Box>

        <Box
          justifyItems="center"
          sx={{
            mt: 1,
            color: 'primary.contrastText',
            justifyContent: 'center',
            alignContent: 'center'
        }}>

          {config.resume?.basics.profiles?.map((profile: Profile) => (

            <IconButton
              key={profile.network}
              sx={{ 
                px: "2vmax", 
                color: "primary.contrastText",
                fontSize: '3vmax',
                fontWeight: "800",
              }}
              onClick={() => window.location.href = profile.url}
            >

                <FontAwesomeIcon 
                  aria-label={profile.network}
                  icon={[ 
                      config && config.getIconPrefix ? config.getIconPrefix(profile.network) : Config.DEF_ICONDETAIL?.clz as IconPrefix, 
                      config && config.getIconName ? config.getIconName(profile.network) : Config.DEF_ICONDETAIL?.name as IconName
                  ]} 
                />
            </IconButton>
          ))}

        </Box>

        <Box
          sx={{
            mt: "1vmax",
            mx: "1vmax",
            color: "primary.contrastText",
            maxWidth: "80%",
          }}
        >
            This template is open source.  Build your own&nbsp; 
            <Link 
              sx={{ color: "primary.contrastText", textDecoration: "underline" }}
              href="https://github.com/mikeparcewski/simpleresume"
              underline="always"
            >portfolio today</Link>!
        </Box>

      </Box>

    </>

  )
}

export default Footer;

