import '../CSS/zapatillasCard.css';
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {Redirect,Link} from "react-router-dom"

function ZapatillasCard(props) {

    let {id} =useParams()
    let [data,setData] = useState({})
    let [usuario,setUsuario] = useState(props.usuario)
    let [edadUsuario,setEdadUsuario] = useState(props.edad)
    let [checkFavoritos,setCheckFavoritos] = useState(false)
    let [checkCesta,setCheckCesta] = useState(false)
    let [url,setUrl] = useState(`zapatillas/${id}`)
    localStorage.setItem("retorno", url)
    useEffect(function(){
   
        fetch("http://localhost:3000/productos/zapatillas/id", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id:id}),
      }).then((res)=>res.json()).then((res)=>{
        setData(res)
        console.log(res)
      })
        
      },[])

      function favorito (titulo,cartel,id,edad,precio) {
        setCheckFavoritos(!checkFavoritos)
              console.log(1)
        if (usuario !== "") {
        fetch("http://localhost:3000/zapatillas/favoritas",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({titulo:titulo,edad:edad,cartel:cartel,id:parseInt(id),producto: "zapatillas"}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
         
          fetch("http://localhost:3000/usuarios/favoritos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "zapatillas"}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
        }
      }
    
  
    
      function cesta (titulo,cartel,id,edad,precio) {
        
        setCheckCesta(!checkCesta)
        if (usuario !== "") {
        fetch("http://localhost:3000/zapatillas/cesta",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad:edad,producto: "zapatillas"}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
            fetch("http://localhost:3000/usuarios/cesta",{
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "zapatillas"}),
            }).then((res)=>res.json()).then((res)=>{
              console.log(res)
            })
      }
    }

    if (usuario == "" && checkFavoritos) {
        localStorage.setItem("retorno", url)
          return <Redirect to="/login"/>
      } else if ( usuario == "" && checkCesta) {
        localStorage.setItem("retorno", url)
          return <Redirect to ="/login"/>
      } else {
    return(<>
    <div class="body-zapatillasCard">
        <div class="container-zapatillasCard">
            <div class="imgBx-zapatillasCard">
                <img className="img-zapatillas" src={data.imagen} alt=""/>
            </div>
            <div class="details-zapatillasCard">
                <div class="content-zapatillasCard">
                    <h2>{data.nombre}<br/><span> Adidas</span>
                    </h2>
                    <p>
                      {data.descripcion}
                    </p>
                    <p class="product-colors-zapatillasCard">Número:
                        <input type="submit" value="43"/>
                        <input type="submit" value="44"/>
                        <input type="submit" value="45"/>
                        <input type="submit" value="46"/>
                        <input type="submit" value="46"/>
                    </p>
                    <h3>{data.precio} €</h3>
                    <button className="boton-zc-ces" onClick={()=>{cesta(data.nombre,data.imagen,id,edadUsuario,data.precio)}}>AÑADIR CESTA</button>
                </div>
            </div>
                    <div className="boton-zap">
                      <label className="label-zap">
                        <input onClick={()=>{favorito(data.nombre,data.imagen,data.id,edadUsuario,data.precio)}} type="checkbox" name=""/>
                        <div class="icon-box-zap">
                          <i class="zap fa fa-heart" aria-hidden="true"></i>
                        </div>
                      </label>
                    </div>
                    
        </div>
    </div>
    </>)
      }
} 

export default ZapatillasCard;