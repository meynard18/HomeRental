import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import { theme } from '../CustomTheme';
import styled from '@emotion/styled';

function DrawerComponent() {
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <StyledDrawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="left"
         >
            <StyledList>
               <StyledListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <StyledLink to="/">Home</StyledLink>
                  </ListItemText>
               </StyledListItem>

               <StyledListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <StyledLink to="/about">About Us</StyledLink>
                  </ListItemText>
               </StyledListItem>

               <StyledListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <StyledLink to="/properties">Properties</StyledLink>
                  </ListItemText>
               </StyledListItem>

               <StyledListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <StyledLink to="/contact">Contact Us</StyledLink>
                  </ListItemText>
               </StyledListItem>
            </StyledList>
         </StyledDrawer>
         <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DehazeIcon sx={{ fontSize: 23, color: 'textColor.main' }} />
         </IconButton>
      </>
   );
}

export default DrawerComponent;

const StyledLink = styled(Link)`
   text-decoration: none;
   font-size: 1.25rem;
   font-weight: 500;
   color: ${theme.palette.black[300]};
`;
const StyledList = styled(List)`
   height: 100%;
   width: 15rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${theme.palette.grey[800]};
   @media (max-width: 360px) {
      width: 10rem;
   }
`;
const StyledDrawer = styled(Drawer)`
   display: flex;
   justify-content: center;
   margin-left: 15rem;
`;

const StyledListItem = styled(ListItem)`
   text-align: center;
`;
