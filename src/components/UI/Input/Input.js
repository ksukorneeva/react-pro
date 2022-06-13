import React from 'react';
import './Input.scss';

const Input = ({ type = 'text', id, text, change, value }) => {
    return (
        <div className='field'>
            <input
                id={id}
                type={type}
                placeholder=' '
                onChange={change}
                defaultValue={value}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default Input;
