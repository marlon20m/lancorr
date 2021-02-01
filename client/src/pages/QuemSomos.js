import React from 'react';
import Navigation from "../components/Navbar/Navigation"
import InicioHero from "../components/Hero/InicioHero"
import DemoCarousel from "../components/Carousel/Carousel"
import "react-bulma-components/lib/components/navbar";
import "../sass/main.scss";

function QuemSomos() {
    return (
        <>
            <Navigation />
            <DemoCarousel />
            <InicioHero />
        </>
    )
}

export default QuemSomos;