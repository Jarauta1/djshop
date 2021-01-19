import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Link, Redirect} from "react-router-dom"
import '../CSS/peliculaCard.css';

function PeliculaCard() {

  let {id} =useParams()
  let {titulo} = useParams()
  console.log(id,titulo)
  let [actores, setActores] = useState([])
  let [equipo, setEquipo] = useState([])
  let [info, setInfo] = useState({})
  let [genero, setGenero] = useState([])
  let contador = 0

  useEffect(function(){

    
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es`).then(respuesta=>respuesta.json()).then(datos=>{
    setActores(datos.cast)
    setEquipo(datos.crew)
    console.log(datos)
    })

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es`).then(respuesta=>respuesta.json()).then(datos=>{
    setInfo(datos)
    setGenero(datos.genres)
    
   
    })
    
  },[id])

  

  return(<>
    <div className="cardMovie">
      <div className="container">
        <a href="#"><img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt="cover" className="cover" /></a>
        <div className="back-cover" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500/${info.backdrop_path}")`}}>
        <Link to="/peliculas"><button>regresar</button></Link>
          <div className="details">
            <div className="title1">{titulo}</div>
            <div className="title2"> {info.tagline} </div>
          </div>
        </div>
        <div className="about-movie">
          <div className="colum-one">
            <fieldset className="starRating">
              <input id="rating1" type="radio" data-length="1" name="rating" value="1"/>
              <label for="rating1"></label>
              <input id="rating2" data-length="2" type="radio" name="rating" value="2" checked/>
              <label for="rating2"></label>
              <input id="rating3" type="radio" data-length="3" name="rating" value="3"/>
              <label for="rating3"></label>
              <input id="rating4" data-length="4" type="radio" name="rating" value="4"/>
              <label for="rating4"></label>
              <input id="rating5" data-length="5" type="radio" name="rating" value="5"/>
              <label for="rating5"></label>
            </fieldset>
            <span className="likes"><a href={info.homepage}>Web Oficial</a></span>
            <div className="colum-catogary">{genero.map(mostrar=>{return(<><span class="tag">{mostrar.name}</span><div className="separacion"></div></>)})}
            </div>
            <div class="avatars">{actores.map(cast=>{
                  if (contador <=3) {
                      contador = contador + 1
                      return(<><img className="imagen" title={cast.name} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/><div className="separacion"></div></>)
                    }
                  })}
            </div>
          </div>
          <div className="colum-second">
            <p> {info.overview}</p>
            
          </div>
        </div>
      </div>
    </div>   
 </>)
 
}

export default PeliculaCard;