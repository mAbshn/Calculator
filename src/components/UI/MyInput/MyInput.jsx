import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../../../context';
import { btnClick } from '../../../utils/script';
import cl from './MyInput.module.scss';

const MyInput = () => {

    const {input, setInput, result, setResult} = useContext(Context);

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