import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/BeplastHero";
import RepresentCards from "../../components/RepresentCards/RepresentCards";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";


function Beplast() {
    return (
       <>
     <Navigation />
     <BeplastHero />
     <RepresentCards />
       </>
    )
  }    
   

export default Beplast;