import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";

function App() {
  return (
    <>
      <Navbar />
      <HomeBody />
      
    </>
  );
}

export default App;
