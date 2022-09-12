import * as React from 'react';

import { Box, Typography } from '@mui/material';
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
            sx={{ alignItems: "center", mx: '1vmax' }}>
            <Typography
              sx={{
                fontSize: "3vmax",
                fontWeight: "700",
                color: 'primary.main',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}>
                &lt; {props.title} /&gt;
            </Typography>              
          </Box>        


        </Box>

      </>

    )
}

export default SimpleHeader;