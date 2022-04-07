import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Properties from './pages/Properties';
import { theme } from './CustomTheme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
   return (
      <>
         <ThemeProvider theme={theme}>
            <Router>
               <Navbar />
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/properties" element={<Properties />} />
                  <Route exact path="/contact" element={<Contact />} />
                  {/* <Route exact path="/about" element={<About />} />
                  <Route exact path="/properties" element={<Properties />} />
                  <Route exact path="/contact" element={<Contact />} /> */}
               </Routes>
            </Router>
         </ThemeProvider>
      </>
   );
}

export default App;
