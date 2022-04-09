import React from 'react';
import { Link } from 'react-router-dom';
import {
   Toolbar,
   CssBaseline,
   AppBar,
   Typography,
   Box,
   Container,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import DrawerComponent from './DrawerComponent';
import { theme } from '../CustomTheme';
import styled from '@emotion/styled';

// const useStyles = makeStyles((theme) => ({
//    navContainer: {
//       backgroundColor: 'red',
//    },
//    navbar: {
//       width: '90%',
//       margin: 'auto',
//    },

//    logo: {
//       textDecoration: 'none',
//       marginRight: 'auto',
//       color: theme.palette.textColor.main,
//    },
//    contact: {
//       backgroundColor: 'inherit',
//       color: theme.palette.textColor.main,
//       textDecoration: 'none',
//       fontSize: 15,
//       padding: '.25rem .55rem',
//       borderRadius: '.25rem',
//       border: `1px solid ${theme.palette.textColor.main}`,
//       marginLeft: '.5rem',
//       cursor: 'pointer',
//       fontFamily: 'Poppins',

//       '&:hover': {
//          color: theme.palette.textColor.accent,
//          border: `1px solid ${theme.palette.textColor.accent}`,
//       },
//    },

//    link: {
//       cursor: 'pointer',
//       fontSize: 16,
//       flexWrap: 'none',
//       color: theme.palette.textColor.main,
//       textDecoration: 'none',
//       padding: '0 .75rem',
//       '&:hover': {
//          color: theme.palette.textColor.accent,
//       },
//    },
// }));

function ElevationScroll(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
   });

   return React.cloneElement(children, {
      style: {
         backgroundColor: trigger
            ? `white`
            : // ? `${theme.palette.grey[600]}`
              'transparent',
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
