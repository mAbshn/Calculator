import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../context';
import "../styles/Calc.scss";
import { btnClick, signsArray } from '../utils/script';
import MyButton from './UI/MyButton/MyButton';

const Keyboard = () => {

    const {input, setInput, result, setResult} = useContext(Context);

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