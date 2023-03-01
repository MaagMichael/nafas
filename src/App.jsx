// https://www.instagram.com/nafas.muenchen/

// import { useState } from "react";
// import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import Events from "./components/Events"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {
  
  return (
    <div className="App">


    <main className="">
      <Navbar />
      <Home />
      <Products />
      <Events/>
      <About/>
      <Contact/>
    </main>

      
      
      {/* <div className="card_section">
        {Dishes &&
          Dishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="container"
                onClick={() => infoDetail(dish.id)}
              >
                <img src={dish.URL} className="image" alt="dish" />
                <div class="overlay">
                  {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
                  Zutaten: {dish.ingredients} 
                </div>
              </div>
            );
          })}
      </div> */}

      

      
    </div>
  );
}

export default App;
