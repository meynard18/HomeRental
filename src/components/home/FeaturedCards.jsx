import React from 'react';
import featured1 from '../../images/featured1.jpg';
import featured2 from '../../images/featured2.jpg';
import featured3 from '../../images/featured3.jpg';
import styled from '@emotion/styled';
import { theme } from '../../CustomTheme';
import { Icon } from '@iconify/react';
import {
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography,
   Grid,
   Box,
} from '@mui/material';

const propertiesInformation = [
   {
      image: featured1,
      previousPrice: 2000,
      price: 1900,
      title: 'This home is newly Renovated',
      description: 'This is the description of the property above',
      beds: 'ic:outline-bedroom-child',
      numBed: 3,
      baths: 'cil:bathroom',
      numBath: 2,
      size: 'mdi:floor-plan',
      numSize: 1750,
   },
   {
      image: featured2,
      previousPrice: 2000,
      price: 1900,
      title: 'This home is newly Renovated',
      description: 'This is the description of the property above',
      beds: 'ic:outline-bedroom-child',
      numBed: 3,
      baths: 'cil:bathroom',
      numBath: 2,
      size: 'mdi:floor-plan',
      numSize: 1750,
   },
   {
      image: featured3,
      previousPrice: 2000,
      price: 1900,
      title: 'This home is newly Renovated',
      description: 'This is the description of the property above',
      beds: 'ic:outline-bedroom-child',
      numBed: 3,
      baths: 'cil:bathroom',
      numBath: 2,
      size: 'mdi:floor-plan',
      numSize: 1750,
   },
];

const FeaturedCards = () => {
   return (
      <>
         <Grid container sx={{ justifyContent: 'center', gap: 3, mt: 6 }}>
            {propertiesInformation.map((item, idx) => (
               <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                     component="img"
                     alt="green iguana"
                     height="220"
                     image={item.image}
                  />
                  <CardContent>
                     <PriceBox sx={{ display: 'flex' }}>
                        <Typography
                           variant="body2"
                           sx={{
                              mr: 2,
                              color: theme.palette.grey[400],
                              fontSize: 14,
                              textDecoration: 'line-through',
                           }}
                        >
                           ${item.previousPrice} / mo
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
                           ${item.price} / mo
                        </Typography>
                     </PriceBox>
                     <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {item.title}
                     </Typography>
                     <Typography variant="body1" color="text.secondary">
                        {item.description}
                     </Typography>
                     <Box
                        sx={{
                           display: 'flex',
                           gap: 4,
                           mt: 1,
                           justifyContent: 'center',
                        }}
                     >
                        <IconBox>
                           <Icon icon={item.beds} height="30" />
                           <span>{item.numBed} Beds</span>
                        </IconBox>
                        <IconBox>
                           <Icon icon={item.baths} height="30" />
                           <span>{item.numBath} Baths</span>
                        </IconBox>
                        <IconBox>
                           <Icon icon={item.size} height="30" />
                           <>{item.numSize} sq.ft</>
                        </IconBox>
                     </Box>
                  </CardContent>
                  <CardActions>
                     <Button size="medium" variant="contained">
                        Schedule Viewing
                     </Button>
                  </CardActions>
               </Card>
            ))}
         </Grid>
      </>
   );
};

export default FeaturedCards;

const PriceBox = styled(Box)`
   justify-content: center;
   align-items: center;
   margin-left: -3.5rem;
`;

const IconBox = styled(Box)`
   display: flex;
   align-items: center;
`;
