import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/RepresentacoesHero";
import RepresentacoesCard from "../../components/RepresentCards/RepresentacoesCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Representacoes() {
    return (
        <>
        <Navigation />
        <BeplastHero />
        <RepresentacoesCard />
         </>
    )
}

export default Representacoes;