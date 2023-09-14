import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className = "box">
      <App
        name = "jaehyeong"
        job = "frontend" 
        img = "https://cdn.pixabay.com/photo/2023/08/06/15/29/heaven-8173189_1280.jpg"
        cardColor = "pink"
      />
      <App
        name = "Joohyun"
        job = "frontend Mentor" 
        img = "https://cdn.pixabay.com/photo/2023/06/14/02/21/stairs-8062145_1280.jpg"
        cardColor = "yellow"
      />
      <App
        name = "Dahee"
        job = "Leader" 
        img = "https://cdn.pixabay.com/photo/2023/09/09/08/57/mountain-8242717_1280.jpg"
        cardColor = "green"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
