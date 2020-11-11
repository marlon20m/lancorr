import React from 'react';
import Navigation from "../../components/Navbar/Navigation"
import ProductCards from "../../components/ProductCards/ProductCards"
import MasterbatchesHero from "../../components/Hero/MasterbatchesHero";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Masterbatches() {
    return (
        <>
    <Navigation />
    <MasterbatchesHero />
    <ProductCards />
        </>
    )
}

export default Masterbatches;