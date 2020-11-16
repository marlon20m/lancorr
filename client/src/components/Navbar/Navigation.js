import React from "react";
import { Link } from "react-router-dom";
import "react-bulma-components/lib/components/navbar";

function Navigation() {
  return (
    <nav className="navbar fixed-navbar is-spaced navbar-bg" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item-img-max-height" href="https://bulma.io">
      <img
        className="lancorrLogo" src="https://i.ibb.co/DkLN9KG/Lan-Corr-Logo.jpg" alt="Logo"
        />
    </a>
    <a 
      role="button"
      className="navbar-burger burger"
      aria-label="menu"
      aria-expanded="true"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <Link to="/" className="navbar-item" >Início</Link>
      <Link to="/QuemSomos" className="navbar-item">Quem Somos</Link>
      <div className="navbar-item has-dropdown is-hoverable">
      <Link to="/Produtos" className="navbar-link">Produtos</Link>
        <div className="navbar-dropdown is-right">
          
        <Link to="/AditivosFuncionais" className="navbar-item">ADITIVOS FUNCIONAIS</Link>
          <Link to="/AditivosBiodegradaveis" className="navbar-item">ADITIVOS BIODEGRADÁVEIS</Link>
          <Link to="/CompostosTermoplasticos"className="navbar-item">COMPOSTOS TERMOPLÁSTICOS</Link>
          <Link to="/Masterbatches" className="navbar-item">MASTERBATCHES</Link>
          <Link to="/ResinasPetroquimicas" className="navbar-item">RESINAS PETROQUÍMICAS</Link>
          <Link to="/Produtos" className="navbar-item">VER TODOS</Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
        <Link to="/Servicos" className="navbar-link" to="/Servicos">Serviços</Link>
        <div className="navbar-dropdown is-right">
          <Link to="/Industrializacao" className="navbar-item">INDUSTRIALIZAÇAO</Link>
          <Link to="/Desenvolvimentos" className="navbar-item">DESENVOLVIMENTOS</Link>
        </div>
        </div>

      <div className="navbar-item has-dropdown is-hoverable">
       <Link to="/Representacoes" className="navbar-link" >Representações</Link>
        <div className="navbar-dropdown is-right">
          <Link to="/Beplast/#section1" className="navbar-item">BEPLAST</Link>
          <Link to="/EcoVentures/#section2" className="navbar-item">ECO VENTURES BIOPLASTICS</Link>
          <Link to="/Prisma/#section3" className="navbar-item">PRISMA</Link>
          <Link to="/TritecResinas/#section4" className="navbar-item">TRITEC RESINAS</Link>
          <Link to="/Representacoes" className="navbar-item" >VER TODOS</Link>

          <hr className="navbar-divider" />
          </div>
        </div>
        <Link to="/Contato" className="navbar-item" >Contato</Link>
      </div>
    </div>

    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <Link to="/" className="navbar-item" >Início</Link>
      <Link to="/QuemSomos" className="navbar-item">Quem Somos</Link>
      <div className="navbar-item has-dropdown is-hoverable">
      <Link to="/Produtos" className="navbar-link">Produtos</Link>
        <div className="navbar-dropdown is-right">
          
          <Link to="/AditivosFuncionais" className="navbar-item">ADITIVOS FUNCIONAIS</Link>
          <Link to="/AditivosBiodegradaveis" className="navbar-item">ADITIVOS BIODEGRADÁVEIS</Link>
          <Link to="/CompostosTermoplasticos"className="navbar-item">COMPOSTOS TERMOPLÁSTICOS</Link>
          <Link to="/Masterbatches" className="navbar-item">MASTERBATCHES</Link>
          <Link to="/ResinasPetroquimicas" className="navbar-item">RESINAS PETROQUÍMICAS</Link>
          <Link to="/Produtos" className="navbar-item">VER TODOS</Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
        <Link to="/Servicos" className="navbar-link" to="/Servicos">Serviços</Link>
        <div className="navbar-dropdown is-right">
        <Link to="/Industrializacao" className="navbar-item">INDUSTRIALIZAÇAO</Link>
        <Link to="/Desenvolvimentos" className="navbar-item">DESENVOLVIMENTOS</Link>
        </div>
        </div>

      <div className="navbar-item has-dropdown is-hoverable">
      <Link to="/Representacoes" className="navbar-link" >Representações</Link>
        <div className="navbar-dropdown is-right">
        <Link to="/Beplast/#section1" className="navbar-item">BEPLAST</Link>
        <Link to="/EcoVentures/#section2" className="navbar-item">ECO VENTURES BIOPLASTICS</Link>
        <Link to="/Prisma/#section3" className="navbar-item">PRISMA</Link>
        <Link to="/TritecResinas/#section4" className="navbar-item">TRITEC RESINAS</Link>
        <Link to="/Representacoes" className="navbar-item" >VER TODOS</Link>

          <hr className="navbar-divider" />
          </div>
        </div>
        <Link to="/Contato" className="navbar-item" >Contato</Link>
      </div>
    </div>
</nav>
  )
}

export default Navigation;
