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
      navigate('/surveydzs'); // Substitua por sua próxima página
    } else {
      alert('Por favor, selecione uma opção.'); // Alerta se nenhuma opção for selecionada
    }
  };

  return (
    <div className="survey-container">
      <h2>Você sente cólica antes de menstruar?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'option1' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Sim
            </label>
            <label className={`option-label ${selectedOption === 'option2' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Não
            </label>
            <label className={`option-label ${selectedOption === 'option3' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Às vezes
            </label>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Survey;
