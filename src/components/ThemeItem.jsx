import React from 'react';
import "../styles/Calc.scss";

const ThemeItem = ({ color, changeTheme, refer }) => {
    return (
        <div
            style={{ background: `${color}` }}
            className="calc__theme-item"
            onClick={changeTheme}
            ref={refer}
        >

        </div>
    );
};

export default ThemeItem;