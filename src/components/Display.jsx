import React, { useContext } from 'react';
import MyInput from './UI/MyInput/MyInput';
import "../styles/Calc.scss";
import { ColorContext } from '../context';

const Display = ({input, setInput, result, setResult}) => {

    const {color, setColor} = useContext(ColorContext); 

    return (
        <div className="calc__display" style={{border: `1px solid ${color}`}}>
            <MyInput input={input} setInput={setInput} result={result} setResult={setResult} />
            <div className="calc__result">{result}</div>
        </div>
    );
};

export default Display;