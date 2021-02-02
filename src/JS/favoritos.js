import '../CSS/favoritos.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Favoritos(props) {

  let [data,setData] = useState([])
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)
  let [checkFavoritos,setCheckFavoritos] = useState(false)
  let [checkCesta,setCheckCesta] = useState(false)

  localStorage.setItem("retorno", "favoritos")

  useEffect(function(){
    
    fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({usuario:usuario}),
  }).then((res)=>res.json()).then((res)=>{
    setData(res.datos[0].favoritos)
    console.log(res.datos[0].favoritos)
  })
    
  },[])

  function cesta (titulo,cartel,id,edad,precio) {
    
    setCheckCesta(!checkCesta)
    if (usuario !== "") {
    fetch("http://localhost:3000/peliculas/cesta",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad:edad,producto: "peliculas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
        fetch("http://localhost:3000/usuarios/cesta",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "peliculas"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
        })
  }
}

  let mostrarFavoritos = data.map(favoritos=>{
      return(<>
       <div class="product-card">
                <div class="image-card">
                    <img src={favoritos.cartel} width="300" alt=""/>
                </div>
                <div class="product-content">
                    <header class="product-title">{favoritos.titulo}</header>
                        <div class="product-rating">
                            <div ></div>
                            <div ></div>
                            <div ></div>
                            <div></div>
                        </div>
                        <section class='product-info'>
                            <span class='desc'>{favoritos.producto}</span> 
                            <div className="boton-favcesta">
                                <label className="label-favcesta">
                                    <input onClick={()=>{cesta(favoritos.titulo,favoritos.cartel,favoritos.id,edadUsuario,favoritos.precio)}} type="checkbox" name=""/>
                                    <div class="icon-box-favcesta">
                                        <i class="favcesta fa fa-shopping-cart" aria-hidden="true"></i>
                                    </div>
                                </label>
                                <label className="label-favcesta">
                                    <input type="checkbox" name=""/>
                                    <div class="icon-box-favcesta">
                                        <i class="favcesta fa fa-trash" aria-hidden="true"></i>
                                    </div>
                                </label>
                            </div>
                        </section>
                        <section class='product-info'>
                           
                            <section class='product-price-details'>
                                <div> </div>
                                <span class='price'>{favoritos.precio} €</span>
                                <span></span>
                            </section>
                        </section>
                    <div class='seperator'></div>
      
                </div>
            </div>
      </>)
  })

 
      return(<>
        <div class="body-favoritos">
           
            {mostrarFavoritos}
  
        </div>

            </>);
      
}

export default Favoritos;