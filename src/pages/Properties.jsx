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

const filteredProperty = (property, location, bedroom) => {
   if (location.toLowerCase() === 'any' && bedroom === 'Any') {
      console.log('both any');
      return property;
   } else if (location.toLowerCase() !== 'any' && bedroom !== 'Any') {
      console.log('both selected');
      return property.filter(
         (item) =>
            item.city.toLowerCase() === location.toLowerCase() &&
            item.bedroom === bedroom
      );
   } else if (
      location.toLowerCase() !== 'any' &&
      bedroom.toLowerCase() === 'any'
   ) {
      return property.filter(
         (item) =>
            item.city.toLowerCase() === location.toLowerCase() && item.bedroom
      );
   } else if (location.toLowerCase() === 'any' && bedroom !== 'Any') {
      return property.filter((item) => item.bedroom === bedroom);
   }

   // else {
   //    /* need to create location is selected while bedroom is any*/
   //    if (location.toLowerCase() !== 'any') {
   //       console.log('location selected and bedroom is any');
   //       return property.filter(
   //          (item) => item.city.toLowerCase() === location.toLowerCase()
   //       );
   //    } else if (
   //       location.toLowerCase() !== 'any' &&
   //       bedroom.toLowerCase() === 'any'
   //    ) {
   //       console.log('location selected and bedroom selected');
   //       /* need to create location is selected while bedroom is selected*/
   //       return property.filter(
   //          (item) =>
   //             item.city.toLowerCase() === location.toLowerCase() &&
   //             item.bedroom === bedroom
   //       );
   //    }
   //    console.log('not both any');
   // }
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
         return { ...state, price: action.payload };
      case 'SET_FILTERS':
         return {
            ...state,
            filters: action.payload,
            propertyFiltered: filteredProperty(
               state.property,
               state.location,
               state.bedroom
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
