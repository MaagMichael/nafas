// https://www.instagram.com/nafas.muenchen/

// import { useState } from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
      <main className="">
        <Navbar />
        <Home />
        <Products />
        <Events />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
