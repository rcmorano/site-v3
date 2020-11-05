import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import About from "./components/about/About";
import CskList from "./components/csks/CskList";
import CskDetail from "./components/csks/CskDetail";
import ApiList from "./components/apis/ApiList";
// import ApiDetail from "./components/apis/ApiDetail"
import NotFound from "./components/errors/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/cardano-starter-kits" component={CskList} />
        <Route path="/cardano-starter-kits/:id" component={CskDetail} />
        <Route path="/open-source-apis" component={ApiList} />
        {/* <Route path="/open-source-apis/:id" component={ApiDetail} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
