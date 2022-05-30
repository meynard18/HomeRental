import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import aboutUs1 from '../images/about1.jpg';
import MissionStatement from '../components/about/MissionStatement';
import Team from '../components/about/Team';
import { Box, Typography, CardMedia } from '@mui/material';

const About = () => {
   return (
      <>
         <StyledBox maxWidth="xxl" sx={{ m: 'auto' }}>
            <HeaderBox>
               <FlexHeader>
                  <Line sx={{ mr: 2 }} />
                  <Typography
                     variant="h4"
                     component="h4"
                     sx={{ fontWeight: 500, fontSize: 24 }}
                  >
                     The Beginning
                  </Typography>
               </FlexHeader>
               <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 500, fontSize: 40, mt: 1 }}
               >
                  Our Story
               </Typography>
            </HeaderBox>
            <FlexContainer>
               <TypographyBox>
                  <StyledTypography variant="body1" component="div">
                     Southern California Real Estate is a Los Angeles based
                     professional real estate management firm that handles over
                     500+ properties, with the well-defined goal of securing
                     long term quality tenancies.
                  </StyledTypography>
                  <br />
                  <StyledTypography variant="body1" component="div">
                     Founded in 1985, Southern California Real Estate started
                     its roots in the commercial real estate industry. The
                     Founder, Jim Crawford, saw the importance of providing
                     quality property management to the booming residential real
                     estate industry. Together with his wife, Martha Stewhold a
                     real estate agent decided to turn their focus on helping
                     homewoners manage properties by finding quality tenants and
                     provide neccessary maintaince.
                  </StyledTypography>
                  <br />
                  <StyledTypography variant="body1" component="div">
                     Southrn California Real Estate understand how to properly
                     maintain rentals to attract the best tenant possible,
                     thereby protecting our property owners rental income and
                     property value.
                  </StyledTypography>
               </TypographyBox>
               <ImageBox>
                  <StyledCardMedia
                     component="img"
                     image={aboutUs1}
                     alt="Great Building Architecture"
                  />
               </ImageBox>
            </FlexContainer>
            <MissionStatement />
            <Team />
         </StyledBox>
      </>
   );
};

export default About;

const StyledBox = styled(Box)`
   background-color: ${theme.palette.bg.main};
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
const FlexHeader = styled(Box)`
   display: flex;
   align-items: center;
`;
const Line = styled(Box)`
   width: 2.75rem;
   height: 0.25rem;
   background-color: black;
`;

const TypographyBox = styled(Box)`
   width: 45rem;
   @media (max-width: 768px) {
      width: 100%;
      margin: auto;
   }
`;

const FlexContainer = styled(Box)`
   display: flex;
   width: 85%;
   margin: 2.5rem auto auto;
   gap: 3rem;
   @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 2rem;
   }
`;

const ImageBox = styled(Box)`
   width: auto;
   display: flex;
   align-items: center;
`;
const StyledCardMedia = styled(CardMedia)`
   object-fit: cover;
`;

const StyledTypography = styled(Typography)`
   font-size: 1rem;
   font-weight: 500;
`;
