import React from "react";
import "react-bulma-components/lib/components/navbar";

function MasterbatchesHero() {
  return (
    <>
      <section className="hero is-large masterbatches-hero is-large-mobile ">
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title has-text-white has-text-weight-bold title-text-ah is-size-1 is-size-3-mobile is-uppercase">
              Masterbatches
            </h1>
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className="hero is-small is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white is">
              Masterbatches
            </h1>
            <h2 className="subtitle has-text-white">
              Através da aplicação de concentrados de cor, formulados nos mais diversos tipos de bases poliméricas (EVA; PP; PE; PS; PVC; elastômeros; e plásticos engenharia), obtém-se
              características direrenciadas como: pigmentação/cores, efeitos, e acabamentos especiais.
              A BEPLAST apresenta mais de 45.000 cores catalogadas, desenvolvendo cores personalizadas, e também a partir de escalas internacionais como a Pantone, e padrões RAL.
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}


export default MasterbatchesHero;