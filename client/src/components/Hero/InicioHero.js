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
            <h1 className="subtitle has-text-white">A LANCORR Consultoria e Representações  iniciou as suas atividades em 2011, idealizada
            a partir da ampla experiência de seu fundador, em grandes empresas do setor químico
            e petroquímico, tendo por propósito oferecer soluções ao setor de transformação de plásticos
            através do desenvolvimento customizado, e de um diversificado portfólio de produtos.
            Este projeto foi viabilizado por alianças estratégicas com grandes empresas, referências no setor
            plástico: fabricantes e distribuidores.
</h1>
            <br />
          </div>
        </div>
      </section>
      <section className="hero is-medium has-bg-img2" >
        <div className="hero-body">
          <div className="container">
            <div className="column is-mobile">
              <h1 className="subtitle-description"></h1>
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
