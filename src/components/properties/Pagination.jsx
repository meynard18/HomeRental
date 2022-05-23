import { PropertyContext } from './PropertiesContext';
import { useState, useContext, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

const PaginationOutlined = () => {
   const {
      state: { propertyFiltered },
      range,
      setRange,
   } = useContext(PropertyContext);

   const [pageCount, setPageCount] = useState();

   const calcPageCount = () => {
      //calculate page count based on array length. each page shows 10
      console.log(propertyFiltered);
      let itemCount = propertyFiltered.length / 10;
      let count = Math.floor(itemCount) + (Number.isInteger(itemCount) ? 0 : 1);
      console.log(count);
      console.log(itemCount);
      console.log(range.start);
      return setPageCount(count);
   };

   const updateRange = (value) => {
      //sets range(from...to) of data of the jobsData.filtered, see SearchResults.js
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      switch (value.type) {
         case 'previous':
            setRange({
               start: range.start - 10,
               end: range.end - 10,
            });
            break;
         case 'next':
            setRange({
               start: range.start + 10,
               end: range.end + 10,
            });
            break;
         default:
            setRange({
               start: value.page * 10 - 10,
               end: value.page * 10 - 1,
            });
      }
   };
   useEffect(() => calcPageCount(), [propertyFiltered]);

   return (
      <Stack spacing={2}>
         <PaginationContainer
            count={pageCount}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => {
               // console.log(item)
               return (
                  <PaginationItem
                     components={{
                        previous: ArrowLeft,
                        next: ArrowRight,
                     }}
                     {...item}
                     onClick={() => {
                        item.onClick();
                        updateRange(item);
                     }}
                  />
               );
            }}
         />
      </Stack>
   );
};
export default PaginationOutlined;

const PaginationContainer = styled(Pagination)`
   display: flex;
   justify-content: center;
   margin-top: 2rem;
`;
