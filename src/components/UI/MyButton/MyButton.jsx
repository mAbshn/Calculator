import React, { useContext } from 'react';
import { ColorContext } from '../../../context';
import cl from './MyButton.module.scss';

const MyButton = ({children, onClick}) => {

    const {color, setColor} = useContext(ColorContext
        );
    let isDarkGray = children === '×' || children === '÷' || children === '(' || children === ')' || children === '%' || children === 'AC' || children === '-' || children === '+';
    let isBlue = children === '=';

    return (
        <button onClick={onClick} className={cl.calc__btn} style={isDarkGray ? {background: '#e0e2e6'} : (isBlue ? {background: `${color}`, color: 'white'} : {background: '#f1f3f4'})}>
            {children}
        </button>
    );
};

export default MyButton;