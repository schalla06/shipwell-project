import React from 'react';

const Input = ({label, type, name, id, value, onChange, onBlur, error, errorMessage }) => {
    return(
        <p>
            <label htmlFor={name}>
              <span>{label}</span>
            </label>
            {error && (
              <span className="error">{errorMessage}</span>
            )}
            <input
              type={type}
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            ></input>
          </p>

    );
}

export default Input;