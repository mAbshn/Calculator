import React, { useContext } from 'react';
import { Context } from '../context';
import "../styles/Calc.scss";
import MyInput from './UI/MyInput/MyInput';

const Display = () => {

    const {color, result} = useContext(Context);

    return (
        <div className="calc__display" style={{border: `1px solid ${color}`}}>
            <MyInput/>
            <div className="calc__result">{result}</div>
        </div>
    );
};

export default Display;