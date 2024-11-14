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
      navigate('/surveyvc'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Quer cuidar de algum aspecto do seu bem-estar mental?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Estresse' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Estresse"
                checked={selectedOption === 'Estresse'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Estresse
            </label>
            <label className={`option-label ${selectedOption === 'Mudanças de humor' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Mudanças de humor"
                checked={selectedOption === 'Mudanças de humor'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Mudanças de humor
            </label>
            <label className={`option-label ${selectedOption === 'Ansiedade' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Ansiedade"
                checked={selectedOption === 'Ansiedade'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Ansiedade
            </label>
            <label className={`option-label ${selectedOption === 'Depressão' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Depressão"
                checked={selectedOption === 'Depressão'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Depressão
            </label>
            <label className={`option-label ${selectedOption === 'Falta de disposição' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Falta de disposição"
                checked={selectedOption === 'Falta de disposição'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Falta de disposição
            </label>
            <label className={`option-label ${selectedOption === 'Estou bem' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Estou bem"
                checked={selectedOption === 'Estou bem'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Estou bem
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
