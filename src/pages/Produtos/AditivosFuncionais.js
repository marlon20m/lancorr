import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import AditivosHero from '../../components/Hero/AditivosHero';
import Modal from "../../components/Modal/Modal"
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";


function AditivosFuncionais() {
    return (
        <>
     <Navigation />
     <AditivosHero />
     <Modal />
        </>
    )
}

export default AditivosFuncionais;