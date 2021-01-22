import '../CSS/comic.css';
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link, Redirect} from "react-router-dom"
/* import PeliculaCard from "./peliculaCard.js" */

function Comics () {

    let [data,setData] = useState([])
    let [info,setInfo] = useState([])
    
  
    useEffect(function(){
      
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=70945025a9ff9a1f3d2c54de4c8c3599&hash=a92c5e400dfca9dbc06a81b098cf6210`).then(respuesta=>respuesta.json()).then(datos=>{

       setData(datos)
       setInfo(datos.data.results)
       console.log(datos.data.results[3])
        
      })
    },[])


    /*  */




    /*  */
    
    let element = document.getElementById("animate");

    let mostrarComics= info.map(resultados=>{
        return(<>
        <div className="panel">
        <Link to={`/comics/${resultados.id}`}>
            <div className="flip">
  <div className="front">
  {resultados.images.map(mostrar=>{return(<><img src={`${mostrar.path}.${mostrar.extension}`} alt="" height="400"/></>)})}
{/*  <img src={`${resultados.images[0].path}.${resultados.images[0].extension}`} alt="" height="400"/> */}
    <p className="text top-left">{resultados.title}</p>
    <p className="text bottom-right">{resultados.prices[0].price} €</p>
  </div>
 <div className="back">
      <p className="text speech">{resultados.description}</p>
  </div> 
  </div>
  </Link>
  </div>
        </>)
    })

    
    return(<>
    <header className="intro">
        <div className="wrapper run-animation" id="animate">
	        <div className="logo">
                <span className="marvel">Marvel</span>
		        <span className="studios">Studios</span>
            </div>
        </div>
        <div className="images"></div>
    </header>

    <div className="container">
        <div className="row">
            <div className="col-1">
                <div className="box box1">
                    
                </div>
            </div>
            <div className="col-10">
                <article className="comic">
                    {mostrarComics}
                </article>
            </div>
            <div className="col-1">
            <div className="box box1">
                    <div className="oddboxinner"> bangers?</div>
                </div>
            </div>
        </div>
    </div>
    
        
    <footer><p>{data.attributionText}</p></footer>
    </>)
}

export default Comics;