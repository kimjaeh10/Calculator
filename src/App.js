import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [result, setResult] = useState('');
  const [equation, setEquation] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  // ES6: Hashset in JavaScript
  const operators = new Set(['+', '-', '*', '/']);

  const updateEquation = (value) => {
    // The first input must not be one of the operators AND the consecutive operators are not allowed
    if (operators.has(value) && equation === '' || operators.has(value) && operators.has(equation.slice(-1))) {
      return;
    }

    if (isCalculated){
      setEquation(result + value);
      setIsCalculated(false);
    }
    else {
      setEquation(equation + value);
    }
  }

  const deleteEquation = () => {
    setEquation(equation.substring(0, equation.length - 1));
  }

  const clear = () => {
    setIsCalculated(false);
    setEquation('');
    setResult('');
  }

  const calculate = () => {
    try {
      let calculation = eval(equation).toString()

      setIsCalculated(true);
      setResult(calculation);
      setEquation(calculation);
    }
    catch {
      return
    }
  }

  let displayHTML;
  if (isCalculated) {
    displayHTML = <div className="result" id="display" onChange={(e) => updateEquation(e.target.value)}>{result}</div>
  }
  else {
    displayHTML = <div className="equation" id="display" onChange={(e) => setEquation(e.target.value)}>{equation}</div>
  }

  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        {displayHTML}
        <div className="calculator-buttons">
          <button className="btn reset-btn" onClick={() => clear()}>C</button>
          <button className="btn back-btn" onClick={() => deleteEquation()}>&larr;</button>
          <button className="btn" onClick={() => updateEquation('7')}>7</button>
          <button className="btn" onClick={() => updateEquation('8')}>8</button>
          <button className="btn" onClick={() => updateEquation('9')}>9</button>
          <button className="btn op-btn" onClick={() => updateEquation('/')}>&divide;</button>
          <button className="btn" onClick={() => updateEquation('4')}>4</button>
          <button className="btn" onClick={() => updateEquation('5')}>5</button>
          <button className="btn" onClick={() => updateEquation('6')}>6</button>
          <button className="btn op-btn" onClick={() => updateEquation('*')}>x</button>
          <button className="btn" onClick={() => updateEquation('1')}>1</button>
          <button className="btn" onClick={() => updateEquation('2')}>2</button>
          <button className="btn" onClick={() => updateEquation('3')}>3</button>
          <button className="btn op-btn" onClick={() => updateEquation('-')}>-</button>
          <button className="btn" onClick={() => updateEquation('0')}>0</button>
          <button className="btn equal-btn op-btn" onClick={() => calculate()}>=</button>
          <button className="btn op-btn" onClick={() => updateEquation('+')}>+</button>
        </div>
      </div>
    </div>
  );
}
