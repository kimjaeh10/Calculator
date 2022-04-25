import React, { useState } from "react";
import './App.css';

export default function App() {
  const [result, setResult] = useState('12')

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" className="result" value={result} />
        <div className="calculator-buttons">
          <button className="btn reset-btn">C</button>
          <button className="btn back-btn">&larr;</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn op-btn">&divide;</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn op-btn">x</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn op-btn">-</button>
          <button className="btn">0</button>
          <button className="btn equal-btn op-btn">=</button>
          <button className="btn op-btn">+</button>
        </div>
      </div>
    </div>
  );
}
