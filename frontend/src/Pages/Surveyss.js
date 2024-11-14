import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      navigate('/surveys'); // Navega para a página Surveys
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Quando você se sente melhor fisicamente?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Antes da menstruação' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Antes da menstruação"
                checked={selectedOption === 'Antes da menstruação'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Antes da menstruação
            </label>
            <label className={`option-label ${selectedOption === 'Durante a menstruação' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Durante a menstruação"
                checked={selectedOption === 'Durante a menstruação'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Durante a menstruação
            </label>
            <label className={`option-label ${selectedOption === 'Depois da menstruação' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Depois da menstruação"
                checked={selectedOption === 'Depois da menstruação'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Depois da menstruação
            </label>
            <label className={`option-label ${selectedOption === 'Não sei' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Não sei"
                checked={selectedOption === 'Não sei'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Não sei
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
