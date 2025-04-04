import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hardware from "../pages/Hardware";
import Managed from "../pages/Managed";
import Marketing from "../pages/Marketing";
import Development from "../pages/Development";
import Career from "../pages/more/Career";
import Website from "../pages/more/Website";
import Contactus from "../pages/more/Contactus";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hardware" element={<Hardware />} />
        <Route path="/Managed" element={<Managed />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Development" element={<Development />} />
        <Route path="/ContactUs" element={<Contactus />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Website" element={<Website />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
