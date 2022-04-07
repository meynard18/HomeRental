import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

const link = {
   textDecoration: 'none',
   fontSize: 16,
   fontWeight: 500,
   '&:hover': {
      color: 'black',
   },
};

function DrawerComponent() {
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="top"
         >
            <List>
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/" sx={link}>
                        Home
                     </Link>
                  </ListItemText>
               </ListItem>

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/">About Us</Link>
                  </ListItemText>
               </ListItem>

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/">About</Link>
                  </ListItemText>
               </ListItem>

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/">Contact</Link>
                  </ListItemText>
               </ListItem>
            </List>
         </Drawer>
         <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DehazeIcon sx={{ fontSize: 23, color: 'textColor.main' }} />
         </IconButton>
      </>
   );
}

export default DrawerComponent;
