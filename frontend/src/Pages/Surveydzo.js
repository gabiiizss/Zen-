import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import '../gabi/survey.css';

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      navigate('/surveydzn'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.'); // Alerta se nenhuma opção for selecionada
    }
  };

  return (
    <div className="survey-container">
      <h2>Você lida bem com os sintomas da TPM?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Sim' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Sim"
                checked={selectedOption === 'Sim'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Sim
            </label>
            <label className={`option-label ${selectedOption === 'Não' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Não"
                checked={selectedOption === 'Não'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Não
            </label>
            <label className={`option-label ${selectedOption === 'Prefiro não responder' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Prefiro não responder"
                checked={selectedOption === 'Prefiro não responder'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Prefiro não responder
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;