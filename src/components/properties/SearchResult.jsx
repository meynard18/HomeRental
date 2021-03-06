import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../CustomTheme';
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
   'Los Angeles',
   'San Diego',
   'Anaheim',
   'Orange',
   'Temecula',
   'Sta Monica',
   'Newport Beach',
   'Oceanside',
];

const SearchResult = () => {
   const {
      state: { propertyFiltered },
      range,
   } = useContext(PropertyContext);
   return (
      <Grid container sx={{ justifyContent: 'center', gap: 3, mt: 6 }}>
         {propertyFiltered
            .filter(
               (item) =>
                  propertyFiltered.indexOf(item) >= range.start &&
                  propertyFiltered.indexOf(item) <= range.end
            )
            .map((item, idx) => (
               <StyledBox key={idx} sx={{ mb: 2 }}>
                  <Card sx={{ maxWidth: 360, borderRadius: 0 }}>
                     <CardActionArea sx={{ cursor: 'auto' }}>
                        <CardMedia
                           component="img"
                           height="240"
                           image={item.image}
                           alt="House Photo"
                        />
                        <CardContent>
                           <Typography
                              sx={{ fontWeight: 500, fontSize: 18, ml: 1 }}
                           >
                              ${item.price} / mo
                           </Typography>
                           <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ ml: 1 }}
                           >
                              {item.street_address.slice(0, 20)}, {item.city}{' '}
                              {item.state}
                           </Typography>
                           <Box
                              sx={{
                                 display: 'flex',
                                 gap: 3,
                                 mt: 2,
                                 justifyContent: 'center',
                              }}
                           >
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
                                    Beds
                                 </Typography>
                              </IconBox>
                              <IconBox>
                                 <Icon icon="cil:bathroom" height="30" />
                                 <Typography sx={{ fontWeight: 500 }}>
                                    {item.bathroom} Baths
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
                     <StyledLink to="/contact">Schedule Viewing</StyledLink>
                  </Card>
               </StyledBox>
            ))}
      </Grid>
   );
};

export default SearchResult;

const StyledBox = styled(Box)`
   @media (max-width: 360px) {
      width: 95%;
      margin: auto;
   }
`;

const StyledLink = styled(Link)`
   border-radius: 2px;
   width: 90%;
   display: flex;
   justify-content: center;
   margin: 0.25rem auto 1.25rem auto;
   color: white;
   text-decoration: none;
   padding: 0.5rem 0;

   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
`;

const IconBox = styled(Box)`
   display: flex;
   align-items: center;
   @media (max-width: 360px) {
      margin: 0 -0.5rem;
   }
`;
