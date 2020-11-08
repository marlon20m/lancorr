import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import EcoVenturesHero from "../../components/Hero/EcoVenturesHero";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function EcoVentures() {
    return (
        <>
     <Navigation />
     <EcoVenturesHero />
        </>
    )
}

export default EcoVentures;