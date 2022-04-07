import React from 'react';
import {
   Box,
   InputLabel,
   FormControl,
   OutlinedInput,
   Select,
   MenuItem,
   Button,
} from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';

const SearchBox = () => {
   return (
      <Box>
         <BoxContainer>
            <form>
               <StyledFormControl>
                  <InputLabel htmlFor="City">Location</InputLabel>
                  <Select label="Location">
                     <MenuItem>San Diego</MenuItem>
                     <MenuItem>LA</MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bedroom">Bedroom</InputLabel>
                  <Select label="Beds">
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>1 Bedroom</MenuItem>
                     <MenuItem>2 Bedroom</MenuItem>
                     <MenuItem>3 Bedroom</MenuItem>
                     <MenuItem>4 Bedroom</MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bathroom">Bathroom</InputLabel>
                  <Select label="Beds">
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>1 Bathroom</MenuItem>
                     <MenuItem>2 Bathroom</MenuItem>
                     <MenuItem>3 Bathroom</MenuItem>
                     <MenuItem></MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Price">Price</InputLabel>
                  <Select label="Price">
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>$0-$999</MenuItem>
                     <MenuItem>$1000-$1999</MenuItem>
                     <MenuItem>$2000-$2999</MenuItem>
                     <MenuItem>$3000-$3999</MenuItem>
                     <MenuItem>$4000+</MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledButton>Show Result</StyledButton>
            </form>
         </BoxContainer>
      </Box>
   );
};

export default SearchBox;
const BoxContainer = styled(Box)`
   background-color: ${theme.palette.grey[500]};
   width: 80%;
   height: 6rem;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const StyledFormControl = styled(FormControl)`
   background-color: white;
`;

const StyledButton = styled(Button)`
   background-color: ${theme.palette.black[500]};
   border-radius: 0px;
   color: white;
   &:hover: {
      background-color: ;
   }
`;
