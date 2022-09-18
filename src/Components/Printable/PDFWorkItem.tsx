import React, {  } from 'react';
import { Box, Typography } from '@mui/material';
import { Work } from '../../Objects/SimpleResume';
import { format } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';


const PDFWorkItem: React.FC<{roles: Work[]}> = ({roles}) => {

  roles.sort((a, b) => b.startDate.localeCompare(a.startDate));
  let highlights : string[] = [];
  roles.forEach((role: Work, index: number) => highlights = highlights.concat(role.highlights) )


  return (

    <>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 2
        }}
      >

        <Typography 
          sx={{
            fontSize: "1.1vmax",
            fontFamily: "Montserrat",
            fontWeight: "700",
        }}>
          {roles[0].name} | {roles[0].location} 
        </Typography>

        {roles.map((role: Work, index: number) => (
           
          <Box
            key={"roletit" + index}
            sx={{
              display: "flex",
              fontSize: ".9vmax",
              fontWeight: "500",
              width: "100%"
          }}>

            <Box 
              sx={{ 
                width: "80%",
            }}>
              {role.position}
            </Box>
            <Box 
              sx={{ 
                width: "20%",
            }}>
              <em>{ dateFormat(role.startDate) } to { dateFormat(role.endDate) }</em>
            </Box>

          </Box>

        ))}

        <Box
          sx={{
          fontSize: "1vmax",
          my: 1.5
        }}>
          { roles[0].summary}
        </Box>

        {highlights.map((highlight: string, index: number) => (

          <Box 
          key={"workhighrow" + index}
          sx={{
            display: "flex",
            my: .5,
            pl: 2,
            fontSize: "1vmax",
          }}>

            <Box
              sx={{
              fontSize:".6vmax",
              pt: .4
            }}>
              <FontAwesomeIcon 
                icon={["fa-solid" as IconPrefix, "fa-chevron-right" as IconName]} 
              />
            </Box>

            <Box
              sx={{
                pl: 1,
                width: "95%"
            }}>
              {highlight}
            </Box>

          </Box>            

        ))}

      </Box>

    </>

  )
}
export default PDFWorkItem;

function dateFormat(date : string) : string {
  if (date === "") return "Current";
  return format(new Date(date), "LLL yyyy");
}