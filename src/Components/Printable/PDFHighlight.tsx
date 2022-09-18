import React, {  } from 'react';
import { Box } from '@mui/material';
import { Highlight } from '../../Objects/SimpleResume';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SectionData {
  highlights: Highlight[];
  compId: string;
  separator?: string;
  iconName?: string;
  iconPrefix?: string;
  header: string;
}
 
const PDFHighlight = (data: SectionData) => {

    const highlights: Highlight[] = data.highlights;

    return (

      <>

        { highlights && 
          highlights.length > 0 && 

          <Box 
            sx={{
              mt: 2
          }}>

            <Box
              sx={{
                borderBottom: 1,
                fontSize: "1.3vmax",
                mb: 1,
                color: "primary.contrastText",
                fontWeight: "700"
            }}>
              {data.header.toUpperCase()}
            </Box>

            {data.highlights.map((highlight: Highlight, index: number) => (

                <Box 
                  key={data.compId + "row" + index}
                  sx={{
                    display: "flex",
                    my: .6,
                    fontSize: ".9vmax",
                }}>

                  { data.iconName &&
                    <Box
                      sx={{
                    }}>
                      <FontAwesomeIcon
                        key={data.compId + "icon" + index}
                        fontSize=".7vmax"
                        icon={[
                          data.iconPrefix as IconPrefix,
                          data.iconName as IconName
                      ]}/>
                    </Box>
                  }

                  <Box
                    sx={{
                      pl: data.iconName ? .5 : 0
                  }}>
                    <strong>{highlight.name} {data.separator!}</strong> {highlight.summary}
                  </Box>
    
                </Box>

              ))}

          </Box>

        }

      </>

    )
}
export default PDFHighlight;