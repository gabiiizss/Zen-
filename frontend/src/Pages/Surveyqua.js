import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import '../gabi/survey.css';

const Surveydoze = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      // Redirecionar para a próxima página
      navigate('/surveyqui'); // Navega para a próxima página
    } else {
      alert('Por favor, selecione uma opção.'); // Alerta se nenhuma opção for selecionada
    }
  };

  return (
    <div className="survey-container">
      <h2>Marque o produto para menstruação que você usa:</h2>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <div className="options">
            <label className={`option-label ${selectedOption === 'Absorvente externo' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Absorvente externo"
                checked={selectedOption === 'Absorvente externo'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Absorvente externo
            </label>
            <label className={`option-label ${selectedOption === 'Absorvente interno' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Absorvente interno"
                checked={selectedOption === 'Absorvente interno'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Absorvente interno
            </label>
            <label className={`option-label ${selectedOption === 'Coletores menstruais' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="Coletores menstruais"
                checked={selectedOption === 'Coletores menstruais'}
                onChange={handleOptionChange}
                className="option-input"
              />
              <div className="option-box"></div>
              Coletores menstruais
            </label>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Surveydoze;
