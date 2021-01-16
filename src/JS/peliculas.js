import '../CSS/Peliculas.css';
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

function Peliculas() {

  let [numPag,setNumPag] = useState(1)
  let [totalPag,setTotalPag] = useState(0)
  let [data,setData] = useState([])

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

  let mostrarPeliculas = data.map(pelicula=>{
    return(<>



<li className="cardTvBlock">
        <a href="#">
            <div className="season"><em>Media</em><span>{pelicula.vote_average}</span></div>
            <div className="episodes"><em>Votos</em><span>{pelicula.vote_count}</span></div>
            <div className="imdbRating"><em>IMDb</em><span>9.9</span></div>
            <div className="Thumb">
                <div className="tvpost">
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} width="200"/>
                </div>
            </div>
            <div className="BoxInfo">
                <div className="BoxTitle">{pelicula.title}</div>
                <div className="GenresList">
                    <div>Crime</div>
                    <div>Drama</div>
                    <div>Thriller</div>
                </div>
                <div className="Category"><i className="ion ion-ios-folder-open"></i>Series TV</div>
                <div className="BoxInfoParagraph">{pelicula.overview}</div>
            </div>
            <div className="BlockBar">
                <div className="Views"><i className="zmdi zmdi-eye"></i> <em>Views</em>1229</div>
                <div className="Reviews"><i className="zmdi zmdi-accounts-alt"></i> <em>Reviews</em>120</div>
            </div>
        </a></li>






      
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
    <button onClick={anterior}>Anterior</button>
  <button onClick={siguiente}>Siguiente</button>
    </div>
    </>)
}

export default Peliculas;