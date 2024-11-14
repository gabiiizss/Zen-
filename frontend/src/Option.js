import React from 'react';

function Option({ option, onClick, isSelected }) {
  return (
    <button 
      className={`option ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {option.text}
    </button>
  );
}

export default Option;
