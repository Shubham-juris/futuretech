import React from 'react';

import './App.css';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/pages/home/Home';
import Hardware from './Components/pages/Hardware';
import Managed from './Components/pages/Managed';
import Marketing from './Components/pages/Marketing';
import Development from './Components/pages/Development';

function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/Home'element={<Home/>}/>
      <Route path='/Hardware'element={<Hardware/>}/>
      <Route path='/Managed'element={<Managed/>}/>
      <Route path='/Markiting'element={<Marketing/>}/>
      <Route path='/Development'element={<Development/>}/>
    </Routes>
    <Footer/>

     </>
    
  );
}

export default App;
