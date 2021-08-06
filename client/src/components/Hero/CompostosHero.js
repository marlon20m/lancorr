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
              Compostos Termoplásticos      </h1>
            <h2 className="subtitle has-text-white">
              Estes compostos são formulados a partir de blendas de polimeros, aditivos, reforços, e outros insumos, que incorporados à
              resina base modificam a sua estrutura original proporcionando melhor performance técnica.
              Oferecemos aos clientes o desenvolvimento personalizado para atender aos seus projetos, e tambem dispomos de uma linha
              de compostos de elastômeros termoplásticos (TPE;TPU;TR) de marcas de renome no mercado nacional e internacional.
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}


export default CompostosHero;
