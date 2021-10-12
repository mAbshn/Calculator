import React, { useContext, useRef, useState } from 'react';
import "../styles/Calc.scss";
import ThemeItem from './ThemeItem';
import arrow from '../img/arrow.svg';
import { ColorContext } from '../context';

const Theme = () => {

    const toggle = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
    const {color, setColor} = useContext(ColorContext);

    const blockMoving = () => {
        toggle.current.classList.toggle('_active');
    }

    const changeTheme = (ref) => {
        setColor(ref.current.style.background);
        const refArr = [ref1, ref2, ref3];
        for (let ref of refArr) {
            ref.current.classList.remove('_active');
        }
        ref.current.classList.add('_active');
    }

    return (
        <div
            className="calc__theme"
            onClick={blockMoving}
            ref={toggle}
        >
            <img className="calc__theme-img" src={arrow} alt='arrow' />
            <h2 className="calc__theme-text">Theme</h2>
            <div className="calc__theme-items">
                <ThemeItem color="#4086f4" changeTheme={() => changeTheme(ref1)} refer={ref1} />
                <ThemeItem color="#acff24" changeTheme={() => changeTheme(ref2)} refer={ref2} />
                <ThemeItem color="#ffaf24" changeTheme={() => changeTheme(ref3)} refer={ref3} />
            </div>
        </div>
    );
};

export default Theme;