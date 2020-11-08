import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import ProductCards from "../../components/ProductCards/ProductCards";
import ResinasHero from "../../components/Hero/ResinasHero";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function ResinasPetroquimicas() {
    return (
        <>
     <Navigation />
     <ResinasHero />
     <ProductCards />
        </>
    )
}

export default ResinasPetroquimicas;