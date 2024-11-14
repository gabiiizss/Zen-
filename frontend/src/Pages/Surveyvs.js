import React, { useState } from 'react';
import '../gabi/surveyvs.css';

function Survey() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleNext = () => {
    // Lógica para ir ao próximo passo
    console.log("Altura:", height, "Peso:", weight);
  };

  return (
    <div className="survey-container">
      <h1>Flo - Female Health App</h1>
      
      <button className="skip-button">Pular</button>

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

      <button className="next-button" onClick={handleNext} disabled={!height || !weight}>
        Próximo
      </button>
    </div>
  );
}

export default Survey;
