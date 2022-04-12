import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { theme } from '../CustomTheme';
import { Box } from '@mui/material';
import SearchBox from '../components/properties/SearchBox';
import SearchResult from '../components/properties/SearchResult';
import { PropertyContext } from '../components/properties/PropertiesContext';

const Properties = () => {
   const [data, setData] = useState([]);

   const searchProperties = {
      data,
      setData, // imported to SearchBox
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await axios(
               `https://my.api.mockaroo.com/california_rentals.json?key=d88c3670`
            );
            setData(result.data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   return (
      <>
         <PropertyContext.Provider value={searchProperties}>
            <MainContainer>
               {console.log(data)}
               <SearchBox />
               <h1>Property Page</h1>
               <SearchResult />
            </MainContainer>
         </PropertyContext.Provider>
      </>
   );
};

export default Properties;

const MainContainer = styled(Box)`
   background-color: ${theme.palette.bg.main};
`;
