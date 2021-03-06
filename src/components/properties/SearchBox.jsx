import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import { PropertyContext } from './PropertiesContext';
import {
   Box,
   InputLabel,
   FormControl,
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
   'Orange',
   'Temecula',
   'Sta Monica',
   'Newport Beach',
   'Oceanside',
];
const SearchBox = () => {
   const {
      state: { location, property, bedroom, bathroom, price },
      dispatch,
   } = useContext(PropertyContext);

   const handleSubmit = (e) => {
      dispatch({
         type: 'SET_FILTERS',
         payload: e.preventDefault(),
      });
   };

   const handleLocation = (e) => {
      dispatch({
         type: 'SET_LOCATION',
         payload: e.target.value,
      });
   };

   const handleBedroom = (e) => {
      dispatch({
         type: 'SET_BEDROOM',
         payload: e.target.value,
      });
   };
   const handleBathroom = (e) => {
      dispatch({
         type: 'SET_BATHROOM',
         payload: e.target.value,
      });
   };

   const handlePrice = (e) => {
      dispatch({
         type: 'SET_PRICE',
         payload: e.target.value,
      });
   };
   useEffect(() => {}, [property]);

   return (
      <MainContainer maxWidth="xxl" sx={{ m: 'auto' }}>
         <SearchContainer>
            <StyledFormContainer onSubmit={handleSubmit}>
               <StyledFormControl>
                  <InputLabel htmlFor="City">Location</InputLabel>
                  <StyledSelect
                     label="Location"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                     onChange={handleLocation}
                     value={location}
                     size="small"
                  >
                     {locations.map((item, idx) => (
                        <MenuItem key={idx} value={item}>
                           {item}
                        </MenuItem>
                     ))}
                  </StyledSelect>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bedroom">Bedroom</InputLabel>
                  <StyledSelect
                     label="Beds"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                     onChange={handleBedroom}
                     value={bedroom}
                     size="small"
                  >
                     <MenuItem value="Any">Any</MenuItem>
                     <MenuItem value={1}>1 Bedroom</MenuItem>
                     <MenuItem value={2}>2 Bedrooms</MenuItem>
                     <MenuItem value={3}>3 Bedrooms</MenuItem>
                     <MenuItem value={4}>4 Bedrooms</MenuItem>
                  </StyledSelect>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Bathroom">Bathroom</InputLabel>
                  <StyledSelect
                     label="Beds"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                     onChange={handleBathroom}
                     value={bathroom}
                     size="small"
                  >
                     <MenuItem value="Any">Any</MenuItem>
                     <MenuItem value={1}>1 Bathroom</MenuItem>
                     <MenuItem value={2}>2 Bathrooms</MenuItem>
                     <MenuItem value={3}>3 Bathrooms</MenuItem>
                     <MenuItem value={4}>4 Bathrooms</MenuItem>
                  </StyledSelect>
               </StyledFormControl>
               <StyledFormControl>
                  <InputLabel htmlFor="Price">Price</InputLabel>
                  <StyledSelect
                     label="Price"
                     variant="outlined"
                     sx={{ borderRadius: 0 }}
                     value={price}
                     onChange={handlePrice}
                     size="small"
                  >
                     <MenuItem value="Any">Any</MenuItem>
                     <MenuItem value={0}>$0-$999</MenuItem>
                     <MenuItem value={1}>$1000-$1999</MenuItem>
                     <MenuItem value={2}>$2000-$2999</MenuItem>
                     <MenuItem value={3}>$3000++</MenuItem>
                  </StyledSelect>
               </StyledFormControl>
               <StyledButton type="submit">Result</StyledButton>
            </StyledFormContainer>
         </SearchContainer>
      </MainContainer>
   );
};

export default SearchBox;
const MainContainer = styled(Box)`
   background-color: ${theme.palette.bg.main};
   padding-top: 4rem;
   @media (max-width: 480px) {
      padding-top: 2rem;
   }
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

const StyledSelect = styled(Select)`
   @media (max-width: 480px) {
      height: 2.45rem;
   }
`;

const StyledFormControl = styled(FormControl)`
   background-color: white;
   width: 100%;
   margin: auto 0.75rem;
   @media (max-width: 480px) {
      margin: 0.5rem auto;
   }
`;

const StyledButton = styled(Button)`
   border-radius: 2px;
   width: 100%;
   font-size: 0.95rem;
   margin-left: 0.75rem;
   background-color: ${theme.palette.black[500]};
   color: white;
   &:hover {
      background-color: darkred;
   }
   @media (max-width: 480px) {
      margin: auto;
      padding: 0.45rem 0;
      font-size: 1rem;
   }
`;

const StyledFormContainer = styled.form`
   display: flex;
   width: 90%;
   @media (max-width: 480px) {
      flex-direction: column;
   }
`;
