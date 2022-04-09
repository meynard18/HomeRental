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
               <StyledCard sx={{ maxWidth: 345, borderRadius: 0 }}>
                  <CardMedia
                     component="img"
                     alt="green iguana"
                     height="210"
                     image={item.image}
                  />
                  <StyledCardContent>
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
                           gap: 3,
                           mt: 2,
                           justifyContent: 'center',
                        }}
                     >
                        <IconBox>
                           <Icon icon={item.beds} height="30" />
                           <Typography
                              sx={{
                                 fontWeight: 500,
                              }}
                           >
                              {item.numBed}
                              Beds
                           </Typography>
                        </IconBox>
                        <IconBox>
                           <Icon icon={item.baths} height="30" />
                           <Typography sx={{ fontWeight: 500 }}>
                              {item.numBath} Baths
                           </Typography>
                        </IconBox>
                        <IconBox>
                           <Icon icon={item.size} height="30" />
                           <Typography sx={{ fontWeight: 500 }}>
                              {item.numSize} sq.ft
                           </Typography>
                        </IconBox>
                     </Box>
                  </StyledCardContent>
                  <CardActions>
                     <StyledButton size="medium" variant="contained">
                        Schedule Viewing
                     </StyledButton>
                  </CardActions>
               </StyledCard>
            ))}
         </Grid>
      </>
   );
};

export default FeaturedCards;

const StyledCard = styled(Card)`
   @media (max-width: 360px) {
      width: 90%;
   }
`;

const StyledCardContent = styled(CardContent)`
   @media (max-width: 360px) {
      paddign: 1rem;
      margin: auto;
   }
`;
const PriceBox = styled(Box)`
   justify-content: center;
   align-items: center;
   margin-left: -3.5rem;
   @media (max-width: 360px) {
      margin-left: -2rem;
   }
`;

const IconBox = styled(Box)`
   display: flex;
   align-items: center;
   @media (max-width: 360px) {
      margin: 0 -0.5rem;
   }
`;

const StyledButton = styled(Button)`
   border-radius: 0px;
   width: 100%;
   margin-top: -0.25rem;
   margin-bottom: 0.5rem;

   background-color: ${theme.palette.black[500]};
   &:hover {
      background-color: darkred;
   }
`;
