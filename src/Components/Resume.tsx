import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { SimpleResume, Work } from '../Objects/SimpleResume';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';
import SimpleHeader, { SimpleHeaderParams } from './SimpleHeader';
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from '@mui/system';

const Resume = (props: SimpleResume) => {

    let headerParams : Partial<SimpleHeaderParams> = {
      title: props.getProfilePageTitle && props.getProfilePageTitle("Work"),
      conf: props
    };

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (

      <>

        <SimpleHeader {...headerParams} />

        <Timeline 
          position={isMd ? "alternate" : "right" }
          sx={{
            mb: '4vmax',
            mx: { xs: 0, md: "5vmax" },
            p: 0,
          }}
        >

          {props.resume?.work.map((work : Work, index : number) => (

            <TimelineItem 
              key={ "tli" + index } 
            >

              <TimelineOppositeContent
                sx={{ 
                  m: "auto 0",
                  display: { xs: "none", md: "block" }
                }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: '700' }}>
                  { work.name }{ work.location && " - " + work.location}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: ".9rem" }}>
                  { dateFormat(work.startDate) } to { dateFormat(work.endDate) }
                </Typography>
              </TimelineOppositeContent>

            <TimelineSeparator>

              <TimelineConnector />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    p: "1vmax", 
                    borderRadius: 20,
                    transform: index%2 === 0 || !isMd ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
                >
                  <FontAwesomeIcon 
                    fontSize="1vmax"
                    icon={ faPlay as IconProp } 
                  />
                </Box>     

              <TimelineConnector />

            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>

              <Box
                sx={{
                  boxShadow: 20
                }}
              >

                <Box
                  sx={{ 
                    display: { xs: "block", md: "none" },
                    color: "secondary.contrastText",
                    p: "2vmax",
                    backgroundColor: "secondary.main",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: '700' }}>
                    { work.name }{ work.location && " - " + work.location}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: ".9rem" }}>
                    { dateFormat(work.startDate) } to { dateFormat(work.endDate) }
                  </Typography>
                </Box>

                <Box
                  sx={{ 
                    p: { xs: "2vmax", md: "1.5vmax" },
                  }}
                >
                  <Typography variant="h6" component="span" fontWeight={700} sx={{ fontSize: "1.2rem" }}>
                    { work.position }
                  </Typography>
                  { work.summary && 
                    <Typography>{work.summary}</Typography>
                  }
                </Box>          

              </Box>

            </TimelineContent>

            </TimelineItem>

          ))}

        </Timeline>

      </>

    )
}
export default Resume;

function dateFormat(date : string) : string {
  if (date === "") return "Current";
  return format(new Date(date), "LLL yyyy");
}