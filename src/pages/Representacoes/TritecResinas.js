import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/RepresentacoesHero";
import TritecCard from "../../components/RepresentCards/TritecCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function TritecResinas() {
    return (
        <>
        <Navigation />
        <BeplastHero />
        <TritecCard />
         </>
    )
}

export default TritecResinas;