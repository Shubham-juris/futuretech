import React from 'react';

import './App.css';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    <Footer/>

     </>
    
  );
}

export default App;
