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
      navigate('/surveyvt'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Você tem alguma disfunção reprodutiva (como endometriose, SOP, etc.)?</h2>
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
            <label className={`option-label ${selectedOption === 'Não, mas já tive' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Não, mas já tive"
                checked={selectedOption === 'Não, mas já tive'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Não, mas já tive
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
