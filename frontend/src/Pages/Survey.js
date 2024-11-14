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
    console.log('Selected Option:', selectedOption);
    navigate('/surveyD');
  };

  return (
    <div className="survey-container">
      <h2>Você já utilizou nosso site?</h2>
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
              Sim, várias vezes!
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
              Sim, uma ou duas vezes
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
              Não, primeira vez que uso Zen
            </label>
          </div>
        </div>
        <button type="submit">Proximo</button>
      </form>
    </div>
  );
};

export default Survey;
