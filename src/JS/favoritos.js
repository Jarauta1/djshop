import '../CSS/favoritos.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Favoritos(props) {

  let [data,setData] = useState([])
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)

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

  let mostrarFavoritos = data.map(favoritos=>{
      return(<>
       <div class="product-card">
                <div class="image-card">
                    <img src={favoritos.cartel} width="300" alt=""/>
                </div>
                <div class="product-content">
                    <header class="product-title">{favoritos.titulo}</header>
                        <div class="product-rating">
                            <div class='star'></div>
                            <div class='star'></div>
                            <div class='star'></div>
                            <div class='star'></div>
                        </div>
                        <section class='product-info'>
                            <span class='desc'>{favoritos.producto}</span> 
                            <button>Añadir cesta</button>
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