import { useState } from "react";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Theme from "./components/Theme";
import { ColorContext } from "./context";
import "./styles/Calc.scss";

function Calc() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('')
  const [color, setColor] = useState('#4086f4')

  return (
    <ColorContext.Provider value={{color, setColor}}>
      <div className="calc">
        <Display
          input={input}
          setInput={setInput}
          result={result}
          setResult={setResult}
        />
        <Keyboard
          input={input}
          setInput={setInput}
          setResult={setResult}
          result={result}
        />
        <Theme />
      </div>
    </ColorContext.Provider>
  );
}

export default Calc;
