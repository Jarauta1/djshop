import './films.css';
import {useState, useEffect} from "react"
import {Link,Redirect} from "react-router-dom"

function Films(props) {
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)
  let [checkFavoritos,setCheckFavoritos] = useState(false)
  let [checkCesta,setCheckCesta] = useState(false)
  let [numPag,setNumPag] = useState(1)
  let [totalPag,setTotalPag] = useState(0)
  let [data,setData] = useState([])
  let [precio,setPrecio] = useState(9.9)

  localStorage.setItem("retorno", "peliculas")

  useEffect(function(){
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es-US&page="+numPag).then(respuesta=>respuesta.json()).then(datos=>{
     setData(datos.results)
     setTotalPag(data.total_pages)
     console.log(datos)
    })
  },[numPag])

  function anterior() {
    if (numPag !== 1) {
      setNumPag(numPag - 1)
    }
  }

  function siguiente() {
    if (numPag !== totalPag) {
      setNumPag(numPag + 1)
    }
  }

  function favorito (titulo,cartel,id,edad,precio) {
    setCheckFavoritos(!checkFavoritos)
    console.log(usuario)
  
    if (usuario !== "") {
    fetch("http://localhost:3000/peliculas/favoritas",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,edad:edad,cartel:cartel,id:parseInt(id),producto: "peliculas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
     
      fetch("http://localhost:3000/usuarios/favoritos",{
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

  function visualizado (titulo,cartel,id,edad) {
    fetch("http://localhost:3000/peliculas/visualizado",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({titulo:titulo,cartel:cartel,id:parseInt(id), edad: edad,producto: "peliculas"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        console.log(edad)
      })

  }

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

    
    

  let mostrarPeliculas = data.map(pelicula=>{
   
    return(<>
            <li className="cardTvBlock">
              <a>
                <div className="season"><em>Media</em><span>{pelicula.vote_average}</span></div>
                <div className="episodes"><em>Votos</em><span>{pelicula.vote_count}</span></div>
                <div className="imdbRating"><span>{precio} €</span></div>
                <div className="Thumb">
                  <div className="tvpost">
                    <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} width="200"/>
                  </div>
                </div>
                <div className="BoxInfo">
                  <div className="BoxTitle">{pelicula.title}</div>
                  <div className="GenresList">
                    <div>Descargas</div>
                    <div>{pelicula.popularity}</div>
                  </div>
                  <div className="Category">
                    <label className="like-pelicula">
                      <input onClick={()=>{favorito(pelicula.title,`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`,pelicula.id,edadUsuario,precio)}} type="checkbox" checked={checkFavoritos}/>
                      <span className="material-icons heart">favorite</span>
                      {/* https://google.github.io/material-design-icons/ */}
                      {/* https://material.io/resources/icons/?style=baseline */}
                      <div className="ripple"></div>
                    </label>
                  </div>
                  <div className="Category2">
                    <label className="like-pelicula">
                      <input onClick={()=>{cesta(pelicula.title,`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`,pelicula.id,edadUsuario,precio)}} type="checkbox" checked={checkCesta}/>
                      <span className="material-icons heart">shopping_cart</span>
                      {/* https://google.github.io/material-design-icons/ */}
                      {/* https://material.io/resources/icons/?style=baseline */}
                      <div className="ripple"></div>
                    </label>
                  </div>
                  <div className="BoxInfoParagraph">{pelicula.overview.substr(0,146)}...
                    <div className="separacion"> 
                      <Link to={`/peliculas/${pelicula.id}`} onClick={()=>{visualizado(pelicula.title,`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`,pelicula.id,edadUsuario)}}>
                        <a className="detalles">
                          <div className="view-story">
                            <span>Detalles</span>
                            <i className="fa fa-arrow-right"></i>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </>)
  })

  function anterior() {
    if (numPag !== 1) {
      setNumPag(numPag - 1)
    }
  }

  function siguiente() {
    if (numPag !== totalPag) {
      setNumPag(numPag + 1)
    }
  }

  if (usuario == "" && checkFavoritos) {
    localStorage.setItem("retorno", "peliculas")
      return <Redirect to="/login"/>
  } else if ( usuario == "" && checkCesta) {
    localStorage.setItem("retorno", "peliculas")
      return <Redirect to ="/login"/>
  } else if (numPag == 1) {
      return(<>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      {mostrarPeliculas}
                    </div>
                  </div>
                </div>
              </div>
              <div className="botones">
                <div className="pagination">
                    <span className="page active">{numPag}</span>
                    <a href="#" className="page gradient">{numPag + 1}</a>
                    <a href="#" className="page gradient">{numPag + 2}</a>
                    <a href="#" onClick={siguiente} className="page gradient">Siguiente</a>
                </div>
              </div> 
            </>)
    } else if (numPag == 2) {
      return(<>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      {mostrarPeliculas}
                    </div>
                  </div>
                </div>
              </div>
              <div className="botones">
                <div className="pagination">
                  <a href="#" onClick={anterior} className="page gradient">Anterior</a>
                  <a href="#" className="page gradient">{numPag - 1}</a>     
                  <span className="page active">{numPag}</span>
                  <a href="#" className="page gradient">{numPag + 1}</a>
                  <a href="#" className="page gradient">{numPag + 2}</a>
                  <a href="#" onClick={siguiente} className="page gradient">Siguiente</a>
                </div>
              </div>
            </>)
    } else {
      return(<>
              <div className="container-fluid">
			          <div className="row">
					        <div className="col-12">
						        <div className="row">
                      {mostrarPeliculas}
                    </div>
                  </div>
                </div>
              </div>
              <div className="botones">
                <div className="pagination">
                  <a href="#" onClick={anterior} className="page gradient">Anterior</a>
                  <a href="#" className="page gradient">{numPag - 2}</a>
                  <a href="#" className="page gradient">{numPag - 1}</a>     
                  <span className="page active">{numPag}</span>
                  <a href="#" className="page gradient">{numPag + 1}</a>
                  <a href="#" className="page gradient">{numPag + 2}</a>
                  <a href="#" onClick={siguiente} className="page gradient">Siguiente</a>
	              </div>
              </div>
            </>);
    }    
}

export default Films;