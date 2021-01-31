import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {Link, Redirect} from "react-router-dom"
import '../CSS/peliculaCard.css';

function PeliculaCard(props) {

  let {id} =useParams()
  let {titulo} = useParams()
  let [usuario,setUsuario] = useState(props.usuario)
  let [edadUsuario,setEdadUsuario] = useState(props.edad)
  let [checkCesta,setCheckCesta] = useState(false)
  let [url,setUrl] = useState(`peliculas/${id}`)
  let [actores, setActores] = useState([])
  let [info, setInfo] = useState({})
  let [genero, setGenero] = useState([])
  let [precio,setPrecio] = useState(9.99)
  let contador = 0

  useEffect(function(){
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es`).then(respuesta=>respuesta.json()).then(datos=>{
    setActores(datos.cast)
    })

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es`).then(respuesta=>respuesta.json()).then(datos=>{
    setInfo(datos)
    setGenero(datos.genres) 
    })
    
  },[id])


  /* ---------- */
  /* BOTON CART */
  /* ---------- */
  let addToCartButton = document.querySelectorAll(".add-to-cart-button");

  document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
  });
  /* -------------- */
  /* FIN BOTON CART */
  /* -------------- */

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

  if ( usuario == "" && checkCesta) {
    localStorage.setItem("retorno", url)
    return <Redirect to ="/login"/>
} else {
  return(<>
          <div className="cardMovie">
            <div className="container">
              <a href="#"><img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} alt="cover" className="cover" /></a>
              <div className="back-cover" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500/${info.backdrop_path}")`}}>
                <Link to="/peliculas"><button className="close-button">regresar</button></Link>
                <div className="details">
                  <div className="title1">{info.title}</div>
                  <div className="title2"> {info.tagline} </div>
                </div>
              </div>
              <div className="about-movie">
                <div className="colum-one">
                  <div className="info-details">
                    <span><i className="hd">HD</i></span>
                    <span><a>{info.release_date}</a></span>|<span>{info.runtime} min</span>
                  </div>
                  <span className="likes">
                    <span className="ratingFilm">
                      <b>{info.vote_average}</b>
                    </span>
                    <span className="material-icons movie">movie</span>
                        <a href={`https://www.imdb.com/title/${info.imdb_id}/`} target="_blank">IMDB</a>
                  </span>
                  <div className="colum-catogary">{genero.map(mostrar=>{return(<><span className="tag">{mostrar.name}</span><div className="separacion"></div></>)})}
                  </div>
                  <div className="cart-button">
                    <button className="add-to-cart-button">
                      <svg className="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                      <svg className="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                      <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                      <svg className="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
                      <span onClick={()=>{cesta(info.title,`https://image.tmdb.org/t/p/w500/${info.poster_path}`,id,edadUsuario,precio)}} className="add-to-cart" checked={checkCesta}>Añadir a la cesta</span>
                      <span className="added-to-cart">Añadido a la cesta</span>
                    </button>
                  </div>     
                </div>
                <div className="colum-second">
                  <p> {info.overview}</p>
                  <div class="persons">
                    {actores.map(cast=>{
                                          if (contador <=3) {
                                              contador = contador + 1
                                              return(<>
                                                      <div class="person">
                                                        <figure class="img">
                                                          <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} title={`${cast.name} ... ${cast.character}`} alt=""/>
                                                           <figcaption><i class="ion-android-add"></i></figcaption>
                                                          </figure>
                                                      </div>
                                                    </>)
                                            }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </>)
}
}

export default PeliculaCard;