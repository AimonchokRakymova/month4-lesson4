import React from 'react';
import './buttonStyle'

const Button = ({ onClick, label , styleClass}) => {
    return (
        <button className={styleClass} onClick={onClick}>
            {label}
        </button>
    );
};
export default Button;