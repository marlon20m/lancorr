import React from "react";
import "react-bulma-components/lib/components/navbar";

function InicioHero() {
  return (
    <>

      <section className="hero is-small is-bold" id={"section1"}>
        <div className="hero-body">
          <div className="container">
            <br />
            <h1 className="title has-text-white">Quem somos</h1>
            <br />
            <h1 className="subtitle has-text-white">
              A LANCORR Consultoria e Representações iniciou as suas atividades em 2011, idealizada com o propósito de oferecer soluções ao setor de transformação de plásticos
              através de desenvolvimentos customizados, e de um diversificado portfólio de produtos, embasada na experiência em gestão de negócios e em relacionamentos com
              grandes empresas dos setores químico e petroquímico. O projeto viabilizou-se por alianças estratégicas com empresas referências destes segmentos.
            </h1>
            <br />
          </div>
        </div>
      </section>
      <section className="hero is-medium has-bg-img2" >
        <div className="hero-body">
          <div className="container">
            <div className="column is-mobile">
              <h2 className="subtitle-description">
                Missão:
                <br />
                <br />
                'Aproximar Os Interesses de Clientes e Parceiros Estratégicos, Transformando Soluções em Negócios Rentáveis'
              </h2>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}


export default InicioHero;
