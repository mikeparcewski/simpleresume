import * as React from 'react';

import { Box } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';

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

          <Box
            sx={{ 
              display: "flex",
              alignItems: "center", 
              mx: '1vmax'
            }}>

            <Box
              sx={{
                display: "flex",
                fontSize: "3vmax",
                fontWeight: "700",
                lineHeight: 1,
                color: 'secondary.main',
                textTransform: 'uppercase'                
              }}>
                &lt;&nbsp;
            </Box>


            <Box
              sx={{
                display: "flex",
                fontSize: "3.5vmax",
                fontWeight: "700",
                lineHeight: 1,
                color: 'warning.main',
                textTransform: 'uppercase'                
              }}>
                {props.title}
            </Box>

            <Box
              sx={{
                display: "flex",
                fontSize: "3vmax",
                fontWeight: "700",
                lineHeight: 1,
                color: 'secondary.main',
                textTransform: 'uppercase'                
              }}>
                &nbsp;/&gt;
            </Box>        
          </Box>        


        </Box>

      </>

    )
}

export default SimpleHeader;