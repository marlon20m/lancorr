import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import AditivosHero from '../../components/Hero/AditivosHero';
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";


function AditivosFuncionais() {
    return (
        <>
     <Navigation />
     <AditivosHero />
        </>
    )
}

export default AditivosFuncionais;