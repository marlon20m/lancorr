import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import ProductCards from "../../components/ProductCards/ProductCards"
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function CompostosTermoplasticos() {
    return (
        <>
     <Navigation />
     <ProductCards />
        </>
    )
}

export default CompostosTermoplasticos;