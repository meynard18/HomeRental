import React, { useState, useContext, useEffect } from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import { PropertyContext } from './PropertiesContext';

const sortByValues = {
   priceHighToLow: 'Payment(High to Low)',
   priceLowToHigh: 'Payment(Low to High)',
   dateRecent: 'Newest Property',
};
/// function that captures value
//// function that sends updated value
const SortProperties = () => {
   const {
      state: { sortBy, propertyFiltered },
      dispatch,
   } = useContext(PropertyContext);

   const handleSort = (e) => {
      console.log('sorting');
      dispatch({
         type: 'SET_SORTVALUE',
         payload: e.target.value,
      });
   };

   useEffect(() => {}, [sortBy, propertyFiltered]);
   return (
      <Box>
         <Select
            label="SortBy"
            variant="outlined"
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
      </Box>
   );
};

export default SortProperties;
