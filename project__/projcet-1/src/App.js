import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('FFFFFF');
  const [buttonsimple, setButtonsimple] = useState(1);
  const [buttonhex, setButtonhex] = useState(0);
  const random__color = "0123456789ABCDEF";
  const simple__color = ["red","pink","blue", "green"];
  let color = "#"; 

  const randomBackgroundColor = () => {
    for(let i = 0; i < 6; i++){
      const random__index = Math.floor(Math.random() * 16);
      color = color + random__color[random__index];
    }

  return color;
  };

  const button__hex = () => {
    setButtonhex(1);
    setButtonsimple(0);
  }

  const button__simple = () => {
    setButtonsimple(1);
    setButtonhex(0);
  }

  const changeBackgroundColor = () => {
    if(buttonhex){
      let random__color = randomBackgroundColor();
      setBackgroundColor(random__color);
    }
    else if(buttonsimple){
      const random__index = Math.floor(Math.random() * 4);
      let random__color = simple__color[random__index];
      setBackgroundColor(random__color)
    }
  }

  const buttonStyle = {
    backgroundColor : backgroundColor,
  }


  return (
    <div
      className="App"
      style={{ backgroundColor }}
    >
      <div className = "header">
        <div className = "header__title">Color Flipper</div>
        <div className = "header__opt">
          <span 
            className = "header__opt__button"
            onClick = {button__simple}
            style={{ color: buttonsimple ? "skyblue" : "black" }}
            >Simple</span>
          <span
            className = "header__opt__button"
            onClick = {button__hex}
            style={{ color: buttonhex ? "skyblue" : "black" }}
            >Hex</span>
        </div>
      </div>
      <div className = "main">
        <div
          className = "main__title">Background Color : <span className = "main__title__background">{backgroundColor}</span>
        </div>
        <button
          className = "main__button"
          style = {buttonStyle}
          onClick={changeBackgroundColor}>click!
        </button>
      </div>
    </div>
  );
}

export default App;

