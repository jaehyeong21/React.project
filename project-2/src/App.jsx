import React, {useState} from 'react';
import './App.css';

function Add({button__name}){
  const [number, setNumber] = useState(1);

  const Add__number = () =>{
  setNumber(number+1);
  };

  return(
    <div className = "App"> 
      <div className = "App__number">{number}
      </div>
      <div className = "App__button">
        <button className = "App__button__text" onClick = {Add__number}>{button__name}
        </button>
      </div>
    </div>
  );
}

function DOUBLE({button__name}){
  const [number, setNumber] = useState(1);

  const DOUBLE__number = () =>{
  setNumber(number*2);
  };

  return(
    <div className = "App">
      <div className = "App__number">{number}
      </div>
      <div className = "App__button">
        <button className = "App__button__text" onClick ={DOUBLE__number}>{button__name}
        </button>
      </div>
    </div>
  );
}

function MINUS({button__name}){
  const [number, setNumber] = useState(1);

  const MINUS__number = () =>{
  setNumber(number-1);
  };

  return(
    <div className = "App">
      <div className = "App__number">{number}
      </div>
      <div className = "App__button">
        <button className = "App__button__text" onClick = {MINUS__number}>{button__name}
        </button>
      </div>
    </div>
  );
}

function App(){
  return (
    <div className="App__box">
      <Add
        button__name = "ADD"
      />
      <MINUS
        button__name = "MINUS"
      />
      <DOUBLE
        button__name = "DOUBLE"
      />
    </div>
  )
}

export default App;