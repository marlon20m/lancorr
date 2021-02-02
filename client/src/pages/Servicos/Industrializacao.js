import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import ServicosHero from "../../components/Hero/ServicosHero"
import RepresentacoesCard from "../../components/RepresentCards/RepresentacoesCard"
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Industrializacao() {
    return (
        <>
            <Navigation />
            <ServicosHero />
            <RepresentacoesCard />
        </>
    )
}

export default Industrializacao;