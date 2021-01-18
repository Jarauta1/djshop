import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Link, Redirect} from "react-router-dom"
import '../CSS/detalle.css';

function Detalle() {

  let {id} =useParams()
  let [actores, setActores] = useState([])
  let [equipo, setEquipo] = useState([])
  let [info, setInfo] = useState({})
  let [genero, setGenero] = useState([])

  useEffect(function(){
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=en-US`).then(respuesta=>respuesta.json()).then(datos=>{
    setActores(datos.cast)
    setEquipo(datos.crew)
    console.log(datos)
    })

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=en-US`).then(respuesta=>respuesta.json()).then(datos=>{
    setInfo(datos)
    setGenero(datos.genres)
    console.log(datos)
    })
    
  },[id])

  let mostrarCast = actores.map(cast=>{
    return(<>
    <p>{cast.character} ----  {cast.name}</p>
    </>)
  })

  let mostrarCrew = equipo.map(crew=>{
    return(<>
    <p>{crew.job} ----  {crew.name}</p>
    </>)
  })

  let mostrarGeneros = genero.map(nombre=>{
  return <p>{nombre.name}</p>
  })

  return(<>
  <Link to="/peliculas"><button>volver</button></Link>
  {/* <h3></h3>
  
  <h4>Generos: </h4>
  {mostrarGeneros}
  <h4>Votación media: {info.vote_average}</h4>
  <h4>Total votos: {info.vote_count}</h4>
  <h3>Reparto</h3>
  {mostrarCast}
  <br/>
  <h3>Equipo</h3>
  {mostrarCrew} */}


  <div className="fondo" style={{backgroundImage: `background:linear-gradient(rgba(30,27,38, 0.95), rgba(30,27,38, 0.95)), url("https://image.tmdb.org/t/p/w500/${info.backdrop_path}")`}}>
  <div class="movie-card">
        <div class="poster-wrapper">
          <div class="poster">
            <img src="https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="poster" />
            <div class="release-date">
              <h2>30</h2>
              <div class="divider"></div>
              <p>NOV 2017</p>
            </div>
            <div class="btn-play">&#9655;</div>
          </div>
        </div>
        
        <div class="movie-info">
          <div class="header-section">
            <h2>{info.title}</h2>
            <p>Same-sex / American / English / 2016 / 1h59m</p>
            <div class="extra">
              <div class="ratings"><p>	&#9733; &#9733; &#9733; &#9733;	&#9734; 8.0</p></div>
              <p class="channels"><span>Hulu</span><span>Youtube</span><span>BBC</span></p>
            </div>
          </div>
          <div class="cast-section">
            <h3>THE CAST</h3>
            <div class="casts">
              <img src="https://m.media-amazon.com/images/M/MV5BNDg4OTczODE5Nl5BMl5BanBnXkFtZTcwMjgwMjA0Mg@@._V1_UY44_CR3,0,32,44_AL_.jpg" alt="avatar" />
              <img src="https://m.media-amazon.com/images/M/MV5BOTkyNDE4NTA4NF5BMl5BanBnXkFtZTgwOTY3ODQ1MDI@._V1_UY44_CR3,0,32,44_AL_.jpg" alt="avatar" />
              <img src="https://m.media-amazon.com/images/M/MV5BNzYwMTQ1ODY1MV5BMl5BanBnXkFtZTgwMTU5NDc5OTE@._V1_UY44_CR17,0,32,44_AL_.jpg" alt="avatar" />
              <img src="https://m.media-amazon.com/images/M/MV5BMTEyMDA1MzE0NjdeQTJeQWpwZ15BbWU3MDM0NzA4MDQ@._V1_UY44_CR1,0,32,44_AL_.jpg" alt="avatar" />
            </div>
          </div>
          <div class="synopsis-section">
            <h3>SYNOPSIS</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              itaque sequi nemo neque, quibusdam, repellat libero deleniti vel
              exercitationem obcaecati alias doloremque quisquam similique. Ad
              libero doloremque temporibus alias unde tempore at voluptates
              atque ratione minus vitae odio suscipit, ut quaerat omnis nulla
              nemo illum praesentium ducimus tenetur quas non!
            </p>
          </div>
          <div class="gallery-section">
            <h3>VIDEO / PICTURE</h3>
            <div class="gallery">
              <div class="small"><img src="https://m.media-amazon.com/images/M/MV5BYzkyNGViZDItYzFkMy00OGM0LTg3NzktZGVkZjM2Mzk1OGEzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg" alt="media" /></div>
              <div class="medium"><img src="https://m.media-amazon.com/images/M/MV5BNTkxOGIwYzUtNzc0ZS00MTBkLWFkODItYzEzNGRkN2E3MTAxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg" alt="media" /></div>
              <div class="small"><img src="https://m.media-amazon.com/images/M/MV5BMzg2OTY3MjE3OF5BMl5BanBnXkFtZTgwNTkxMDU0MDI@._V1_SX1777_CR0,0,1777,745_AL_.jpg" alt="media" /></div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </>)
}

export default Detalle;