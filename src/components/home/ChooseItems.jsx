import React from 'react';
import { theme } from '../../CustomTheme';
import { Icon } from '@iconify/react';
import styled from '@emotion/styled';
import { Box, Card, CardContent, Typography } from '@mui/material';

const items = [
   {
      image: 'bi:building',
      title: 'WIDE RANGE OF PROPERTIES',
      description:
         'With a robust selection of popular properties on hand, as well as leading properties from experts.',
   },
   {
      image: 'carbon:finance',
      title: 'FINANCE MADE EASY',
      description:
         'Our stress-free finance department that can find financial solutions to save you money.',
   },
   {
      image: 'codicon:workspace-trusted',
      title: 'TRUSTED BY THOUSANDS',
      description:
         '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
   },
];

const ChooseItems = () => {
   return (
      <>
         {items.map((item, idx) => (
            <StyledCard
               raised={false}
               sx={{ display: 'flex', p: 1.5, border: 0 }}
            >
               <Icon
                  icon={item.image}
                  style={{
                     fontSize: 100,
                     color: theme.palette.accentColor.main,
                  }}
               />
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                     <Typography
                        component="div"
                        variant="h4"
                        sx={{
                           color: theme.palette.grey[700],
                           fontWeight: 500,
                           fontSize: 26,
                        }}
                     >
                        {item.title}
                     </Typography>
                     <Typography variant="subtitle1" component="div">
                        {item.description}
                     </Typography>
                  </CardContent>
               </Box>
            </StyledCard>
         ))}
      </>
   );
};

export default ChooseItems;

const StyledCard = styled(Card)`
   border-radius: 0px;
   box-shadow: none;
   @media (max-width: 360px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
   }
`;
