import * as React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { theme } from '../CustomTheme';
import styled from '@emotion/styled';
import {
   Grid,
   OutlinedInput,
   Typography,
   InputLabel,
   FormControl,
   Paper,
   Box,
   Button,
   TextField,
} from '@mui/material';

export default function SpacingGrid() {
   return (
      <>
         <MainContainer maxWidth="xxl" sx={{ m: 'auto' }}>
            <Grid item xs={12}>
               <CopyrightsContainer>
                  Copyrights &copy; 2022 Company Name
               </CopyrightsContainer>
            </Grid>
         </MainContainer>
      </>
   );
}

const MainContainer = styled(Box)`
   background-color: ${theme.palette.bg.main};
`;

const StyledGrid = styled(Grid)`
   @media (max-width: 1024px) {
      padding: 2rem 0;
   }
   @media (max-width: 768px) {
      padding: 1rem;
   }
`;

const StyledPaper = styled(Paper)`
   background-color: ${theme.palette.bg.secondary};
   margin-top: 3.5rem;
   margin-bottom: 2.5rem;
   display: flex;
   flex-direction: column;
   border-radius: 0px;
   padding: 1rem;
   box-shadow: none;
   height: 16rem;
   @media (max-width: 1200px) {
      height: 17rem;
   }
   @media (max-width: 1024px) {
      margin: auto;
   }
   @media (max-width: 768px) {
      margin: auto;
      height: auto;
   }
   @media (max-width: 480px) {
      width: 80%;
      text-align: center;
   }
`;
const StyledButton = styled(Button)`
   border-radius: 0px;
   color: white;
   display: block;
   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
   @media (max-width: 768px) {
      width: 6rem;
   }
`;

const StyledTextField = styled(OutlinedInput)`
   background-color: white;
   width: 70%;
   height: auto;
   border-radius: 0px;
   @media (max-width: 1200px) {
      display: inline-block;
      align-items: center;
      width: 8rem;
   }
   @media (max-width: 1024px) {
      width: 60%;
   }
   @media (max-width: 768px) {
      width: 60%;
   }
   @media (max-width: 480px) {
      width: 90%;
   }
`;

const CopyrightsContainer = styled(Paper)`
   background-color: ${theme.palette.black[700]};
   color: white;
   padding: 1rem 0;
   border-radius: 0px;
   text-align: center;
`;

const IconBox = styled(Box)`
   @media (max-width: 480px) {
      justify-content: center;
   }
`;

const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${theme.palette.black[600]};
   margin: 0.175rem 0;
   font-weight: 500;
`;

const FlexContact = styled(Box)`
   display: flex;
   align-items: center;
`;
