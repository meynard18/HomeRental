import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import { Box } from '@mui/material';
import SearchBox from '../components/properties/SearchBox';
import SearchResult from '../components/properties/SearchResult';
import Pagination from '../components/properties/Pagination';
import { PropertyContext } from '../components/properties/PropertiesContext';
import { rental } from '../data/rentalProperties';
import { useGlobalDataContext } from '../App';

const Properties = () => {
   const { location, bedrooms, bathrooms, price } = useGlobalDataContext();
   const [searchProperty, setSearchProperty] = useState({
      location: location,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
   });

   const [data, setData] = useState({
      main: rental,
      filtered: rental,
   });

   const [range, setRange] = useState({ start: 0, end: 9 });

   const searchProperties = {
      data,
      setData, // imported to SearchBox
      searchProperty,
      setSearchProperty,
      range,
      setRange,
   };

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
