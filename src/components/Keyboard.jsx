import React from 'react';
import "../styles/Calc.scss";
import { btnClick, signsArray } from '../utils/script';
import MyButton from './UI/MyButton/MyButton';

const Keyboard = ({ input, setInput, result, setResult }) => {

    return (
        <div className="calc__keyboard">
            {signsArray.map((sign) =>
                <MyButton
                    key={sign}
                    onClick={() => btnClick(sign, input, setInput, result, setResult)}>{sign}
                </MyButton>
            )}
        </div>
    );
};

export default Keyboard;