import React from 'react';
import "../styles/Calc.scss";
import Display from './Display';
import Keyboard from './Keyboard';

const CalcBody = () => {

    return (
        <div className="calc__body">
            <Display />
            <Keyboard />
        </div>
    );
};

export default CalcBody;