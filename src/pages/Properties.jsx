import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from '../components/properties/SearchBox';

const Properties = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await axios(
               `https://my.api.mockaroo.com/california_rentals.json?key=d88c3670`
            );
            setData(result);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   return (
      <>
         {console.log(data)}
         <SearchBox />
         <h1>Property Page</h1>
      </>
   );
};

export default Properties;
