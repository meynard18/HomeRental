import React from 'react';
import { theme } from '../../CustomTheme';
import styled from '@emotion/styled';
import aboutUs2 from '../../images/about2.jpg';
import { Box, Typography } from '@mui/material';

const MissionStatement = () => {
   return (
      <>
         <StyledBox maxWidth="xxl" sx={{ m: 'auto' }}>
            <ContentBox>
               <FlexHeader>
                  <Line sx={{ mr: 2 }} />
                  <StyledHeader
                     variant="h3"
                     component="h3"
                     sx={{ fontWeight: 500, fontSize: 40, color: 'white' }}
                  >
                     Mission Statement
                  </StyledHeader>
                  <Line sx={{ ml: 2 }} />
               </FlexHeader>
               <TypographyBox>
                  <StyledTypography variant="body1" component="div">
                     “Our mission is to provide the consumer with the highest
                     level of service of any Real Estate company thereby
                     ensuring that properties are leased in an exemplary manner.
                     We endeavor to deliver professional service to clients and
                     customers so that transactions are completed to the
                     satisfaction of all concerned.”
                  </StyledTypography>
               </TypographyBox>
            </ContentBox>
         </StyledBox>
      </>
   );
};

export default MissionStatement;

const StyledBox = styled(Box)`
   background-image: url(${aboutUs2});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   position: relative;
   z-index: 10;
   margin-top: 4rem;
   &::before {
      content: '';
      position: absolute;
      background-color: rgba(35, 35, 35, 0.9);
      z-index: -1;
      width: 100%;
      height: 100%;
   }
`;

const ContentBox = styled(Box)`
   padding: 2.5rem;
`;

const FlexHeader = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Line = styled(Box)`
   width: 4.5rem;
   height: 0.15rem;
   background-color: white;
`;

const TypographyBox = styled(Box)`
   margin: 1.5rem auto;
   width: 50rem;
   @media (max-width: 768px) {
      width: 95%;
   }
`;

const StyledHeader = styled(Typography)`
   @media (max-width: 480px) {
      text-align: center;
   }
`;

const StyledTypography = styled(Typography)`
   font-size: 1.15rem;
   color: white;
   line-height: 2;
   @media (max-width: 768px) {
      text-align: center;
   }
`;
