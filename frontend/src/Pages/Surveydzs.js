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
      navigate('/Surveydzo'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Com quem você tira dúvidas sobre seu ciclo menstrual?</h2>
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
              Minhas amigas
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
              Minha ginecologista
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
              Google
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
              Outro
            </label>
          </div>
        </div>
        <button type="submit">Próximo</button>
      </form>
    </div>
  );
};

export default Survey;
