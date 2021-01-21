import "../CSS/libros.css"
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

function Libros (){

    
    let [numPag,setNumPag] = useState(1)
    let [totalPag,setTotalPag] = useState(0)
    let [data,setData] = useState([])
    let [categoria, setCategoria] = useState("libros_programacion")
    let [isLoading, setIsLoading] = useState (false)
  
    useEffect(function(){

      setIsLoading(true)
      
      fetch(`https://www.etnassoft.com/api/v1/get/?category=${categoria}&criteria=most_viewed`).then(respuesta=>respuesta.json()).then(datos=>{
       setData(datos)
       console.log(datos)
       setTimeout(retardo(),5000)
     /*  setIsLoading(false) */
      })
    },[categoria])
    
    function retardo() {
      setIsLoading(false)
    }
   
    function eleccion(e) {
      setCategoria(e.target.value)
      console.log(categoria)
    }

    /* POP-UP */

    

    /* FINPOP-UP */

    let mostrarLibros = data.map(libro=>{
      return(<>
        <div className="col-3 librosCard">
					<div className="row">
						<div className="col-12">
							<div className="book-card">
    						<div className="book-card__cover">
     							<div className="book-card__book">
        						<div className="book-card__book-front">
          						<img className="book-card__img" src={`${libro.cover}`} alt=""/>
        						</div> 
        						<div className="book-card__book-back"></div>
        						<div className="book-card__book-side"></div>
      						</div>  
    						</div>    
  						
    				    <div>
      			      <div className="book-card__title">
        			      {libro.title}
        		      </div>
      			      <div class="book-card__author">
        			      | by {libro.author}
        		      </div>
                    {/* <div className="options"><div className="price">9.95€</div><button className="price">Comprar</button></div> */}
                    

                    <div className="container">
                   
                    </div>
      

    			      </div> 
              </div>
				    </div>
			    </div>
			  </div>
        
     {/*  <div className="col-3">
        
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
      </div> */}
      </>)
    })
  
    if (isLoading) {
      return(<>

      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="col-12">
              <span onClick={eleccion} value="ajedrez">Ajedrez</span>
              <span onClick={eleccion} value="arte-bellas-artes">Bellas Artes</span>
              <span onClick={eleccion} value="libros_aspecotos_legales">Aspectos Legales</span>
              <span onClick={eleccion} value="bases_de_datos">Bases de datos	</span>
              <span onClick={eleccion} value="ciencia">Ciencia</span>
              <span onClick={eleccion} value="cine">Cine</span>
              <span onClick={eleccion} value="comics">Cómics</span>
              <span onClick={eleccion} value="control_de_versiones">Control de Versiones</span>
              <span onClick={eleccion} value="desarrollo_web">Desarrollo Web</span>
              <span onClick={eleccion} value="diseno_3d">Diseño / 3D</span>
              <span onClick={eleccion} value="educacion-biblioteca">Educación</span>
              <span onClick={eleccion} value="electronica-biblioteca">Electrónica</span>
              <span onClick={eleccion} value="ensayos_y_novelas">Ensayos / Novelas</span>
              <span onClick={eleccion} value="filosofia-biblioteca">Filosofía</span>
              <span onClick={eleccion} value="geografia-turismo">Geografía / Turismo</span>
              <span onClick={eleccion} value="historia-biblioteca">Historia</span>
              <span onClick={eleccion} value="idiomas">Idiomas</span>
            </div>
          </div>
          <div class="col-10">
            <div className="spinner-book">
              <div class="stack">
	              <div class="book"></div>
	              <div class="book"></div>  
	              <div class="book"></div>
          	    <div class="book"></div>  
	              <div class="book"></div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      
    

</>)
    } else {
      return(<>
      <div className="container libros">
        <div className="row">
          <div className="col-3">
            <div className="col-12 sidebar">
              
                <div className="sidebar-menu main">
                  <h3 className="sidebar-title">Categorias</h3>
                  <ul className="sidebar-items">
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="ajedrez" className="sidebar-link-concept">Ajedrez</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="arte-bellas-artes" className="sidebar-link-concept">Bellas Artes</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="libros_aspecotos_legales" className="sidebar-link-concept">Aspectos Legales</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="bases_de_datos" className="sidebar-link-concept">Bases de datos</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="ciencia" className="sidebar-link-concept">Ciencia</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="cine" className="sidebar-link-concept">Cine</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="comics" className="sidebar-link-concept">Cómics</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="control_de_versiones" className="sidebar-link-concept">Control de Versiones</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="desarrollo_web" className="sidebar-link-concept">Desarrollo Web</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="diseno_3d" className="sidebar-link-concept">Diseño/3D</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="educacion-biblioteca" className="sidebar-link-concept">Educación</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="electronica-biblioteca" className="sidebar-link-concept">Electrónica</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="ensayos_y_novelas" className="sidebar-link-concept">Ensayos/Novelas</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="filosofia-biblioteca" className="sidebar-link-concept">Filosofía</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="geografia-turismo" className="sidebar-link-concept">Geografía/Turismo</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="historia-biblioteca" className="sidebar-link-concept">Historia</button>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <button onClick={eleccion} value="idiomas" className="sidebar-link-concept">Idiomas</button>
                      </a>
                    </li>
                  </ul>
                </div>   
              
            </div>
          </div>
          <div class="col-9">
          <div className="col-12">
                <div className="row">
                  {mostrarLibros}
                </div>
              </div>
          </div>
        </div>
      </div>
    
      
     
      </>)
}
}

export default Libros;