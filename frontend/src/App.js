import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui

const App = () => {
  return (
    <>
      <Router>
        
        <Rotas />
      </Router>
    </>
  );
};

export default App;
