import { useState } from "react";
import CalcBody from "./components/CalcBody";
import Theme from "./components/Theme";
import { Context } from "./context";
import "./styles/Calc.scss";

function Calc() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('')
  const [color, setColor] = useState('#4086f4')

  return (
    <Context.Provider value={{ color, setColor, input, setInput, result, setResult }}>
      <div className="calc">
        <Theme />
        <CalcBody/>
      </div>
    </Context.Provider>
  );
}

export default Calc;
