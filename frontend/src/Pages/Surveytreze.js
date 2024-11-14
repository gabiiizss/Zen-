import React, { useState } from 'react';
import '../gabi/surveytreze.css';

const Surveytreze = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      // Redireciona para a página surveyqua
      window.location.href = '/surveyqua';
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Qual descreve melhor a consistência da sua secreção vaginal?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label onClick={() => handleOptionClick('espessa')} className={selectedOption === 'espessa' ? 'selected' : ''}>
              <div className="texture-box espessa"></div>
              Espessa e pastosa
            </label>
            <label onClick={() => handleOptionClick('rala')} className={selectedOption === 'rala' ? 'selected' : ''}>
              <div className="texture-box rala"></div>
              Rala e aquosa
            </label>
            <label onClick={() => handleOptionClick('viscosa')} className={selectedOption === 'viscosa' ? 'selected' : ''}>
              <div className="texture-box viscosa"></div>
              Viscosa
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Surveytreze;
