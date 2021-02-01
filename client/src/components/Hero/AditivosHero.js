import React from "react";
import "react-bulma-components/lib/components/navbar";

function AditivosHero() {
  return (
      <>
    <section className="hero is-large aditivos-hero-one is-large-mobile "> 
      <div className="hero-body"> 
        <div className="container has-text-left"> 
        <h1 className="title has-text-white has-text-weight-bold title-text-ah is-size-1 is-size-3-mobile is-uppercase">
        Aditivos<br />
        Funcionais
      </h1>
        </div> 
      </div> 
    </section>
    <section className="hero is-small is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title has-text-white is">
      Aditivos Funcionais      </h1>
      <h2 className="subtitle has-text-white">
      Estes concentrados de aditivos são formulados para proporcionar melhor desempenho aos artefatos plásticos, atendendo a
    diversas exigências técnicas: proteção a intempéries e radiação UV; evitar a propagação de chama; resistência ao impacto;
    evitar o bloqueio de embalagens plásticas; reduzir e/ou eliminar a eletricidade estática; proteção contra degradação térmica;
    proteção microbiana; inibidor/modificador de odores; etc.
    A linha de produtos: estabilizantes UV; antiestático; antiblock; modificador de impacto; antichamas; deslizantes; antimicrobiano;
    aromatizantes; antioxidantes; etc.
      </h2>
    </div>
  </div>
</section>
      </>
        )
      }
      

export default AditivosHero;
