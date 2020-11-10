import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/RepresentacoesHero";
import BeplastCard from "../../components/RepresentCards/BeplastCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";


function Beplast() {
    return (
       <>
     <Navigation />
     <BeplastHero />
     <BeplastCard />
       </>
    )
  }    
   

export default Beplast;