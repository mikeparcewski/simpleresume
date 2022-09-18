import React from 'react';
import ReactRoundedImage from 'react-rounded-image'
import { Box, Container } from '@mui/material';
import { SimpleResume } from '../Objects/SimpleResume';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const SiteMasthead = (props: SimpleResume) => {

  const titles : string[] =  props.resume?.basics?.titles!;
  let embedded = "<" + titles[0].replaceAll(" ", "_") + ">\n";
  titles.slice(1).map((title : string, index : number) => (
    embedded += "   <" + title.replaceAll(" ", "_") + " />\n"
  ));
  if (titles) embedded += "</" + titles[0].replaceAll(" ", "_") + ">";

  const codeStyle : Object = {
    fontSize: "1.3vmax"
  }

    return (

      <>

        <Container 
          maxWidth={false}
          sx={{ 
            pt: '3vmax',
            bgcolor: 'warning.main',
            display: 'flex',
            justifyContent: 'center',
        }}>

          <Box
            display="flex"
            flexWrap="wrap"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
          }}>
            
            <Box
              sx={{
                pb: '3vmax'
              }}
            >
              <ReactRoundedImage
                image={require('../Customize/masthead-lead.gif')} 
                alt={props.siteTitle}
                roundedSize="13"
                imageWidth="230"
                imageHeight="230"
              ></ReactRoundedImage>
            </Box>

            <Box
              sx={{
                ml: { xs: 0, md: 6 },
                pb: '3vmax',
                maxWidth: "95%"
            }}>

              <SyntaxHighlighter language="xml" style={vs2015} showLineNumbers={false} customStyle={ codeStyle }>
                  {embedded}
              </SyntaxHighlighter>

            </Box>            

          </Box>

        </Container>

      </>
 
    );
}
export default SiteMasthead;