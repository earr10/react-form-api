import React from 'react';
import { useState ,useEffect} from 'react';
import '../App.css';
import Axios from 'axios';

function Formulario() {
    const url = 'http://localhost/4851practicas/4851a/formulario.php'

    const[data, setData] = useState({
      nombre: "",
      p_correo: "",
      id_correo: "",
      descripcion: ""
    })

    const[ setResposedata]= useState(
      ''  
    )

    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        nombre:data.nombre,
        p_correo:data.p_correo,
        id_correo:data.id_correo,
        descripcion:data.descripcion
     })
     .then(res=>{
       console.log(res.data)
       setResposedata("Datos guardados correctamente")
   })
   }

   function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

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
      <div className="Form">
        <div className="box-form">
          <h3>Formulario</h3>
          <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} value={data.nombre} name="nombre" id="nombre" type="text" placeholder="Nombre">
            </input>
            <input onChange={(e)=>handle(e)} value={data.p_correo} name="p_correo" id="p_correo" type="text" placeholder="Correo" className="correo">
            </input>
            <select name="id_correo" onChange={(e)=>handle(e)} value={data.id_correo} id="id_correo">
              <option>Elige un dominio</option>
            {
            !datos ? 'mostrar datos' :
            datos.map(datos=>(
                <option key={datos.id_correo} value={datos.id_correo}>{datos.correo}</option>
              )
              )
            }
            </select>
            <textarea onChange={(e)=>handle(e)} value={data.descripcion} name="descripcion" id="descripcion" type="text" placeholder="Descripción"></textarea>
            <button onClick={event => window.location.href='/Registros'}>Enviar</button>
          </form>
          <button onClick={event => window.location.href='/Registros'}>Ver registros</button>
        </div>
      </div>
      );
    }
    
export default Formulario;