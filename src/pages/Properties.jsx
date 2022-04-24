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
   const filteredProperty = (property, location) => {
      return property.filter(
         (item) => item.city.toLowerCase().includes(location),
         console.log('i want to filter stuff')
      );
      // console.log(state.propertyFiltered);
   };
   switch (action.type) {
      case 'SET_PROPERTY':
         console.log('hi');
         return {
            ...state,
            property: action.payload,
         };

      case 'SET_LOCATION':
         return {
            ...state,
            location: action.payload,
            // propertyFiltered: filteredProperty(state.propertyFiltered),
         };
      case 'SET_BEDROOM':
         return { ...state, bedroom: action.payload };
      case 'SET_BATHROOM':
         return { ...state, bathroom: action.payload };
      case 'SET_PRICE':
         return { ...state, price: action.payload };
      case 'SET_FILTERS':
         console.log('hiiiiii');
         console.log(state.location);
         return {
            ...state,
            filters: action.payload,
            propertyFiltered: filteredProperty(
               state.propertyFiltered,
               state.location
            ),
         };
      default:
         throw new Error('No action');
   }
};

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

   // const { location, bedrooms, bathrooms, price } = useGlobalDataContext();

   const searchProperties = {
      range,
      setRange,
      state,
      dispatch,
   };

   // useEffect(() => {
   //    fetch('../data/rentalProperties')
   //       .then((res) => res.text())
   //       .then((payload) =>
   //          dispatch({
   //             type: 'SET_PROPERTY',
   //             payload,
   //          })
   //       );
   // }, []);
   useEffect(() => {}, [state.property, state.propertyFiltered]);

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
