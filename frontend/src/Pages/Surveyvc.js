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
      navigate('/login'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Qual é a sua meta de condicionamento físico?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Perder peso' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Perder peso"
                checked={selectedOption === 'Perder peso'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Perder peso
            </label>
            <label className={`option-label ${selectedOption === 'Ganhar peso' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Ganhar peso"
                checked={selectedOption === 'Ganhar peso'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Ganhar peso
            </label>
            <label className={`option-label ${selectedOption === 'Manter um peso saudável' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Manter um peso saudável"
                checked={selectedOption === 'Manter um peso saudável'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Manter um peso saudável
            </label>
            <label className={`option-label ${selectedOption === 'Começar uma rotina de exercícios' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Começar uma rotina de exercícios"
                checked={selectedOption === 'Começar uma rotina de exercícios'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Começar uma rotina de exercícios
            </label>
            <label className={`option-label ${selectedOption === 'Aprender sobre nutrição' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Aprender sobre nutrição"
                checked={selectedOption === 'Aprender sobre nutrição'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Aprender sobre nutrição
            </label>
            <label className={`option-label ${selectedOption === 'Ter mais disposição' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Ter mais disposição"
                checked={selectedOption === 'Ter mais disposição'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Ter mais disposição
            </label>
            <label className={`option-label ${selectedOption === 'Nenhum/Prefiro não responder' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Nenhum/Prefiro não responder"
                checked={selectedOption === 'Nenhum/Prefiro não responder'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Nenhum/Prefiro não responder
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
