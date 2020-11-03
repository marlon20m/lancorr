import React from 'react';
import Navigation from "../components/Navbar/Navigation";
import Hero from "../components/Hero/Hero";
import ParallaxEffect from '../components/Parallax/ParallaxEffect';

import "react-bulma-components/lib/components/navbar";
import "../sass/main.scss";


function Inicio() {
    return (
        <>
     <Navigation />
     
     <ParallaxEffect />
     
     <Hero />
        </>
    )
}

export default Inicio;