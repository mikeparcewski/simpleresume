import React, {  } from 'react';
import { Box, Typography } from '@mui/material';
import { Profile, Resume, SimpleResume } from '../../Objects/SimpleResume';
 
const PDFHeader = (site: SimpleResume) => {

    const resume: Resume = site.resume!;



    return (

      <>

        <Box
          sx={{
            borderBottom: 1,
            display: "flex"
        }}>

          { resume.basics.name.split(" ").map((part: string, index: number) => (

            <Typography
              key={ "namepart" + index}
              variant="h4"
              sx={{
                mr: 1,
                fontWeight: index%2 ? "700" : "300",
                color: index%2 ? "primary.main" : "primary.contrastText"
            }}>
              {part.toLocaleUpperCase()}
            </Typography>

          ))}

        </Box>

       { site.resume?.basics.email && 
         site.resume?.basics.url &&
         resume.basics.profiles &&
         resume.basics.profiles.length > 0 &&

        <Box
          sx={{
            display: "flex",
            mt: 1.2,
            fontSize: ".8vmax"
        }}>

          { site.resume?.basics.email && 
            <Box>
              {site.resume?.basics.email}
            </Box>
          } 


          { site.resume?.basics.url &&
            <Box
              sx={{
                ml: 1,
                borderLeft: 1,
                pl: 1
            }}>
              {site.resume?.basics.url}
            </Box>
          }

          <Box
            sx={{
              flexGrow: 1,
          }}>

            <Box 
              sx={{
                display: "flex",
                justifyContent: "right"
            }}>

              { resume.basics.profiles?.filter((profile: Profile, index: number) => {
                  return profile.url.startsWith("http")
                }).map((profile, index) => (

                <Box 
                  key={"profile" + index}
                  sx={{
                    ml: 2,
                    borderLeft: index === 0 ? 0 : 1,
                    pl: 2
                }}>
                    <strong>{profile.network}</strong>: <em>{profile.username}</em>
                </Box> 

              ))}

            </Box>
          </Box>

        </Box>

      }

      </>

    )
}
export default PDFHeader;