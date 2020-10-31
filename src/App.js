import React from 'react';
import "react-bulma-components/lib/components/navbar";
import "react-bulma-components/lib/components/container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from  "./pages/Inicio";
import QuemSomos from "./pages/QuemSomos";
import AditivosFuncionais from  "./pages/AditivosFuncionais";
import AditivosBiodegradaveis from "./pages/AditivosBiodegradaveis";
import CompostosTermoplasticos from "./pages/CompostosTermoplasticos"
import "./sass/main.scss";

const App = () => {
    return (
      
     <Router>
       <div>
        <Switch>
         <Route  path="/" exact component={Inicio} />
         <Route  path="/QuemSomos" exact component={QuemSomos} />
         <Route  path="/AditivosBiodegradaveis" exact component={AditivosBiodegradaveis} />
         <Route  path="/AditivosFuncionais" exacr  component={AditivosFuncionais} />
         <Route  path="/CompostosTermoplasticos" exact component={CompostosTermoplasticos} />
        </Switch> 
       </div>
     </Router>
    )
}

export default App;
