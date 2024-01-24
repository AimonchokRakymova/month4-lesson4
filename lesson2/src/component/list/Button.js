import React from 'react';
import classes from "./button.module.css";

const Button = ({label, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {label}
        </button>
    );
};

export default Button;
