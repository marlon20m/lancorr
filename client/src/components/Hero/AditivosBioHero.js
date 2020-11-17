import React from "react";
import "react-bulma-components/lib/components/navbar";

function AditivosBioHero() {
  return (
      <>
    <section clasName="hero is-large aditivos-bio-hero is-large-mobile "> 
      <div className="hero-body"> 
        <div className="container has-text-left"> 
        <h1 className="title has-text-white has-text-weight-bold title-text-ah is-size-1 is-size-3-mobile is-uppercase">
        Aditivos<br />
        Biodegradáveis
      </h1>
        </div> 
      </div> 
    </section>
    <section className="hero is-small is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title has-text-white is">
        Esse aliqua ad eiusmod non Lorem do ut deserunt.
      </h1>
      <h2 className="subtitle has-text-white">
      Os plásticos precisam de milhares de anos para se degradarem quando descartados.
    As resinas Go Green P-Life oferecem uma solução sustentável e ecologicamente correta, porque são produtos de origem natural
    que transformam qualquer plástico em plástico BIODEGRADÁVEL, sendo o único produto com certificação internacional
    a atender integralmente a normativa  ASTM 6954-4 – SPCR 141.
      </h2>
    </div>
  </div>
</section>
      </>
        )
      }
      

export default AditivosBioHero;