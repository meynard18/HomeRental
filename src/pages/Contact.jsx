import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import contactUs from '../images/contactUs.jpg';
import { Box, Typography, CardMedia, Button } from '@mui/material';

const Contact = () => {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [errorName, setErrorName] = useState('');
   const [errorEmail, setErrorEmail] = useState('');
   const [errorNumber, setErrorNumber] = useState('');

   const nameInput = useRef();
   const emailInput = useRef();
   const phoneInput = useRef();

   const textCheck = /[a-zA-z]{2}/;
   const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const phoneNumberCheck = /\(?\d{3}\)?? *\d{3}? *?\d{4}/;

   let inputName = fullName;
   let inputEmail = email;
   let inputPhoneNumber = phoneNumber;

   const clearInput = () => {
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setErrorName('');
      setErrorEmail('');
      setErrorNumber('');
   };
   const handleSubmit = (e) => {
      e.preventDefault();

      if (!textCheck.test(inputName)) {
         // nameInput.focus();
         nameInput.current.focus();
         return setErrorName('This Field is Required');
      }

      if (!emailCheck.test(inputEmail)) {
         emailInput.current.focus();
         return setErrorEmail('Enter a valid email address');
      }

      if (!phoneNumberCheck.test(inputPhoneNumber)) {
         phoneInput.current.focus();
         return setErrorNumber('Enter a valid phone number');
      }
      alert('Message Sent');
      clearInput();
   };
   const handleName = (e) => {
      setFullName(e.target.value);
      if (textCheck.test(inputName)) return setErrorName('');
   };

   const handleEmail = (e) => {
      setEmail(e.target.value);
      if (emailCheck.test(inputEmail)) {
         return setErrorEmail('');
      }
   };

   const handlePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
      if (phoneNumberCheck.test(inputPhoneNumber)) {
         return setErrorNumber('');
      }
   };

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
                     We look forward to hearing from you!
                  </TypographySub2>
                  <StyledForm onSubmit={handleSubmit}>
                     <InputBoxes>
                        <StyledLabel htmlFor="">Name</StyledLabel>
                        <br />
                        <StyledInput
                           ref={nameInput}
                           type="text"
                           value={fullName}
                           onChange={handleName}
                        />
                        <StyledSpan>{errorName}</StyledSpan>
                     </InputBoxes>
                     <InputBoxes>
                        <StyledLabel htmlFor="">Email Address</StyledLabel>
                        <br />
                        <StyledInput
                           ref={emailInput}
                           type="text"
                           value={email}
                           onChange={handleEmail}
                        />
                        <StyledSpan>{errorEmail}</StyledSpan>
                     </InputBoxes>
                     <InputBoxes>
                        <StyledLabel htmlFor="">Phone</StyledLabel>
                        <br />
                        <StyledInput
                           ref={phoneInput}
                           type="text"
                           value={phoneNumber}
                           onChange={handlePhoneNumber}
                        />
                        <StyledSpan>{errorNumber}</StyledSpan>
                     </InputBoxes>
                     <StyledButton type="submit" variant="contained">
                        Submit
                     </StyledButton>
                  </StyledForm>
               </FormContainer>
               <ImageBox>
                  <StyledCardMedia
                     component="img"
                     image={contactUs}
                     alt="office lobby"
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
   width: 80%;
   margin: 2.5rem auto auto;
   height: 40rem;
   background-color: white;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

   @media (max-width: 1024px) {
      height: 35rem;
   }
   @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
   }
   @media (max-width: 360px) {
      width: 95%;
   }
`;
const FormContainer = styled(Box)`
   // padding: 0 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   // flex-basis: 1;
   width: 100%;
   @media (max-width: 768px) {
      width: 100%;
      padding: 4rem 2rem;
   }
`;
const ImageBox = styled(Box)`
   width: 100%;
`;
const StyledCardMedia = styled(CardMedia)`
   height: 100%;
`;
const InputBoxes = styled(Box)`
   padding: 0.5rem 0 0 0;
`;
const TypographySub1 = styled(Box)`
   font-size: 1.5rem;
   font-weight: 500;
   @media (max-width: 360px) {
      text-align: center;
   }
`;
const StyledForm = styled.form`
   width: 25rem;
   padding: 1rem;

   @media (max-width: 1024px) {
      width: 85%;
   }
   @media (max-width: 768px) {
      width: 95%;
   }
   @media (max-width: 480px) {
      width: 100%;
      padding: 1rem 0.5rem;
   }
`;
const StyledLabel = styled.label`
   font-size: 0.875rem;
   color: ${theme.palette.grey[700]};
`;
const StyledInput = styled.input`
   width: 100%;
   height: 2.15rem;
   border: 1px solid ${theme.palette.grey[500]};
   border-radius: 2px;
   @media (max-width: 360px) {
      width: 100%;
   }
`;
const TypographySub2 = styled(Box)`
   font-size: 1rem;
   color: ${theme.palette.grey[400]};
   @media (max-width: 360px) {
      text-align: center;
   }
`;

const StyledButton = styled(Button)`
   border-radius: 0px;
   width: 100%;
   margin: 1.25rem auto auto auto;
   border-radius: 2px;
   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
`;

const StyledSpan = styled.span`
   color: red;
   font-weight: 500;
`;
