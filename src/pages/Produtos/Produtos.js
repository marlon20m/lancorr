import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import ProductCards from "../../components/ProductCards/ProductCards"
import ProdutoHero from "../../components/Hero/ProdutoHero";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Produtos() {
    return (
        <>
     <Navigation />
     <ProdutoHero />
     <ProductCards />
        </>
    )
}

export default Produtos;