import React from 'react';
import { btnClick } from '../../../utils/script';
import cl from './MyInput.module.scss';

const MyInput = ({ input, setInput, result, setResult }) => {

    return (
        <form>
            <input
                className={cl.calc__expression}
                onKeyDown={(e) => {
                    e.preventDefault();
                    return btnClick(e.key, input, setInput, result, setResult);
                }}
                value={input}
                readOnly
            />
        </form>
    );
};

export default MyInput;