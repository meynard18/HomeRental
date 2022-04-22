import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Properties from './pages/Properties';
import { theme } from './CustomTheme';
import { ThemeProvider } from '@mui/material/styles';

const GlobalData = React.createContext();
export const useGlobalDataContext = () => useContext(GlobalData);

function App() {
   const [location, setLocation] = useState('Any');
   const [bedrooms, setBedrooms] = useState('Any');
   const [bathrooms, setBathrooms] = useState('Any');
   const [price, setPrice] = useState('Any');
   const [pageName, setPageName] = useState('rental');

   const global = {
      location,
      bedrooms,
      bathrooms,
      price,
      pageName,
      setPageName,
   };
   return (
      <ThemeProvider theme={theme}>
         <GlobalData.Provider value={global}>
            <Router>
               <Navbar />
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/properties" element={<Properties />} />
                  <Route exact path="/contact" element={<Contact />} />
               </Routes>
            </Router>
         </GlobalData.Provider>
      </ThemeProvider>
   );
}

export default App;
