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
      navigate('/Surveyvsete'); // Navega para a página de cadastro
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <div className="survey-container">
      <h2>Qual é a sua prioridade de saúde atualmente?</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label>
              <input
                type="radio"
                value="Aumentar a energia"
                checked={selectedOption === 'Aumentar a energia'}
                onChange={handleOptionChange}
              />
              Aumentar a energia
            </label>
            <label>
              <input
                type="radio"
                value="Melhorar a alimentação"
                checked={selectedOption === 'Melhorar a alimentação'}
                onChange={handleOptionChange}
              />
              Melhorar a alimentação
            </label>
            <label>
              <input
                type="radio"
                value="Praticar mais exercícios"
                checked={selectedOption === 'Praticar mais exercícios'}
                onChange={handleOptionChange}
              />
              Praticar mais exercícios
            </label>
            <label>
              <input
                type="radio"
                value="Reduzir o estresse"
                checked={selectedOption === 'Reduzir o estresse'}
                onChange={handleOptionChange}
              />
              Reduzir o estresse
            </label>
            <label>
              <input
                type="radio"
                value="Melhorar o sono"
                checked={selectedOption === 'Melhorar o sono'}
                onChange={handleOptionChange}
              />
              Melhorar o sono
            </label>
            <label>
              <input
                type="radio"
                value="Outro"
                checked={selectedOption === 'Outro'}
                onChange={handleOptionChange}
              />
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
