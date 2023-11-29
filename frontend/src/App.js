import React, { useState } from 'react';
import './App.css';

function Interpolation(points, x) {
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    let term = points[i].y;

    for (let j = 0; j < points.length; j++) {
      if (j !== i) {
        term = term * (x - points[j].x) / (points[i].x - points[j].x);
      }
    }

    result += term;
  }

  return result;
}

function App() {
  const [points, setPoints] = useState([]);
  const [xValue, setXValue] = useState('');
  const [result, setResult] = useState('');

  const handleXValueChange = (e) => {
    setXValue(e.target.value);
  };

  const handlePointChange = (index, key, value) => {
    const newPoints = [...points];
    newPoints[index][key] = value;
    setPoints(newPoints);
  };

  const addPoint = () => {
    setPoints([...points, { x: '', y: '' }]);
  };

  const removePoint = (index) => {
    const newPoints = [...points];
    newPoints.splice(index, 1);
    setPoints(newPoints);
  };

  const interpolatePolynomial = () => {
    try {
      const parsedPoints = points.map(point => ({ x: parseFloat(point.x), y: parseFloat(point.y) }));
      const x = parseFloat(xValue);
      const interpolationResult = Interpolation(parsedPoints, x);
      setResult(`Interpolated Result: ${interpolationResult}`);
    } catch (error) {
      setResult('Error: Invalid input format');
    }
  };

  return (
    <div className="app-container">
      <h1>Polynomial Interpolation</h1>
      <label>
        Enter x value for interpolation:
        <input type="text" value={xValue} onChange={handleXValueChange} />
      </label>
      <br />
      <div className="points-container">
        <label>Enter points:</label>
        {points.map((point, index) => (
          <div key={index} className="point-input">
            <input
              type="text"
              placeholder="x"
              value={point.x}
              onChange={(e) => handlePointChange(index, 'x', e.target.value)}
            />
            <input
              type="text"
              placeholder="y"
              value={point.y}
              onChange={(e) => handlePointChange(index, 'y', e.target.value)}
            />
            <button onClick={() => removePoint(index)}>Remove Point</button>
          </div>
        ))}
        <button onClick={addPoint}>Add Point</button>
      </div>
      <br />
      <button onClick={interpolatePolynomial}>Interpolate</button>
      <div className='result-container'>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;
