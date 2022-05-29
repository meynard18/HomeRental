import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import contactUs from '../images/contactUs.jpg';
import { Box, Typography, CardMedia, Button } from '@mui/material';

const Contact = () => {
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
                     Our Information
                  </Typography>
               </FlexHeader>
               <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 500, fontSize: 40, mt: 1 }}
               >
                  Contact Us
               </Typography>
            </HeaderBox>
            <FlexContainer>
               <FormContainer>
                  <TypographySub1 variant="subtitle1" component="div">
                     Get In Touch With Us
                  </TypographySub1>
                  <TypographySub2 variant="subtitle2" component="div">
                     We look forward hearing from you!
                  </TypographySub2>
                  <StyledForm action="">
                     <InputBoxes>
                        <StyledLabel htmlFor="">Name</StyledLabel>
                        <br />
                        <StyledInput type="text" />
                     </InputBoxes>
                     <InputBoxes>
                        <StyledLabel htmlFor="">Email Address</StyledLabel>
                        <br />
                        <StyledInput type="text" />
                     </InputBoxes>
                     <InputBoxes>
                        <StyledLabel htmlFor="">Phone</StyledLabel>
                        <br />
                        <StyledInput type="text" />
                     </InputBoxes>
                     <StyledButton type="submit" variant="contained">
                        Submit
                     </StyledButton>
                  </StyledForm>
               </FormContainer>
               <ImageBox>
                  <StyledCardMedia
                     component="img"
                     //  height="450"
                     image={contactUs}
                     alt="Great Building Architecture"
                  />
               </ImageBox>
            </FlexContainer>
         </StyledBox>
      </>
   );
};

export default Contact;

const StyledBox = styled(Box)`
   background-color: ${theme.palette.bg.main};
   padding-bottom: 5rem;
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

const FlexContainer = styled(Box)`
   display: flex;
   justify-content: center;
   width: 85%;
   margin: 2.5rem auto auto;
   background-color: white;
   height: 25rem;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
   }
   @media (max-width: 360px) {
      width: 95%;
   }
`;
const FormContainer = styled(Box)`
   width: 35rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media (max-width: 768px) {
      width: 100%;
      padding: 1.25rem 0;
   }
`;
const ImageBox = styled(Box)`
   width: 35rem;
   @media (max-width: 768px) {
      width: 100%;
   }
`;
const StyledCardMedia = styled(CardMedia)`
   height: 100%;
   @media (max-width: 768px) {
      height: auto;
   }
`;
const InputBoxes = styled(Box)`
   padding: 0.5rem 0 0 0;
`;
const TypographySub1 = styled(Box)`
   font-size: 1.5rem;
   font-weight: 500;
`;
const StyledForm = styled.form`
   padding: 1rem;
   @media (max-width: 360px) {
      width: 100%;
   }
`;
const StyledLabel = styled.label`
   font-size: 0.875rem;
   color: ${theme.palette.grey[700]};
`;
const StyledInput = styled.input`
   width: 17rem;
   height: 2rem;
   border: 1px solid ${theme.palette.grey[500]};
   border-radius: 2px;
   @media (max-width: 360px) {
      width: 100%;
   }
`;
const TypographySub2 = styled(Box)`
   font-size: 1rem;

   color: ${theme.palette.grey[400]};
`;

const StyledButton = styled(Button)`
   border-radius: 0px;
   width: 100%;
   margin: 1rem auto auto auto;
   border-radius: 2px;
   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
`;
