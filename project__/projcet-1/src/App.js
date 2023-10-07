import React, { useState } from 'react';
import './App.css';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF'];
  const [backgroundColor, setBackgroundColor] = useState('FFFFFF');

  const changeBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setBackgroundColor(randomColor);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor }}
      onClick={changeBackgroundColor}
    >
      <h1>Background Color : {backgroundColor}</h1>
      <button>click!</button>
    </div>
  );
}

export default App;

