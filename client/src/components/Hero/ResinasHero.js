import React from "react";
import "react-bulma-components/lib/components/navbar";

function ResinasHero() {
  return (
    <>
      <section className="hero is-large resinas-hero is-large-mobile ">
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title has-text-white has-text-weight-bold title-text-ah is-size-1 is-size-3-mobile is-uppercase">
              Resinas<br />
        Petroquímicas
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
              Resinas Petroquímicas      </h1>
            <h2 className="subtitle has-text-white">
              Estes produtos são os polímeros plásticos utilizados em todos os tipos de processamento e transformação em diversos tipos de manufaturados: embalagens; utilidades domésticas;
              eletroeletrônicos; peças técnicas; tampas; calçados; etc.
              Algumas resinas comercializdas: ABS; PEAD; PEBD; PEBDL; PP; PS; etc.
      </h2>
          </div>
        </div>
      </section>
    </>
  )
}


export default ResinasHero;