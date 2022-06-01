import React, { useContext } from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { PropertyContext } from './PropertiesContext';
import styled from '@emotion/styled';

const sortByValues = {
   priceHighToLow: 'Price(High to Low)',
   priceLowToHigh: 'Price(Low to High)',
   dateRecent: 'Newest Property',
};
/// function that captures value
//// function that sends updated value
const SortProperties = () => {
   const {
      state: { sortBy },
      dispatch,
   } = useContext(PropertyContext);

   const handleSort = (e) => {
      dispatch({
         type: 'SET_SORTVALUE',
         payload: e.target.value,
      });
   };

   return (
      <Box>
         <StyledFormControl>
            <InputLabel htmlFor="Price">Sort By:</InputLabel>

            <Select
               label="SortBy"
               variant="outlined"
               size="small"
               sx={{ borderRadius: 0 }}
               value={sortBy}
               onChange={handleSort}
            >
               <MenuItem value="Default">Default</MenuItem>
               {Object.values(sortByValues).map((item, idx) => (
                  <MenuItem key={idx} value={idx}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </StyledFormControl>
      </Box>
   );
};

export default SortProperties;

const StyledFormControl = styled(FormControl)`
   background-color: white;
   width: 100%;
   margin: auto 0.75rem;
`;
