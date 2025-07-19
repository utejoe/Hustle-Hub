import React from 'react';
import './FormInput.css';

const FormInput = ({ label, name, value, onChange, textarea = false, placeholder = '' }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows="4"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
