import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"; 
import BootstrapCarousel from './components/BootstrapCarousel';
import Navigation from "./components/Navigation";
import MainCourse from "./components/MainCourse";
import ComboOffers from "./components/ComboOffers";
import Watermelon from "./components/Watermelon";
import Brownies from "./components/Brownies";

function App(){ 
  return( 

    <div className="App">
      <Header />
      <BootstrapCarousel />
      <Navigation />
      <MainCourse />
      <ComboOffers />
      <Watermelon />
      <Brownies />
    

    </div>
  )
}

export default App
