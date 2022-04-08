import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';

const Featured = () => {
   return (
      <>
         <StyledBox maxWidth="xxl" sx={{ m: 'auto' }}>
            <HeaderBox>
               <FlexFeatured>
                  <Line sx={{ mr: 2 }} />
                  <Typography
                     variant="h4"
                     component="h4"
                     sx={{ fontWeight: 500, fontSize: 24 }}
                  >
                     Featured
                  </Typography>
               </FlexFeatured>
               <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 600, fontSize: 42, mt: 1 }}
               >
                  Lorem Ipsum Homes
               </Typography>
            </HeaderBox>
         </StyledBox>
      </>
   );
};

export default Featured;

const StyledBox = styled(Box)`
   background-color: ${theme.palette.bg.main};
   margin-top: -1.25rem;
   height: 100vh;
`;
const FlexFeatured = styled(Box)`
   display: flex;
   align-items: center;
`;
const Line = styled(Box)`
   width: 2.75rem;
   height: 0.25rem;
   background-color: black;
`;

const HeaderBox = styled(Box)`
   margin: auto;
   padding-top: 4rem;
   padding-left: 2rem;
   width: 90%;
`;