import React from 'react';                      //Esto es lo mismo que const React = require("react") la misma sintaxis que usamos en modulo 2 (esto es ECMAScript6)
import ReactDOM from 'react-dom';               //Genera la variable de la libreria, basicamente lo mismo que la linea de arriba
import './index.css';                           //importa los estilos 
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(                
  <React.StrictMode>
    <App />                                       {/* esta es la funcion app del app.js */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
