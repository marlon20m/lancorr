import React from 'react';
import "react-bulma-components/lib/components/navbar";
import "react-bulma-components/lib/components/container";
import "./sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from  "./pages/Inicio";
import QuemSomos from "./pages/QuemSomos";
import Produtos from "./pages/Produtos/Produtos"
import AditivosFuncionais from  "./pages/Produtos/AditivosFuncionais";
import AditivosBiodegradaveis from "./pages/Produtos/AditivosBiodegradaveis";
import CompostosTermoplasticos from "./pages/Produtos/CompostosTermoplasticos";
import Masterbatches from "./pages/Produtos/Masterbatches";
import ResinasPetroquimicas from "./pages/Produtos/ResinasPetroquimicas";
import Industrializacao from "./pages/Servicos/Industrializacao";
import Desenvolvimentos from "./pages/Servicos/Desenvolvimentos";
import Beplast from "./pages/Representacoes/Beplast";
import EcoVentures from "./pages/Representacoes/EcoVentures";
import Prisma from "./pages/Representacoes/Prisma";
import TritecResinas from "./pages/Representacoes/TritecResinas";
import Footer from "./components/Footer/Footer"


const App = () => {
    return (
     <Router>
       <div>
        <Switch>
         <Route  path="/" exact component={Inicio} />
         <Route  path="/QuemSomos" exact component={QuemSomos} />
         <Route  path="/Produtos" exact component={Produtos} />
         <Route  path="/AditivosBiodegradaveis" exact component={AditivosBiodegradaveis} />
         <Route  path="/AditivosFuncionais" exacr  component={AditivosFuncionais} />
         <Route  path="/CompostosTermoplasticos" exact component={CompostosTermoplasticos} />
         <Route  path="/Masterbatches" exact component={Masterbatches} />
         <Route  path="/ResinasPetroquimicas" exact component={ResinasPetroquimicas} />
         <Route  path="/Industrializacao" exact component={Industrializacao} />
         <Route  path="/Desenvolvimentos" exact component={Desenvolvimentos} />
         <Route  path="/Beplast" exact component={Beplast} />
         <Route  path="/EcoVentures" exact component={EcoVentures} />
         <Route  path="/Prisma" exact component={Prisma} />
         <Route  path="/TritecResinas" exact component={TritecResinas} />
        </Switch> 
        <Footer />
       </div>
     </Router>
     
    )
}

export default App;
