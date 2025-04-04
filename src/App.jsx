import React from 'react';

import './App.css';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Hardware from './Components/pages/Hardware';
import Managed from './Components/pages/Managed';
import Marketing from './Components/pages/Marketing';
import Development from './Components/pages/Development';
import Career from './Components/pages/more/Career';
import Website from './Components/pages/more/Website';
import Contactus from './Components/pages/more/Contactus';

function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Hardware'element={<Hardware/>}/>
      <Route path='/Managed'element={<Managed/>}/>
      <Route path='/Marketing'element={<Marketing/>}/>
      <Route path='/Development'element={<Development/>}/>
      <Route path='/ContactUs'element={<Contactus/>}/>
      <Route path='/Career'element={<Career/>}/>
      <Route path='/Website'element={<Website/>}/>

    </Routes>
    <Footer/>

     </>
    
  );
}

export default App;
