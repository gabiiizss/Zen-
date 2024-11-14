import React from 'react';
import { Link } from 'react-router-dom';
import exampleImage from '../imagens/sem_beje-removebg-preview.png'; // Substitua pelo caminho da sua imagem

const ImageLink = () => {
  return (
    <div>
      <Link to="/home">
        <img src={exampleImage} alt="Ir para Home" style={{ cursor: 'pointer', width: '100px' }} />
      </Link>
    </div>
  );
};

export default ImageLink;
