import React from 'react';
import Navigation from "../Navbar/Navigation"
import Hero from "../Hero/Hero"
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss"

function Inicio() {
    return (
        <>
     <Navigation />
     <Hero />
        </>
    )
}

export default Inicio;