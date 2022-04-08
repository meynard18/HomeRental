import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import FeaturedCards from './FeaturedCards';

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
                  sx={{ fontWeight: 500, fontSize: 40, mt: 1 }}
               >
                  Lorem Ipsum Homes
               </Typography>
            </HeaderBox>
            <FeaturedCards />
         </StyledBox>
      </>
   );
};

export default Featured;

const StyledBox = styled(Box)`
   // background-color: ${theme.palette.bg.main};
   background: -moz-linear-gradient(
      top,
      ${theme.palette.bg.main} 50%,
      ${theme.palette.grey[500]} 50%
   );
   background: -webkit-linear-gradient(
      top,
      ${theme.palette.bg.main} 50%,
      ${theme.palette.grey[500]} 50%
   );
   background: linear-gradient(
      to bottom,
      ${theme.palette.bg.main} 50%,
      ${theme.palette.grey[500]} 50%
   );
   padding-bottom: 5rem;
   margin-top: -1.25rem;
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
   padding-top: 5.5rem;
   padding-left: 2.5rem;
   width: 90%;
   @media (max-width: 360px) {
      margin: 0 -0.5rem;
   }
`;
