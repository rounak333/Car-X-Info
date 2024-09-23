import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carsforsale from './Pages/Carsforsale';
import Newcars from './Pages/Newcars';
import Researchreview from './Pages/Researchreview';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (

   
    <Router>
      <Navbar/>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/carsforsale" element={<Carsforsale />} />
        <Route path="/newcars" element={<Newcars />} />
        
        <Route path="/research" element={<Researchreview />} />
        

       
      </Routes>
   
      <footer>
         <Footer/>
      </footer>
    </Router>
  );
};

export default App;