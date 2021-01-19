import '../CSS/Peliculas.css';
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link, Redirect} from "react-router-dom"
import PeliculaCard from "./peliculaCard.js"

function Peliculas() {

  let [numPag,setNumPag] = useState(1)
  let [totalPag,setTotalPag] = useState(0)
  let [data,setData] = useState([])
  let [infoPelicula, setInfoPelicula] = useState([])
  let [genero, setGenero] = useState([])

  useEffect(function(){
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es-US&page="+numPag).then(respuesta=>respuesta.json()).then(datos=>{
     setData(datos.results)
     console.log(datos)
     setTotalPag(data.total_pages)

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

  function favorito (titulo) {
    console.log(titulo)
    return(<BrowserRouter>
    
    
    </BrowserRouter>
  )}

  let mostrarPeliculas = data.map(pelicula=>{
   
    return(<>
<li className="cardTvBlock">
        <a>
            <div className="season"><em>Media</em><span>{pelicula.vote_average}</span></div>
            <div className="episodes"><em>Votos</em><span>{pelicula.vote_count}</span></div>
            <div className="imdbRating"><span>9.9 €</span></div>
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
                  <label className="like">
                   <input onClick={()=>{favorito(pelicula.title)}} type="checkbox"/>
                    <span className="material-icons heart">favorite</span>
                     <div className="ripple"></div>
                  </label>
                </div>
                <div className="BoxInfoParagraph">{pelicula.overview.substr(0,146)}...
                  <div> <Link to={`/peliculas/${pelicula.title}/${pelicula.id}`}><button>Detalle</button></Link></div>
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

 
    if (numPag == 1) {
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

export default Peliculas;