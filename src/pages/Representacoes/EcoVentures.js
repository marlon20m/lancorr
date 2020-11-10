import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/RepresentacoesHero";
import EcoVenturesCard from "../../components/RepresentCards/EcoVenturesCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";



function EcoVentures() {
    return (
        <>
     <Navigation />
     <BeplastHero />
     <EcoVenturesCard />
        </>
    )
}

export default EcoVentures;