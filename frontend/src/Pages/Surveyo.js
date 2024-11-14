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
      navigate('/surveyn'); // Navega para a página Surveyn
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Como você gostaria de estimular sua vida sexual?</h2>
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
              Quero sentir mais conexão durante o sexo
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
              Quero ter orgasmos melhores
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
              Quero deixar o sexo mais divertido
            </label>
            <label className={`option-label ${selectedOption === 'option4' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Quero me sentir mais confiante na cama
            </label>
            <label className={`option-label ${selectedOption === 'option5' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="option5"
                checked={selectedOption === 'option5'}
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
