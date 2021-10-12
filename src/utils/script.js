import { evaluate } from "mathjs";

export const signsArray = ['(', ')', '%', 'AC', '7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'];

export const regexpInput = (str => {
    return str.replace(/[^+-/*÷×)(.\d]/ig, '').replace(/[*]/ig, '×').replace(/[/]/ig, '÷');
});

export const regexpResult = (result) => result.replace(/[×]/ig, '*').replace(/[÷]/ig, '/');

export const comparisonOfBrackets = (input) => {
    let isNeedAddBrackets;
    let leftMinusRight;
    if (input.match(/[(]/ig) !== null) {
        let left, right;
        if (input.match(/[)]/ig) === null) right = 0;
        else right = input.match(/[)]/ig).length;
        left = input.match(/[(]/ig).length;
        leftMinusRight = left - right;
        isNeedAddBrackets = leftMinusRight > 0;
    }
    return [leftMinusRight, isNeedAddBrackets];
}

export function btnClick(sign, input, setInput, result, setResult) {
    if (sign === '×' || sign === '*' || sign === '÷' || sign === '/' || sign === '+') {
        if (result) {
            setInput(result + regexpInput(sign));
            setResult('');
        }
        else if (input) {
            if (input.match(/\($/ig)) setInput(input);
            else setInput(input.replace(/[×÷+-.]$/ig, '') + regexpInput(sign));
        }
    }
    else if (sign === '-') {
        if (result) {
            setInput(result + sign);
            setResult('');
        }
        else {
            setInput(input.replace(/[×÷+-.]$/ig, '') + sign);
        }
    }
    else if (sign === 'AC') {
        setInput('');
        setResult('');
    }
    else if (sign === '=' || sign === 'Enter') {
        let fixedInput = input + '';
        const deleteLastSigns = (str) => {
            if (str.match(/[(×÷+-.]$/ig)) {
                fixedInput = str.slice(0, -1);
                return (deleteLastSigns(fixedInput))
            }
        }
        deleteLastSigns(fixedInput);
        let [leftMinusRight, isNeedAddBrackets] = comparisonOfBrackets(fixedInput);
        if (isNeedAddBrackets) {
            for (let i = 0; i < leftMinusRight; i++) {
                fixedInput = fixedInput + ')';
            }
        }
        if (input) setInput(fixedInput.replace(/=/ig, '') + '=');
        setResult(evaluate(regexpResult(fixedInput).replace(/[*/+-.]$/ig, '').replace(/=/ig, '')));
    }
    else if (sign === '(') {
        if (result) {
            setInput(sign);
            setResult('');
        }
        else if (input.match(/[(×÷+-]$/ig) || !input) {
            setInput(input + sign);
        }
    }
    else if (sign === ')') {
        let [leftMinusRight, isNeedAddBrackets] = comparisonOfBrackets(input);
        if ((input.match(/[(]/ig) !== null) && (leftMinusRight > 0) && ((/[)\d]$/ig).test(input))) {
            setInput(input + sign);
        }
    }
    else if (sign === '.') {
        if (result) {
            let temp = result + '';
            setInput(temp.replace(/(.*?)(\.)(\d+)$/ig, '$1$3') + sign);
            setResult('');
        }
        else if (input) {
            if (input.match(/\($/ig)) setInput(input);
            else setInput(input.replace(/[×÷+-.]$/ig, '').replace(/(.*?)(\.)(\d+)$/ig, '$1$3') + sign);
        }
    }
    else if (sign === '%') {
        if (input && input.match(/[)%\d]$/ig)) {
            setInput(input + sign);
        }
        if (result) {
            setInput(result + sign);
            setResult('');
        }
    }
    else if (sign === 'Backspace') {
        setInput(input.slice(0, -1));
    }
    else if (sign.match(/([0-9])/ig)){
        if (result) {
            setInput(result + sign);
            setResult('');
        }
        else if (sign === '0') {
            if (input.match(/([^0-9.]+)0$/ig) || input === '0') {
                setInput(input);
            }
            else setInput(input + sign);
        }
        else setInput(input + sign);
    }
}

