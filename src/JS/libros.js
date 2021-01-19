import "../CSS/libros.css"
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

function Libros (){

    
    let [numPag,setNumPag] = useState(1)
    let [totalPag,setTotalPag] = useState(0)
    let [data,setData] = useState([])
    let [categoria, setCategoria] = useState("libros_programacion")
  
    useEffect(function(){
      
      fetch(`https://www.etnassoft.com/api/v1/get/?category=${categoria}&criteria=most_viewed`).then(respuesta=>respuesta.json()).then(datos=>{
       setData(datos)
       console.log(datos)
      
      })
    },[categoria])
  
    function eleccion(e) {
      setCategoria(e.target.value)
      console.log(categoria)
    }


    let mostrarLibros = data.map(libro=>{
      return(<>
      <div className="book">
        
<div id="obsu">
  <div id="sekil">
    <img src={`${libro.cover}`} alt="" />
  </div>
  <div id="kitabadi">
    <h1>{libro.title}</h1>
  </div>
  <div id="kimindi">
    <p>by {libro.author}</p>
  </div>  
  <div id="reytinq">
   {libro.publisher_date}
  </div>
  <div id="haqqinda">
    <h3>{libro.content_short}</h3>
  </div>
  <div id="qiymet">
    <h2>{libro.pages} págs.</h2>
  </div>
</div>
      </div>
      </>)
    })
  
      return(<>
      <button onClick={eleccion} value="ajedrez">Ajedrez</button>
      <button onClick={eleccion} value="arte-bellas-artes">Bellas Artes</button>
      <button onClick={eleccion} value="libros_aspecotos_legales">Aspectos Legales</button>
      <button onClick={eleccion} value="bases_de_datos">Bases de datos	</button>
      <button onClick={eleccion} value="ciencia">Ciencia</button>
      <button onClick={eleccion} value="cine">Cine</button>
      <button onClick={eleccion} value="comics">Cómics</button>
      <button onClick={eleccion} value="control_de_versiones">Control de Versiones</button>
      <button onClick={eleccion} value="desarrollo_web">Desarrollo Web</button>
      <button onClick={eleccion} value="diseno_3d">Diseño / 3D</button>
      <button onClick={eleccion} value="educacion-biblioteca">Educación</button>
      <button onClick={eleccion} value="electronica-biblioteca">Electrónica</button>
      <button onClick={eleccion} value="ensayos_y_novelas">Ensayos / Novelas</button>
      <button onClick={eleccion} value="filosofia-biblioteca">Filosofía</button>
      <button onClick={eleccion} value="geografia-turismo">Geografía / Turismo</button>
      <button onClick={eleccion} value="historia-biblioteca">Historia</button>
      <button onClick={eleccion} value="idiomas">Idiomas</button>
    
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                <div className="row">
                  {mostrarLibros}
                </div>
              </div>
          </div>
        </div>
     
      </>)
}

export default Libros;