// Rotas.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import TabelaUsuarios from "./Pages/ListaUsuarios";
import Survey from "./Pages/Survey";
import Surveyd from "./Pages/Surveyd";
import Surveyt from "./Pages/Surveyt";
import Surveyq from "./Pages/Surveyq";
import Surveyc from "./Pages/Surveyc";
import Surveyss from "./Pages/Surveyss";
import Surveys from "./Pages/Surveys";
import Surveyo from "./Pages/Surveyo";
import Surveyn from "./Pages/Surveyn";
import Surveydez from "./Pages/Surveydez";
import Surveyonze from "./Pages/Surveyonze";
import Surveydoze from "./Pages/Surveydoze";
import Surveytreze from "./Pages/Surveytreze";
import Surveyqua from "./Pages/Surveyqua";
import Surveyqui from "./Pages/Surveyqui";
import Surveydzss from "./Pages/Surveydzss";
import Surveydzs from "./Pages/Surveydzs";
import Surveydzo from "./Pages/Surveydzo";
import Surveydzn from "./Pages/Surveydzn";
import Surveyvinte from "./Pages/Surveyvinte";
import Surveyvu from "./Pages/Surveyvu";
import Surveyvd from "./Pages/Surveyvd";
import Surveyvt from "./Pages/Surveyvt";
import Surveyvq from "./Pages/Surveyvq";
import Surveyvc from "./Pages/Surveyvc";
import Login from "./Pages/Login";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/Survey" element={<Survey />} />
      <Route path="/Surveyd" element={<Surveyd />} />
      <Route path="/Surveyt" element={<Surveyt />} />
      <Route path="/Surveyq" element={<Surveyq />} />
      <Route path="/Surveyc" element={<Surveyc />} />
      <Route path="/Surveyss" element={<Surveyss />} />
      <Route path="/Surveys" element={<Surveys />} />
      <Route path="/Surveyo" element={<Surveyo />} />
      <Route path="/Surveyn" element={<Surveyn />} />
      <Route path="/Surveydez" element={<Surveydez />} />
      <Route path="/Surveyonze" element={<Surveyonze />} />
      <Route path="/Surveydoze" element={<Surveydoze />} />
      <Route path="/Surveytreze" element={<Surveytreze />} />
      <Route path="/Surveyqua" element={<Surveyqua />} />
      <Route path="/Surveyqui" element={<Surveyqui />} />
      <Route path="/Surveydzss" element={<Surveydzss />} />
      <Route path="/Surveydzs" element={<Surveydzs />} />
      <Route path="/Surveydzo" element={<Surveydzo />} />
      <Route path="/Surveydzn" element={<Surveydzn />} />
      <Route path="/Surveyvinte" element={<Surveyvinte />} />
      <Route path="/Surveyvu" element={<Surveyvu />} />
      <Route path="/Surveyvd" element={<Surveyvd />} />
      <Route path="/Surveyvt" element={<Surveyvt />} />
      <Route path="/Surveyvq" element={<Surveyvq />} />
      <Route path="/Surveyvc" element={<Surveyvc />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default Rotas;
