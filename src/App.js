import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CSKs from "./components/pages/CSKs";
import APIs from "./components/pages/APIs";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cardano-starter-kits" component={CSKs} />
        <Route path="/open-source-apis" component={APIs} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
