import React from 'react';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import { theme } from '../CustomTheme';
import styled from '@emotion/styled';
import {
   Toolbar,
   CssBaseline,
   AppBar,
   Typography,
   useMediaQuery,
   createTheme,
   useScrollTrigger,
} from '@mui/material';

function ElevationScroll(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
   });

   return React.cloneElement(children, {
      style: {
         backgroundColor: trigger ? `white` : 'transparent',
      },
   });
}

function Navbar() {
   const theme = createTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <>
         <ElevationScroll>
            <StyledAppBar position="sticky" elevation={0}>
               <CssBaseline />
               <StyledToolbar>
                  <Link to="/">
                     <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                        LOGO
                     </Typography>
                  </Link>
                  {isMobile ? (
                     <DrawerComponent />
                  ) : (
                     <div>
                        <StyledLink to="/" component="button" variant="body2">
                           Home
                        </StyledLink>
                        <StyledLink to="/about">About Us</StyledLink>
                        <StyledLink to="/properties">Properties</StyledLink>
                        <StyledLink to="/contact">Contact Us</StyledLink>
                     </div>
                  )}
               </StyledToolbar>
            </StyledAppBar>
         </ElevationScroll>
      </>
   );
}

export default Navbar;
const StyledAppBar = styled(AppBar)`
   max-width: 1600px;
   margin: auto;
`;
const StyledToolbar = styled(Toolbar)`
   width: 90%;
   justify-content: space-between;
   margin: auto;
   padding: 1.25rem 0;
`;

const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${theme.palette.black[600]};
   padding: 0.25rem 0.75rem;
   font-weight: 500;
`;
