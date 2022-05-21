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

/* first filter works, second DOES not work
--- need to reset the properties to initial value everytime filter changes

*/

/* all filters are ANY*/
/* some filters are selected while some are any */
/* all filters are selected */

// ------------LOCATION FUNCTIONS ------------------

const locationFilter = (property, location, bedroom, bathroom) => {
   console.log('location filter');
   return property.filter((item) =>
      item.city.toLowerCase().includes(location.toLowerCase())
   );
};

const locationAndBedroomFilter = (property, location, bedroom, bathroom) => {
   console.log('2 filters');
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bedroom === bedroom
   );
};

const locationBedroomBathroomFilter = (
   property,
   location,
   bedroom,
   bathroom
) => {
   console.log('3 filters');
   return property.filter(
      (item) =>
         item.city.toLowerCase().includes(location.toLowerCase()) &&
         item.bedroom === bedroom &&
         item.bathroom === bathroom
   );
};

// ----------------BEDROOM FUNCTIONS ---------------------------

const filteredProperty = (property, location, bedroom, bathroom, price) => {
   if (
      location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return property;
   }
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom !== 'Any' &&
      price !== 'Any'
   ) {
      return property.filter(
         (item) =>
            item.city.toLowerCase().includes(location.toLowerCase()) &&
            item.bedroom === bedroom &&
            item.bathroom === bathroom &&
            item.price.toString().split('')[0].includes(price.toString())
      );
   }
   // --------------- LOCATION CONDITIONS -------------------
   /* Location SELECTED, bedroom & bathroom & price NOT */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom === 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return locationFilter(property, location);
   }
   /* Location & Bedroom SELECTED */
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom === 'Any' &&
      price === 'Any'
   ) {
      return locationAndBedroomFilter(property, location, bedroom, price);
   }
   /*Location, Bedroom, Bathroom SELECTED , price NOT*/
   if (
      !location.toLowerCase().includes('any') &&
      bedroom !== 'Any' &&
      bathroom !== 'Any'
   ) {
      console.log(bathroom);
      return locationBedroomBathroomFilter(
         property,
         location,
         bedroom,
         bathroom
      );
   }
   // --------------------BEDROOM CONDITIONS ------------------------
};

const propertyReducer = (state, action) => {
   switch (action.type) {
      case 'SET_PROPERTY':
         console.log('need to set propertyfiltered to initial value');
         return {
            ...state,
            property: action.payload,
            propertyFiltered: action.payload,
         };

      case 'SET_LOCATION':
         console.log(state.location);
         return {
            ...state,
            location: action.payload,
         };
      case 'SET_BEDROOM':
         console.log(state.bedroom);
         return { ...state, bedroom: action.payload };
      case 'SET_BATHROOM':
         console.log(state.bathroom);
         return { ...state, bathroom: action.payload };
      case 'SET_PRICE':
         console.log(state.price);
         return { ...state, price: action.payload };
      case 'SET_FILTERS':
         return {
            ...state,
            filters: action.payload,
            propertyFiltered: filteredProperty(
               state.property,
               state.location,
               state.bedroom,
               state.bathroom,
               state.price
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

   useEffect(() => {
      console.log('filters');
   }, [state.propertyFiltered]);

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
