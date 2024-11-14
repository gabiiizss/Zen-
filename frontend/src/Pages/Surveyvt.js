import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../gabi/survey.css';

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      navigate('/surveyvq'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Você usa algum método anticoncepcional?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Sinto dificuldade para dormir' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Sinto dificuldade para dormir"
                checked={selectedOption === 'Sinto dificuldade para dormir'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Sinto dificuldade para dormir
            </label>
            <label className={`option-label ${selectedOption === 'Ja acordo com cansaço' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Ja acordo com cansaço"
                checked={selectedOption === 'Ja acordo com cansaço'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Já acordo com cansaço
            </label>
            <label className={`option-label ${selectedOption === 'Costumo acordar durante a noite' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Costumo acordar durante a noite"
                checked={selectedOption === 'Costumo acordar durante a noite'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Costumo acordar durante a noite
            </label>
            <label className={`option-label ${selectedOption === 'Não tenho uma boa rotina para dormir' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Não tenho uma boa rotina para dormir"
                checked={selectedOption === 'Não tenho uma boa rotina para dormir'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Não tenho uma boa rotina para dormir
            </label>
            <label className={`option-label ${selectedOption === 'Tenho insônia' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Tenho insônia"
                checked={selectedOption === 'Tenho insônia'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Tenho insônia
            </label>
            <label className={`option-label ${selectedOption === 'Eu durmo bem' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Eu durmo bem"
                checked={selectedOption === 'Eu durmo bem'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Eu durmo bem
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
