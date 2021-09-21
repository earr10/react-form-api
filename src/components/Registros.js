import React from 'react';
import { useState ,useEffect} from 'react';
import '../App.css';

function Registros() {
    const url = 'http://localhost/4851practicas/4851a/mostrarregistros.php'
    const [reload,setReload]=useState(false)
    const [datos,setDatos]=useState()
    const fetchApi = async()=>{
    const response = await fetch(url)
    console.log(response.status)
    const responseJson = await response.json()
    setDatos(responseJson.message)
  }

 useEffect(()=>{
  fetchApi();
      if (reload===true){
        setReload(false);
        fetchApi();
      }
    },[
      reload
    ])
  
      return (
        <div className="registros">
              {
                !datos ? 'mostrar datos' : 
                datos.map((datos,index)=>(
                    <ul key={Math.random()}>
                      <h3><span className="campo">Nombre:</span> {datos.nombre}</h3>
                      <p>Correo: {datos.p_correo}{datos.correo}</p>
                      <p>Descripción: {datos.descripcion}</p>
                    </ul>
                ))
              }
              <button onClick={event => window.location.href='/Formulario'}>Volver</button>
        </div>
      );
    }
    
export default Registros;