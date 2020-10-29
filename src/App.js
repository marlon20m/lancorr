import React from 'react';
import Navigation from "./components/Navbar/Navigation"
import Hero from "./components/Hero/Hero"
import Navbar from "react-bulma-components/lib/components/navbar";
import "./sass/main.scss"

const App = () => {
    return (
      <>
      <Navigation />
      <Hero />
      </>
    )
}

export default App;
