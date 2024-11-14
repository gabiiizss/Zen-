import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import '../gabi/survey.css';

const Surveydoze = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      navigate('/surveydzss'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.'); // Alerta se nenhuma opção for selecionada
    }
  };

  return (
    <div className="survey-container">
      <h2>Como é seu fluxo mensal?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Leve' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Leve"
                checked={selectedOption === 'Leve'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Leve
            </label>
            <label className={`option-label ${selectedOption === 'Médio' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Médio"
                checked={selectedOption === 'Médio'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Médio
            </label>
            <label className={`option-label ${selectedOption === 'Intenso' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Intenso"
                checked={selectedOption === 'Intenso'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Intenso
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Surveydoze;
