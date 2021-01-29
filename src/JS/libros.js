import "../CSS/libros.css"
import {useState, useEffect} from "react"

function Libros (){
    
    let [data,setData] = useState([])
    let [categoria, setCategoria] = useState("libros_programacion")
    let [isLoading, setIsLoading] = useState (false)
  
    useEffect(function(){

      setIsLoading(true)
      
      fetch(`https://www.etnassoft.com/api/v1/get/?category=${categoria}&criteria=most_viewed`).then(respuesta=>respuesta.json()).then(datos=>{
       setData(datos)
       console.log(datos)
      setIsLoading(false)
      })
    },[categoria])
       
    function eleccion(e) {
      setCategoria(e.target.value)
      console.log(categoria)
    }

    /* POP-UP */

    

    /* FINPOP-UP */

    let mostrarLibros = data.map(libro=>{
      return(<>
              <div className="librosCard">
					      {/* <div className="row">
						      <div className="col-12"> */}
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
      			            <div className="book-card__author">
        			            | by {libro.author}
        		            </div>
                        {/* <div className="options"><div className="price">9.95€</div><button className="price">Comprar</button></div> */}
                        <div className="container"></div>
                      </div> 
                    </div>
				          {/* </div>
			          </div> */}
			        </div>
            </>)
    })
  
    if (isLoading) {
      return(<>
             
                    <div class="centrado">
                      <div class="book">
                        <div class="inner">
                          <div class="left"></div>
                          <div class="middle"></div>
                          <div class="right"></div>
                        </div>
                        <ul>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
               
            </>)
    } else {
        return(<>
               <label className="select-libros">
                <select onChange={eleccion}>
                  <option value="libros_programacion"> Elije una categoria </option>
                  <option value="ajedrez">Ajedrez</option>
                  <option value="arte-bellas-artes">Bellas Artes</option>
                  <option value="libros_aspecotos_legales">Aspectos Legales</option>
                  <option value="bases_de_datos">Bases de datos</option>
                  <option value="ciencia">Ciencia</option>
                  <option value="cine">Cine</option>
                  <option value="comics">Cómics</option>
                  <option value="control_de_versiones">Control de Versiones</option>
                  <option value="desarrollo_web">Desarrollo Web</option>
                  <option value="diseno_3d">Diseño / 3D</option>
                  <option value="educacion-biblioteca">Educación</option>
                  <option value="electronica-biblioteca">Electrónica</option>
                  <option value="ensayos_y_novelas">Ensayos / Novelas</option>
                  <option value="filosofia-biblioteca">Filosofía</option>
                  <option value="geografia-turismo">Geografía / Turismo</option>
                  <option value="historia-biblioteca">Historia</option>
                  <option value="idiomas">Idiomas</option>
                  <option value="informacion">Información</option>
                  <option value="marketing_y_business">Marketing / Business</option>
                  <option value="metodologias_agiles">Metodologías Ágiles</option>
                  <option value="multimedia-biblioteca">Multimedia</option>
                  <option value="musica-biblioteca">Música</option>
                  <option value="libros_programacion">Programación</option>
                  <option value="redes_y_sysadmins">Redes y Sys Admin</option>
                  <option value="retroinformatica-biblioteca">Retroinformática</option>
                  <option value="revistas">Revistas</option>
                  <option value="robotica">Robótica</option>
                  <option value="seo_y_sem">SEO / SEM</option>
                  <option value="software-general">Software General</option>
                  <option value="libros_software_libre">Software Libre</option>
                  <option value="textos-academicos-biblioteca">Textos Académicos</option>
                </select>
              </label>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {mostrarLibros}
                    </div>
                  </div>
                </div>
              </>)
    }
}

export default Libros;