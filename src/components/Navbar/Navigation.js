import React from "react";
import Navbar from "react-bulma-components/lib/components/navbar";


import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item-img-max-height" href="https://bulma.io">
      <img
        className="lancorrLogo" src="https://i.ibb.co/DkLN9KG/Lan-Corr-Logo.jpg"
        />
    </a>
    <a
      role="button"
      className="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a href="/" className="navbar-item" >Início</a>
      <a href="/QuemSomos" className="navbar-item">Quem Somos</a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">Produtos</a>
        <div className="navbar-dropdown is-right">
          <a href="/AditivosFuncionais" className="navbar-item">ADITIVOS FUNCIONAIS</a>
          <a href="/AditivosBiodegradaveis" className="navbar-item">ADITIVOS BIODEGRADÁVEIS</a>
          <a href="/CompostosTermoplasticos"className="navbar-item">COMPOSTOS TERMOPLÁSTICOS</a>
          <a href="/Masterbatches" className="navbar-item">MASTERBATCHES</a>
          <a href="/ResinasPetroquimicas" className="navbar-item">RESINAS PETROQUÍMICAS</a>
          </div>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" to="/Servicos">Serviços</a>
        <div className="navbar-dropdown is-right">
          <a href="/Industrializacao" className="navbar-item">INDUSTRIALIZAÇAO</a>
          <a href="/Desenvolvimentos" className="navbar-item">DESENVOLVIMENTOS</a>
        </div>
        </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">Representações</a>
        <div className="navbar-dropdown is-right">
          <a href="/Beplast" className="navbar-item">BEPLAST</a>
          <a href="/EcoVentures" className="navbar-item">ECO VENTURES BIOPLASTICS</a>
          <a href="/Prisma" className="navbar-item">PRISMA</a>
          <a href="/TritecResinas" className="navbar-item">TRITEC RESINAS</a>
          <hr className="navbar-divider" />
          </div>
        </div>
      </div>
    </div>
</nav>
  
  )
}

export default Navigation;
