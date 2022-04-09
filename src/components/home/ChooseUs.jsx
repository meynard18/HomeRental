import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import ChooseItems from './ChooseItems';
import image from '../../images/chooseus.jpg';
import { CardMedia } from '@mui/material';

const ChooseUs = () => {
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
                     Why Choose Us?
                  </Typography>
               </FlexHeader>
               <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 500, fontSize: 40, mt: 1 }}
               >
                  We Provide Properties That You Need
               </Typography>
            </HeaderBox>
            <FlexContainer>
               <ItemBox>
                  <ChooseItems />
               </ItemBox>
               <ImageBox>
                  <StyledCardMedia
                     component="img"
                     //  height="450"
                     image={image}
                     alt="Contract signing, agent holder a home figurine"
                  />
               </ImageBox>
            </FlexContainer>
         </StyledBox>
      </>
   );
};

export default ChooseUs;

const StyledBox = styled(Box)`
   background-color: ${theme.palette.bg.main};
   margin-top: -1.25rem;
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
const FlexHeader = styled(Box)`
   display: flex;
   align-items: center;
`;

const FlexContainer = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   margin-top: 3.5rem;
   padding-bottom: 4rem;
   @media (max-width: 992px) {
      flex-direction: column;
   }
`;

const ItemBox = styled(Box)`
   flex-basis: 1;
   background-color: lightblue;
   width: 35rem;
   @media (max-width: 768px) {
      width: 90%;
   }
`;

const ImageBox = styled(Box)`
   width: 35rem;
   position: relative;
   @media (max-width: 768px) {
      width: 90%;
   }

   &:before {
      content: '';
      position: absolute;
      background-color: rgba(216, 192, 147, 0.2);
      width: 100%;
      height: 100%;
      z-index: 2;
   }
`;

const StyledCardMedia = styled(CardMedia)`
   height: 28.5rem;
   object-fit: cover;
   @media (max-width: 360px) {
      height: 100%;
   }
`;
