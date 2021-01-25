import '../CSS/buscador.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Buscador() {

  
  let [data,setData] = useState([])
  let [escrito,setEscrito] = useState("")
  let [busqueda,setBusqueda] = useState("adidas")

  useEffect(function(){
    
    fetch(`https://api.rainforestapi.com/request?api_key=E04BC7E714DB4168B3DE80E019004E39&type=search&amazon_domain=amazon.es&search_term=${busqueda}`).then(respuesta=>respuesta.json()).then(datos=>{
     setData(datos.search_results)
     console.log(datos)
    })
  },[busqueda])


  function buscador(e) {
    setBusqueda(escrito)
  }

  function guardarBusqueda(e) {
    setEscrito(e.target.value)
  }

  let mostrarProductos = data.map(resultados=>{
    return(<>
    <a href="#" class="ProductCard ProductCard--grid">
      <div class="ProductCard__img-wrapper">
        <img src={resultados.image} height="300" alt="" class="ProductCard__img"/>
      </div>

      <div class="ProductCard__details">

        <div class="ProductCard__details__header">
          <div class="ProductCard__titles">
            <h4 class="ProductCard__title">{resultados.title}</h4>
            <h5 class="ProductCard__price">$72.99</h5>
          </div>

          <button class="IconBtn">
            <svg class="Icon Icon--medium Icon--colored">
              <use ></use>
            </svg>
          </button>
        </div>

        <p class="ProductCard__description">
          The Low 2 in Alloy grey is constructed with a premium nubuck leather upper and a leather coated Sanipur insole.
        </p>
      </div>
    </a>
    </>)
  })
 
    return(<>
            <input onChange={guardarBusqueda} className="input-buscador"/>
            <button onClick={buscador}>Pulsar</button>
              
            <div class="ProductSet ProductSet--grid">
              {mostrarProductos}
              </div>
             
             


 
            </>);
       
}

export default Buscador;