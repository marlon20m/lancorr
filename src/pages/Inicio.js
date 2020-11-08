import React from 'react';
import Navigation from "../components/Navbar/Navigation";
import InicioHero from "../components/Hero/InicioHero";
import "react-bulma-components/lib/components/navbar";
import "../sass/main.scss";


function Inicio() {
    return (
        <>
     <Navigation />
     <InicioHero />
        </>
    )
}

export default Inicio;