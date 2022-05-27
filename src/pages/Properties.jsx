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
import { Typography } from '@mui/material';
import SortProperties from '../components/properties/SortProperties';

const sortProperties = (property, value) => {
   const d = new Date();
   const datePosted = d.getTime();
   if (value === 0) {
      console.log('high to low');
      return property.sort((a, b) => b.price - a.price);
   }
   if (value === 1) {
      console.log(`low to high price`);
      return property.sort((a, b) => a.price - b.price);
   }
   if (value === 2) {
      console.log('date');
      return property.sort((a, b) => new Date(b.date) - new Date(a.date));
   }
   if (value === 'Default') {
      console.log('default value');
      return property.sort((a, b) => a.id - b.id);
   }
   return property;
};

const Properties = () => {
   const [state, dispatch] = useReducer(propertyReducer, {
      property: rental,
      propertyFiltered: rental,
      location: 'Any',
      bathroom: 'Any',
      bedroom: 'Any',
      price: 'Any',
      sortBy: 'Default',
   });

   sortProperties(state.propertyFiltered, state.sortBy);

   const [range, setRange] = useState({ start: 0, end: 9 });

   const searchProperties = {
      range,
      setRange,
      state,
      dispatch,
   };

   return (
      <>
         <PropertyContext.Provider value={searchProperties}>
            <MainContainer maxWidth="xxl" sx={{ m: 'auto' }}>
               <StyledHeader variant="h3" component="h3" fontWeight={500}>
                  Property Listings
               </StyledHeader>
               <SearchBox />
               <FlexBox>
                  <Typography
                     variant="subtitle1"
                     component="div"
                     sx={{ fontWeight: 500 }}
                  >
                     {state.propertyFiltered.length <= 1
                        ? `Result : ${state.propertyFiltered.length} Listing`
                        : `Result : ${state.propertyFiltered.length} Listings`}
                  </Typography>
                  <RemoveTypography
                     variant="h3"
                     component="h3"
                     sx={{
                        textAlign: 'center',
                        fontWeight: 500,
                        fontSize: 40,
                     }}
                  >
                     Property Listing
                  </RemoveTypography>
                  <SortProperties />
               </FlexBox>

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

const FlexBox = styled(Box)`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 3.5rem;
   @media (max-width: 480px) {
      margin: 2rem auto;
      width: 90%;
   }
`;

const StyledHeader = styled(Typography)`
   display: none;
   @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      padding-top: 2rem;
   }
`;

const RemoveTypography = styled(Typography)`
   @media (max-width: 768px) {
      display: none;
   }
`;
