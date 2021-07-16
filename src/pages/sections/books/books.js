import "./books.css"
import {useState, useEffect} from "react"
import {Redirect, Link} from "react-router-dom"


function Books (props){

  localStorage.setItem("retorno", "libros")
    
    let [data,setData] = useState([])
    let [categoria, setCategoria] = useState("libros_programacion")
    let [isLoading, setIsLoading] = useState (false)
    let [precio, setPrecio] = useState("")
    let [edadUsuario, setEdadUsuario] = useState(props.edad)
    let [usuario, setUsuario] =useState(props.usuario)
    let [checkFavoritos,setCheckFavoritos] = useState(false)
    let [checkCesta,setCheckCesta] = useState(false)
  
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

    function favorito (titulo,cartel,id,edad,precio) {
      setCheckFavoritos(!checkFavoritos)
      if (usuario !== "") {
      fetch("http://localhost:3000/libros/favoritas",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({titulo:titulo,edad:edad,cartel:cartel,id:parseInt(id),producto: "libros"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
        })
       
        fetch("http://localhost:3000/usuarios/favoritos",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "libros"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
        })

        fetch("http://localhost:3000/libros/visualizado",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,precio:precio,producto: "libros"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
          console.log(edad)
        })
      }
    }
  
    function cesta (titulo,cartel,id,edad,precio) {
      setCheckCesta(!checkCesta)
      if (usuario !== "") {
      fetch("http://localhost:3000/libros/cesta",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad:edad,producto: "libros"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
        })
          fetch("http://localhost:3000/usuarios/cesta",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario,titulo:titulo,cartel:cartel,id:parseInt(id),precio:precio,producto: "libros"}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
          })

          fetch("http://localhost:3000/libros/visualizado",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,precio:precio,producto: "libros"}),
        }).then((res)=>res.json()).then((res)=>{
          console.log(res)
          console.log(edad)
        })
    }
  }


    let mostrarLibros = data.map(libro=>{
   
      return(<>

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
                        <div className="options">
                          <div className="price-book"><p className="price-book-text">{parseInt(libro.ID)/100}€</p></div>
                          <div className="div-button-book">
                          <button className="button-price-book">
                            <div className="book-surface"></div>
                            <div onClick={()=>{favorito(libro.title,libro.cover,libro.ID,edadUsuario,parseInt(libro.ID)/100)}} className="book-bind">
                              <p>Favorito</p>
                            </div>
                          </button>
                          <button className="button-price-book">
                            <div className="book-surface"></div>
                            <div onClick={()=>{cesta(libro.title,libro.cover,libro.ID,edadUsuario,parseInt(libro.ID)/100)}} className="book-bind">
                              <p>Comprar</p>
                            </div>
                          </button>
                          </div>
                        </div>
                        <div className="container"></div>
                      </div> 
                    </div>
				     
            </>)
    })
  
    if (usuario == "" && checkFavoritos) {
      localStorage.setItem("retorno", "libros")
        return <Redirect to="/login"/>
    } else if ( usuario == "" && checkCesta) {
      localStorage.setItem("retorno", "libros")
        return <Redirect to ="/login"/>
    } else if (isLoading) {
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
              <div className="contenedor-libros">
                
                    {mostrarLibros}
                    
                </div>
              </>)
    }
}

export default Books;