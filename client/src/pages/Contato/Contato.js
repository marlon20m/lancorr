import React from "react";
import Navigation from "../../components/Navbar/Navigation";
import ContatoHero from "../../components/Hero/ContatoHero";
import ContatoBar from "../../components/Hero/ContatoBarHero";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Contato() {
  return (
		<>
	  <Navigation />
    <ContatoBar />
      <ContatoHero />
        </>
            )
          }
      

export default Contato;