import React from 'react';
import "react-bulma-components/lib/components/navbar";
import "react-bulma-components/lib/components/container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import  QuemSomos from "./components/pages/QuemSomos";
import  AditivosFuncionais from "./components/pages/AditivosFuncionais";
import "./sass/main.scss";

const App = () => {
    return (
      
     <Router>
       <div>
        <Switch>
         <Route exact path="/" exact component={Inicio} />
         <Route exact path="/QuemSomos" exact component={QuemSomos} />
         <Route exact path="/AditivosFuncionais" exact component={AditivosFuncionais} />
        </Switch> 
       </div>
     </Router>
      
    )
}

export default App;
