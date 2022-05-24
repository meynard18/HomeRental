import React, { useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import { Box } from '@mui/material';
import SearchBox from '../components/properties/SearchBox';
import SearchResult from '../components/properties/SearchResult';
import Pagination from '../components/properties/Pagination';
import { PropertyContext } from '../components/properties/PropertiesContext';
import { rental } from '../data/rentalProperties';
import propertyReducer from '../components/reducer/PropertyReducer';

/* first filter works, second DOES not work
--- need to reset the properties to initial value everytime filter changes

*/

// all filters **
// no filters **
// location only **
// location & bedroom **
// location & bathroom **
// location & price **
// location & bedroom & bathroom -- no price **
// location & bedroom & price -- no bathroom **
// location & bathroom & price -- no bedroom **

// bedroom only **
// bedroom & bathroom **
// bedroom & price **
// bedroom & bathroom & price -- no location **

// bathroom only **
// bathroom & price

// price only

const Properties = () => {
   const [state, dispatch] = useReducer(propertyReducer, {
      property: rental,
      propertyFiltered: rental,
      location: 'Any',
      bathroom: 'Any',
      bedroom: 'Any',
      price: 'Any',
   });
   const [range, setRange] = useState({ start: 0, end: 9 });

   const searchProperties = {
      range,
      setRange,
      state,
      dispatch,
   };

   useEffect(() => {}, [state.propertyFiltered]);

   return (
      <>
         <PropertyContext.Provider value={searchProperties}>
            <MainContainer maxWidth="xxl" sx={{ m: 'auto' }}>
               <SearchBox />
               <h1>Property Page</h1>
               <SearchResult />
               <Pagination />
            </MainContainer>
         </PropertyContext.Provider>
      </>
   );
};

export default Properties;

const MainContainer = styled(Box)`
   background-color: ${theme.palette.bg.main};
`;
