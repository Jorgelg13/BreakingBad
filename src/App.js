import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase(props){
  return (
    <div className="frase">
      <h1>{props.frase.quote}</h1>
      <p>- {props.frase.author}</p>
    </div>
  )
}

function App(){
  const [frase, obtenerFrase] = useState({});
  const consultarApi = async () =>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //agregar el resultado de la api al state, similar al this.setState
    obtenerFrase(resultado.data[0]);
 }

  //consultando a una rest api
  useEffect(
    () =>{
      consultarApi()
    },[]
  )


  return(
    <div className="contenedor">
      <Frase frase={frase}/>
      <button onClick={consultarApi}>Generar Nueva</button>
    </div>
  )
}

export default App; 