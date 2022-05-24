import { PropertyContext } from './PropertiesContext';
import { useState, useContext, useEffect } from 'react';
import { theme } from '../../CustomTheme';
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
      let itemCount = propertyFiltered.length / 9;
      let count = Math.floor(itemCount) + (Number.isInteger(itemCount) ? 0 : 1);
      setRange({ start: 0, end: 8 });
      return setPageCount(count);
   };

   const updateRange = (value) => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      switch (value.type) {
         case 'previous':
            console.log(`previous : ${range.start - 9}`);
            console.log(`previous : ${range.end - 9}`);
            setRange({
               start: range.start - 9,
               end: range.end - 9,
            });
            break;
         case 'next':
            console.log(`next : ${range.start + 9}`);
            console.log(`next : ${range.end + 9}`);
            setRange({
               start: range.start + 9,
               end: range.end + 9,
            });
            break;
         default:
            setRange({
               start: value.page * 10 - (value.page + 9),
               //
               end: value.page * 10 - (value.page + 1),
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
               return (
                  <PaginationItem
                     components={{
                        previous: ArrowLeft,
                        next: ArrowRight,
                     }}
                     sx={{ color: `${theme.palette.bg.secondary}` }}
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
   margin: 1.5rem auto;
   background-color: ${theme.palette.grey[800]};
   width: 85%;
   padding: 1.5rem 0;
`;
