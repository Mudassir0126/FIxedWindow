import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the height and width of the grey box
  const [boxHeight, setBoxHeight] = useState(100);
  const [boxWidth, setBoxWidth] = useState(100);

 
  

  // Inner square height and width (20px smaller than the outer box)
  const innerSquareHeight = boxHeight - 20;
  const innerSquareWidth = boxWidth - 20;

  // Function to handle change in input field to update box height
  const handleHeightChange = (e) => {
    setBoxHeight(Number(e.target.value));  // Convert to number
  };

  // Function to handle change in input field to update box width
  const handleWidthChange = (e) => {
    setBoxWidth(Number(e.target.value));  // Convert to number
  };

  // Function to generate styles for the outer square
  const generateSquareStyle = () => ({
    height: `${boxHeight}px`,
    width: `${boxWidth}px`,
    backgroundColor: 'rgb(192, 192, 192)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
  });

  // Function to generate styles for the diagonals
  const generateDiagonalStyle = (angle, position1,position2) => ({
    position: 'absolute',
    width: '1px', // Thickness of the diagonal
    height: `20px`, // Length of the diagonal
    backgroundColor: 'black',
    [position2]: 0,
    [position1]: 0,
    transform: `rotate(${angle}deg)`,
    transformOrigin: `${position1} ${position2}`,
  });

  // Function to generate styles for the inner square
  const generateInnerSquareStyle = () => ({
    height: `${innerSquareHeight}px`,
    width: `${innerSquareWidth}px`,
    backgroundColor: 'rgb(173, 221, 247)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid black',
  });

  return (
    <div className="App">
      <div className="input-container">
        <label htmlFor="WidthInput">Width:</label>
        <input
          type="number"
          id="WidthInput"
          value={boxWidth}
          onChange={handleWidthChange}
          min="50"
          max="500"
        />
        <label htmlFor="heightInput">Height:</label>
        <input
          type="number"
          id="heightInput"
          value={boxHeight}
          onChange={handleHeightChange}
          min="50"
          max="500"
        />
      </div>
      <hr/>
      <div className="square-container">
        {/* Outer square */}
        <div style={generateSquareStyle()}>
          {/* Diagonals */}
          <div style={generateDiagonalStyle(-42, 'left','top')}></div>
          <div style={generateDiagonalStyle(46, 'right','top')}></div>
          <div style={generateDiagonalStyle(44, 'left','bottom')}></div>
          <div style={generateDiagonalStyle(-46, 'right','bottom')}></div>

          {/* Inner square */}
          <div style={generateInnerSquareStyle()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
