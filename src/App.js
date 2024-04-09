import React, { useState } from 'react';
import './App.css'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const evaluateExpression = () => {
    try {
      const calculatedResult = new Function('"use strict"; return (' + input + ')')();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  

  const handleClick = (value) => {
    if (value === '=') {
      evaluateExpression(input);
    } else if (value === 'C') {
      setInput('');
      setResult('');
    }else if (value === 'X'){
      const newInput = input.slice(0,-1)
      setInput(newInput);
    }else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className='header'><h1>CALCULATOR</h1></div>
      <input type="text" value={input} disabled />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('C')} className='clear'>C</button>
        <button onClick={() => handleClick('X')} className='clear'>X</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
