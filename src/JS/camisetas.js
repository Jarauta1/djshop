import '../CSS/camisetas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import logo_bb from "../Imagenes/logo_bb.png"

function Camisetas(props) {

  let [data,setData] = useState([])
  let [checkFavoritos,setCheckFavoritos] = useState(false)
  let [checkCesta,setCheckCesta] = useState(false)
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)

  localStorage.setItem("retorno", "camisetas")

  useEffect(function(){
    
    fetch("http://localhost:3000/productos/camisetas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res)=>res.json()).then((res)=>{
    setData(res[0].camisetas)
    console.log(res[0].camisetas)
  })
    
  },[])


  function favorito (titulo,cartel,id,edad,precio) {
    setCheckFavoritos(!checkFavoritos)
    console.log(usuario)
  
    if (usuario !== "") {
    fetch("http://localhost:3000/camisetas/favoritas",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,edad:edad,cartel:cartel,id:parseInt(id),producto: "camisetas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
     
      fetch("http://localhost:3000/usuarios/favoritos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "camisetas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })

      fetch("http://localhost:3000/camisetas/visualizado",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,producto: "camisetas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        console.log(edad)
      })
    }
  }


  function cesta (titulo,cartel,id,edad,precio) {
    
    setCheckCesta(!checkCesta)
    if (usuario !== "") {
    fetch("http://localhost:3000/camisetas/cesta",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad:edad,producto: "camisetas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
        fetch("http://localhost:3000/usuarios/cesta",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "camisetas"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
        })

        fetch("http://localhost:3000/camisetas/visualizado",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,producto: "camisetas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        console.log(edad)
      })
  }
}

  let mostrarCamisetas= data.map(camiseta=>{
    return(<>
    <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src={camiseta.imagen} alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>{camiseta.titulo}</span>
            </div>
            <div class="title-product">
              <h3>{camiseta.categoria}</h3>
            </div>
           
            <div class="card-footer">
              <div class="wcf-left"><span class="price">{camiseta.precio} €</span></div>
              <div class="wcf-right">
                <a onClick={()=>{favorito(camiseta.titulo,camiseta.imagen,camiseta.id,edadUsuario,camiseta.precio)}} class="buy-btn material-icons">favorite</a>
                <a onClick={()=>{cesta(camiseta.titulo,camiseta.imagen,camiseta.id,edadUsuario,camiseta.precio)}} class="buy-btn material-icons">shopping_cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
  })

 
      return(<body className="body-camisetas" /* style={{backgroundImage:`url("${logo_bb}")`}} */>




<div class="shell">
  <div class="container">
    <div class="row">
     
     
      {mostrarCamisetas}
      
    </div>
   
  </div>
</div>


            </body>);
      
}

export default Camisetas;