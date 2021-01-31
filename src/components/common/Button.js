import React from 'react';
import './Button.css';

const Button = ({ text, rightBtn }) => {
    return (
        <button className={rightBtn ? 'rightBtn' : ""}>{text}</button>
    );
};

export default Button;