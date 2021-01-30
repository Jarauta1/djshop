import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {Link,Redirect} from "react-router-dom"
import '../CSS/comicCard.css';

function ComicCard(props) {

  let {id} =useParams()
  let [data, setData] = useState([])
  let [precio,setPrecio] = useState([])
  let [imagen,setImagen] = useState([])
  let [checkFavoritos,setCheckFavoritos] = useState(false)
  let [checkCesta,setCheckCesta] = useState(false)
  let [url,setUrl] = useState(`comics/${id}`)
  let [usuario,setUsuario] = useState(props.usuario)
  let contador = 0
  
  useEffect(function(){

    fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=70945025a9ff9a1f3d2c54de4c8c3599&hash=a92c5e400dfca9dbc06a81b098cf6210`).then(respuesta=>respuesta.json()).then(datos=>{

       setData(datos.data.results[0])
       setImagen(datos.data.results[0].images)
       setPrecio(datos.data.results[0].prices[0])
          console.log(datos)
    })
    },[id])

    /* ----------- */
    /* BOTON CESTA */
    /* ----------- */
    const cartButtons = document.querySelectorAll('.cart-button-comic');

    cartButtons.forEach(button => {
	    button.addEventListener('click', cartClick);
    });

    function cartClick() {
	    let button = this;
	    button.classList.add('clicked');
    }
    /* --------------- */
    /* FIN BOTON CESTA */
    /* --------------- */

    function favorito (titulo,id) {
        setCheckFavoritos(!checkFavoritos)
        console.log(usuario)
      
        fetch("http://localhost:3000/comics/favoritos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({titulo:titulo,id:parseInt(id)}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
         
          if (usuario !== "") {
          fetch("http://localhost:3000/usuarios/favoritos",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario,titulo:titulo,id:parseInt(id)}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
        }
      }

      function cesta (titulo,id,descargas) {
        setCheckCesta(!checkCesta)
        fetch("http://localhost:3000/comics/cesta",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({titulo:titulo,id:parseInt(id),descargas:parseInt(descargas)}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })
      }

    let mostrarImagen = imagen.map(mostrar=>{
        if (contador <=0) {
            contador = contador + 1
            return(<><div className="left-image" style={{backgroundImage:`url("${mostrar.path}.${mostrar.extension}")`}} alt="" height="400"><Link to="/comics"><button className="close-button">regresar</button></Link></div></>)
        }
    })

   /*  let mostrarPrecio = precio.map(price=>{return({price.price})}) */


    if (usuario == "nada" && checkFavoritos) {
        localStorage.setItem("retorno", url)
          return <Redirect to="/login"/>
      } else if ( usuario == "nada" && checkCesta) {
        localStorage.setItem("retorno", url)
          return <Redirect to ="/login"/>
      } else {
  return(<div className="comicCard">
            <div className="card-container">
                {mostrarImagen}
                <div className="container-right">
                    <div className="top-section">
                        <div className="title-content">
                            <h2>{data.title}</h2>
                            <p className="detalles-comic">
                                <span className="rating">{precio.price} €</span>
                                | <span className="studio">Marvel Studios</span>|
                                <span>Favorito 
                                    {/*  <div className="Category-comic"> */}
                                    <label className="like-comic">
                                        <input onClick={()=>{favorito(data.title,id)}} type="checkbox"/>
                                        <span className="material-icons heart">favorite</span>
                                        {/* https://google.github.io/material-design-icons/ */}
                                        {/* https://material.io/resources/icons/?style=baseline */}
                                        <div className="ripple"></div>
                                    </label>
                                    {/* </div> */}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="boton-cesta-comic full">
                    <button onClick={()=>{cesta(data.title,id)}} class="cart-button-comic">
	                    <span class="add-to-cart">Añadir a la cesta</span>
	                    <span class="added">Añadido</span>
	                    <i class="fas fa-shopping-cart"></i>
	                    <i class="fas fa-box"></i>
                    </button>
                </div>
            </div>
        </div>)
      }
}

export default ComicCard;