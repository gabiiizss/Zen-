import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../gabi/surveyvs.css';

function Survey() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleNext = () => {
    console.log("Altura:", height, "Peso:", weight);
    navigate('/surveyo'); // Navega para a página Surveyo
  };

  const handleSkip = () => {
    navigate('/surveyo'); // Navega para a página Surveyo ao pular
  };

  return (
    <div className="survey-container">
      <h1>Zen  - Aplicativo de saúde feminina</h1>

      
      <div className="question">
        <h2>Qual é sua altura e peso?</h2>

        <div className="input-container">
          <label htmlFor="height">cm</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Altura"
          />
        </div>

        <div className="input-container">
          <label htmlFor="weight">kg</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Peso"
          />
        </div>
      </div>

      {/* O botão só estará habilitado se altura e peso estiverem preenchidos */}
      <button className="next-button" onClick={handleNext} disabled={!height || !weight}>
        Próximo
      </button>
    </div>
  );
}

export default Survey;
