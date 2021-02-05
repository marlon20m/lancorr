import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import ServicosHero from "../../components/Hero/ServicosHero";
import ServicosCard from "../../components/ServicosCard/ServicosCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Desenvolvimentos() {
    return (
        <>
        <Navigation />
        <ServicosHero />
        <ServicosCard />
    </>
    )
}

export default Desenvolvimentos;