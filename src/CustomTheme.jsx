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
         700: '#242424',
         800: '#0D0D0D',
      },
      grey: {
         200: '#574E4E',
         300: '#E0E0E0',
         400: '#9D9797',
         500: '#DCD7D1',
         600: '#E8E8E8',
         700: '#504A4B',
         800: '#E3E3E3',
         900: '#51504E',
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 480,
         md: 768,
         lg: 1024,
         xl: 1200,
         xxl: 1600,
      },
   },
   link: {
      color: 'red',
      fontSize: 16,
   },
   typography: {
      fontFamily: ['Raleway', 'sans-serif'].join(','),

      h1: {
         fontSize: 62,
         '@media (max-width:992px)': {
            fontSize: 54,
         },
         '@media (max-width:768px)': {
            fontSize: 38,
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
         fontSize: 28,
         '@media (max-width:992px)': {
            fontSize: 26,
         },
         '@media (max-width:768px)': {
            fontSize: 24,
         },
      },
      h4: {
         '@media (max-width:992px)': {
            fontSize: 22,
         },
         '@media (max-width:768px)': {
            fontSize: 18,
         },
      },

      body1: { fontSize: 15 },

      button: {
         textTransform: 'none',
         fontWeight: 500,
      },
   },
});
