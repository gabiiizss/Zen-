import React from 'react';
import Option from './Option';

function Question({ question, onOptionClick, selectedOption }) {
  return (
    <div>
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map(option => (
          <Option 
            key={option.id} 
            option={option} 
            onClick={() => onOptionClick(question.id, option.id)}
            isSelected={selectedOption === option.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
