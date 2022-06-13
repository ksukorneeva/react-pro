import React from 'react';
import './Button.scss';

const Button = ({ text, color, disabled, click }) => {
    const cls = ['btn'];
    if (color) {
        cls.push(color);
    }
    return (
        <button className={cls.join(' ')} disabled={disabled} onClick={click}>
            {text}
        </button>
    );
};

export default Button;
