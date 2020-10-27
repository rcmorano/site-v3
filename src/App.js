import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1 className="display-4">Welcome to GimbaLabs</h1>
            <p className="display-4">Mission: Mobilizing everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</p>
            <p className="display-4">Vision: A world where as many people as possible are empowered to solve problems using the Cardano platform.</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
