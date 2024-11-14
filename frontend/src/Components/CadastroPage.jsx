import React from 'react';
import CadastroForm from './CadastroForm';
import './CadastroPage.css'; // Estilos da página
import celularImg from '../imagens/celular.png'; // Atualize para o caminho correto

const CadastroPage = () => {
  return (
    <div className="cadastro-page">
      <div className="cadastro-content">
        <div className="cadastro-image">
          <img src={celularImg} alt="Cadastro Visual" />
        </div>
        <CadastroForm />
      </div>
    </div>
  );
};

export default CadastroPage;
