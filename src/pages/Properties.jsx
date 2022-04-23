import React, { useEffect, useState, useReducer } from 'react';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import { Box } from '@mui/material';
import SearchBox from '../components/properties/SearchBox';
import SearchResult from '../components/properties/SearchResult';
import Pagination from '../components/properties/Pagination';
import { PropertyContext } from '../components/properties/PropertiesContext';
import { rental } from '../data/rentalProperties';
import { useGlobalDataContext } from '../App';

const propertyReducer = (state, action) => {
   switch (action.type) {
      case 'SET_PROPERTY':
         return { ...state, property: { main: rental, filtered: rental } };
      case 'SET_LOCATION':
         return { ...state, location: action.payload };
      case 'SET_BEDROOM':
         return { ...state, bedroom: action.payload };
      case 'SET_BATHROOM':
         return { ...state, bathroom: action.payload };
      case 'SET_PRICE':
         return { ...state, price: action.payload };

      default:
         throw new Error('No action');
   }
};

const Properties = () => {
   const [state, dispatch] = useReducer(propertyReducer, {
      property: { main: rental, filtered: rental },
      location: 'Any',
      bathroom: 'Any',
      bedroom: 'Any',
      price: 'Any',
   });

   const { location, bedrooms, bathrooms, price } = useGlobalDataContext();
   const [searchProperty, setSearchProperty] = useState({
      location: location,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
   });

   const [range, setRange] = useState({ start: 0, end: 9 });

   const searchProperties = {
      searchProperty,
      setSearchProperty,
      range,
      setRange,
      state,
      dispatch,
   };

   useEffect(() => {
      fetch('../data/rentalProperties')
         .then((res) => res.text())
         .then((data) =>
            dispatch({
               type: 'SET_PROPERTY',
               payload: data,
            })
         );
   }, []);

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
