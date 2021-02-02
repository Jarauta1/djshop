import '../CSS/zapatillas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Zapatillas(props) {
  localStorage.setItem("retorno", "zapatillas")
  let [data,setData] = useState([])
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)

  useEffect(function(){ 
    
    fetch("http://localhost:3000/productos/zapatillas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res)=>res.json()).then((res)=>{
    setData(res[0].zapatillas)
    console.log(res[0].zapatillas)
  })
    
  },[])

  function visualizado (titulo,cartel,id,edad) {
    fetch("http://localhost:3000/zapatillas/visualizado",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,producto: "zapatillas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        console.log(edad)
      })

  }

  
  let mostrarProducto = data.map(zapatillas=>{
      return(<div className="card-zapatilla">
                <div className="imgBx">
                    <img src={zapatillas.imagen}/>
                </div>
                <div className="contentBx">
                    <h4>{zapatillas.titulo}</h4>
                    <div className="size">
                        <h3>Disponible:</h3>
                        <span>43</span>
                        <span>44</span>
                        <span>45</span>
                        <span>46</span>
                    </div>
                    <div className="color">
                        <h3>Precio: {zapatillas.precio} €</h3>
                        
                    </div>    
                    <Link to={`/zapatillas/${zapatillas.id}`}><button onClick={()=>{visualizado(zapatillas.titulo,zapatillas.imagen,zapatillas.id,edadUsuario)}}>Acceder</button></Link>
                </div>
            </div>)
  })
 
    return(<>
              
    <div className="fondo-zapatillas">
        {mostrarProducto}
    </div>

            </>);
      
}

export default Zapatillas;