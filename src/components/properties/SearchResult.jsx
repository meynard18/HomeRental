import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { PropertyContext } from './PropertiesContext';
import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   Typography,
   CardMedia,
   Grid,
   Button,
} from '@mui/material';

const city = [
   'Any',
   'Pasadena',
   'Los Angles',
   'San Diego',
   'Anaheim',
   'Orange',
];

const SearchResult = () => {
   const { data, setData, range } = useContext(PropertyContext);
   return (
      <Grid container sx={{ justifyContent: 'center', gap: 3, mt: 6 }}>
         {data.filtered.map((item, idx) => (
            // {data.filtered
            //    .filter(
            //       (item) =>
            //          data.filtered.indexOf(item) >= range.start &&
            //          data.filtered.indexOf(item) <= range.end
            //    )
            //    .map((item, idx) => (
            <Box key={idx}>
               <Card sx={{ maxWidth: 385 }}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        height="240"
                        image={item.image}
                        alt="green iguana"
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           ${item.price} / mo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {item.street_address}, {item.city} {item.state}
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                           <IconBox>
                              <Icon
                                 icon="ic:outline-bedroom-child"
                                 height="30"
                              />
                              <Typography
                                 sx={{
                                    fontWeight: 500,
                                 }}
                              >
                                 {item.bedroom}
                                 Bedroom
                              </Typography>
                           </IconBox>
                           <IconBox>
                              <Icon icon="cil:bathroom" height="30" />
                              <Typography sx={{ fontWeight: 500 }}>
                                 {item.bathroom} Bathroom
                              </Typography>
                           </IconBox>
                           <IconBox>
                              <Icon icon="mdi:floor-plan" height="30" />
                              <Typography sx={{ fontWeight: 500 }}>
                                 {item.size} sq.ft
                              </Typography>
                           </IconBox>
                        </Box>
                     </CardContent>
                  </CardActionArea>
                  <StyledButton>Schedule Viewing</StyledButton>
               </Card>
            </Box>
         ))}
      </Grid>
   );
};

export default SearchResult;

const MainContainer = styled(Box)`
   background-color: lightblue;
`;

const IconBox = styled(Box)``;

const StyledButton = styled(Button)`
   border-radius: 0px;
   width: 100%;
   margin-top: -0.25rem;
   margin-bottom: 0.5rem;
   color: white;
   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
`;