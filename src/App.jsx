import React from "react";
import "./App.css";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
