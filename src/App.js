//importaciones 

import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';


//funcion (componente) (componente creado a partir del div de la linea 14)
function App() {              //esta invocacion viene del index.js linea 9
//antes del return podemos agregar sentencias, instrucciones, logica, etc

const name= "Gerardo-san"
const name2 = "del ejercicio"
  
  return (                    //los parentesis en el return significan que se aplica un formato llamado JSX, basicamente es lo mismo que handlebars del modulo dos pero aqui es combinar javascript con HTML
    <div className="App">
      <Header nombre= {name}/>              {/* el header, al venir de una funcion le podemos pasar argumentos como se hace en el ejemplo */}
      <Footer nombre2= {name2}/>
    </div>
    

  );
}

//exportacion
//module.exports = app (es lo mismo que en modulo dos peeeero..... con ECMAscript)
export default App;
