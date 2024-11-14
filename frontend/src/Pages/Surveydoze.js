import React, { useState } from 'react';
import '../gabi/surveydoze.css';

const Surveydoze = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redireciona para a página surveytre
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      window.location.href = '/surveytreze';
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Qual cor sua secreção fora da menstruação?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'transparente' ? 'selected' : ''}`} onClick={() => handleOptionChange('transparente')}>
              <span className="color-circle transparente"></span> 
              Transparente
            </label>
            <label className={`option-label ${selectedOption === 'branca' ? 'selected' : ''}`} onClick={() => handleOptionChange('branca')}>
              <span className="color-circle branca"></span> 
              Branca
            </label>
            <label className={`option-label ${selectedOption === 'cinza' ? 'selected' : ''}`} onClick={() => handleOptionChange('cinza')}>
              <span className="color-circle cinza"></span> 
              Cinza
            </label>
            <label className={`option-label ${selectedOption === 'amarela' ? 'selected' : ''}`} onClick={() => handleOptionChange('amarela')}>
              <span className="color-circle amarela"></span> 
              Amarela
            </label>
            <label className={`option-label ${selectedOption === 'verde' ? 'selected' : ''}`} onClick={() => handleOptionChange('verde')}>
              <span className="color-circle verde"></span> 
              Verde
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Surveydoze;
