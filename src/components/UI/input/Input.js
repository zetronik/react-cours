import React from 'react'
import './Input.css'

function Input({type, name, onChange, value, placeholder, isValid, isInvalid}) {
    const cls = ['form-control']
    if (isInvalid) {
        cls.push('input__control-invalid')
    }
    if (isValid) {
        cls.push('input__control-valid')
    }

    return (
        <input
            className={cls.join(' ')}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={event => onChange(event)}
        />
    );
}

export default Input;
