import React from "react";
import "react-bulma-components/lib/components/navbar";

function CompostosHero() {
  return (
      <>
    <section className="hero is-large compostos-hero is-large-mobile "> 
      <div className="hero-body"> 
        <div className="container has-text-left"> 
        <h1 className="title has-text-white has-text-weight-bold title-text-ah is-size-1 is-size-3-mobile is-uppercase">
        Compostos<br />
        Termoplásticos
      </h1>
        </div> 
      </div> 
    </section>
    <section className="hero is-small is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title has-text-white is">
      Compostos Termoplásticos      </h1>
      <h2 className="subtitle has-text-white">
      Os compostos termoplásticos são formulados a partir de blendas de polímeros, aditivos, reforços, e outros insumos, que incorporados à resina base
    modificam a sua estrutura original proporcionando melhor desempenho técnico.
      </h2>
    </div>
  </div>
</section>
      </>
        )
      }
      

export default CompostosHero;
