import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import { theme } from '../CustomTheme';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import {
   Toolbar,
   CssBaseline,
   AppBar,
   Typography,
   useMediaQuery,
   createTheme,
   useScrollTrigger,
} from '@mui/material';
import { fontSize } from '@mui/system';

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
   const [active, setActive] = useState();
   const theme = createTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

   const linkHome = useRef();
   const linkAbout = useRef();
   const handleActive = (e) => {
      let links = document.querySelectorAll('.route-links');
      console.log(e.target);
   };

   const activeStyling = ({ isActive }) => {
      return {
         borderBottom: isActive ? `3px solid red` : '',
         paddingBottom: isActive ? '1.25rem' : '',
      };
   };
   return (
      <>
         <ElevationScroll>
            <StyledAppBar position="sticky" elevation={0}>
               <CssBaseline />
               <StyledToolbar>
                  <StyledLogo to="/">
                     <img
                        src={logo}
                        alt="Southern California Real Estate Logo"
                     />
                  </StyledLogo>
                  {isMobile ? (
                     <DrawerComponent />
                  ) : (
                     <div>
                        <StyledLink
                           style={activeStyling}
                           onClick={handleActive}
                           className="route-links"
                           component="button"
                           to="/"
                           variant="body2"
                        >
                           Home
                        </StyledLink>
                        <StyledLink
                           style={activeStyling}
                           onClick={handleActive}
                           className="route-links"
                           to="/about"
                        >
                           About Us
                        </StyledLink>
                        <StyledLink
                           style={activeStyling}
                           onClick={handleActive}
                           className="route-links"
                           to="/properties"
                        >
                           Properties
                        </StyledLink>
                        <StyledLink
                           style={activeStyling}
                           onClick={handleActive}
                           className="route-links"
                           to="/contact"
                        >
                           Contact Us
                        </StyledLink>
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
`;

const StyledLink = styled(NavLink)`
   text-decoration: none;
   color: ${theme.palette.black[600]};
   padding: 0.25rem 0;
   font-weight: 500;
   font-size: 1.1rem;
   margin: 0.5rem 1rem;
`;

const StyledLogo = styled(Link)`
   padding: 0.5rem 0;
`;
