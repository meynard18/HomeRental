import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { PropertyContext } from './PropertiesContext';

const SearchResult = () => {
   const { data, setData } = useContext(PropertyContext);
   return (
      <>
         {data.map((item, idx) => {
            <Box>{console.log(item.street_address)}</Box>;
         })}
      </>
   );
};

export default SearchResult;
