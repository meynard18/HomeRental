import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import { PropertyContext } from './PropertiesContext';
import {
   Box,
   InputLabel,
   FormControl,
   OutlinedInput,
   Select,
   MenuItem,
   Button,
} from '@mui/material';

const locations = [
   'Any',
   'Pasadena',
   'Los Angeles',
   'San Diego',
   'Anaheim',
   'Orange County',
];

const SearchBox = () => {
   const {
      state: { location, property },
      dispatch,
   } = useContext(PropertyContext);

   const handleSubmit = (e) => {
      dispatch({
         type: 'SET_FILTERS',
         payload: e.preventDefault(),
      });
   };

   const handleLocation = (e) => {
      console.log(e.target.value);
      dispatch({
         type: 'SET_LOCATION',
         payload: e.target.value,
      });
   };

   const filterLocation = () => {
      console.log('needs to filter');
   };
   useEffect(() => {}, [property]);

   return (
      <MainContainer maxWidth="xxl" sx={{ m: 'auto' }}>
         <SearchContainer>
            <StyledFormContainer onSubmit={handleSubmit}>
               <StyledFormControl>
                  <InputLabel htmlFor="City">Location</InputLabel>
                  <Select
                     label="Location"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                     onChange={handleLocation}
                     value={location}
                  >
                     {locations.map((item, idx) => (
                        <MenuItem key={idx} value={item}>
                           {item}
                        </MenuItem>
                     ))}
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bedroom">Bedroom</InputLabel>
                  <Select
                     label="Beds"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                  >
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>1 Bedroom</MenuItem>
                     <MenuItem>2 Bedroom</MenuItem>
                     <MenuItem>3 Bedroom</MenuItem>
                     <MenuItem>4 Bedroom</MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bathroom">Bathroom</InputLabel>
                  <Select
                     label="Beds"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                  >
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>1 Bathroom</MenuItem>
                     <MenuItem>2 Bathroom</MenuItem>
                     <MenuItem>3 Bathroom</MenuItem>
                     <MenuItem></MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Price">Price</InputLabel>
                  <Select
                     label="Price"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                  >
                     <MenuItem value="any">Any</MenuItem>
                     <MenuItem>$0-$999</MenuItem>
                     <MenuItem>$1000-$1999</MenuItem>
                     <MenuItem>$2000-$2999</MenuItem>
                     <MenuItem>$3000-$3999</MenuItem>
                     <MenuItem>$4000+</MenuItem>
                  </Select>
               </StyledFormControl>
               <StyledButton type="submit">Show Result</StyledButton>
            </StyledFormContainer>
         </SearchContainer>
      </MainContainer>
   );
};

export default SearchBox;
const MainContainer = styled(Box)`
   background-color: ${theme.palette.bg.main};
   padding-top: 4rem;
`;
const SearchContainer = styled(Box)`
   background-color: ${theme.palette.grey[500]};
   width: 85%;
   margin: auto;
   padding: 1.5rem 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const StyledFormControl = styled(FormControl)`
   background-color: white;
   width: 100%;
   margin: auto 0.75rem;
`;

const StyledButton = styled(Button)`
   border-radius: 0px;
   width: 100%;

   background-color: ${theme.palette.black[500]};
   color: white;
   &:hover {
      background-color: darkred;
   }
`;

const StyledFormContainer = styled.form`
   display: flex;
   width: 90%;
`;
