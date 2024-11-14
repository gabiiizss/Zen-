import React from 'react';

const Input = ({ type, placeholder, icon }) => {
    return (
        <div className="input-group">
            <input type={type} placeholder={placeholder} required />
            <i className={`icon-${icon}`}></i>
        </div>
    );
};

export default Input;
