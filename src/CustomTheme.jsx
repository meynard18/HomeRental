import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      bg: {
         main: '#F4F4F4',
         secondary: '#E0E0E0',
         brown: '#A89784',
      },
      accentColor: {
         main: '#D8C093',
      },
      black: {
         300: '#151515',
         400: '#040404',
         500: '#272727',
         600: '#0C0C0C',
      },
      grey: {
         200: '#574E4E',
         300: '#E0E0E0',
         400: '#9D9797',
         500: '#DCD7D1',
         600: '#E8E8E8',
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 480,
         md: 768,
         lg: 1024,
         xl: 1200,
         xxl: 1366,
      },
   },
   link: {
      color: 'red',
      fontSize: 16,
   },
   typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      h1: {
         fontSize: 66,
         '@media (max-width:480px)': {
            fontSize: 54,
         },
         '@media (max-width:360px)': {
            fontSize: 44,
         },
      },
      h2: {
         fontSize: 52,
         '@media (max-width:480px)': {
            fontSize: 40,
         },
         '@media (max-width:360px)': {
            fontSize: 34,
         },
      },
      h3: {
         '@media (max-width:480px)': {
            fontSize: 32,
         },
         '@media (max-width:360px)': {
            fontSize: 28,
         },
      },

      h4: {
         fontSize: 16,
      },
      body1: { fontSize: 14 },

      button: {
         textTransform: 'none',
         fontWeight: 500,
      },
   },
});
