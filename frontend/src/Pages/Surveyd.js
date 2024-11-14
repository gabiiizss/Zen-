import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../gabi/survey.css';

const SurveyD = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Option:', selectedOption);
    navigate('/surveyT');
  };

  return (
    <div className="survey-container">
      <h2>Você monitora suas 🩸 menstruações?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className="option-label">
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className={`option-box ${selectedOption === 'option1' ? 'selected' : ''}`}></div>
              Sim, faço isso!
            </label>
            <label className="option-label">
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className={`option-box ${selectedOption === 'option2' ? 'selected' : ''}`}></div>
              Não, eu não sabia que precisava fazer isso
            </label>
            <label className="option-label">
              <input
                type="radio"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className={`option-box ${selectedOption === 'option3' ? 'selected' : ''}`}></div>
              Eu nunca parei para pensar nisso antes
            </label>
          </div>
        </div>
        <button type="submit">Proximo</button>
      </form>
    </div>
  );
};

export default SurveyD;
