// Home
import React from "react";
import Sob from "../Components/Sobre";
import StarRating from '../Components/Estrelas';
import Cards from "../Components/Card";
import Navisa from "../Components/Navisa"
import Roda from "../Components/Footer";

function Home() {
  return (
    <>
      <Navisa />
      <Sob />
      <StarRating />
      <Cards />
      <Roda />
    </>
  );
};

export default Home;
