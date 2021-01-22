import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Link, Redirect} from "react-router-dom"
import '../CSS/comicCard.css';

function ComicCard() {

  let {id} =useParams()
  let [data, setData] = useState([])
  let [imagen,setImagen] = useState([])
  let contador = 0
  

  useEffect(function(){

    fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=70945025a9ff9a1f3d2c54de4c8c3599&hash=a92c5e400dfca9dbc06a81b098cf6210`).then(respuesta=>respuesta.json()).then(datos=>{

       setData(datos.data.results[0])
       setImagen(datos.data.results[0].images)
       console.log(datos.data.results[0])
       console.log(datos.data.results[0].images)
    
    
    })
},[id])

let mostrarImagen = imagen.map(mostrar=>{
    if (contador <=0) {
        contador = contador + 1
        return(<><div className="left-image" style={{backgroundImage:`url("${mostrar.path}.${mostrar.extension}")`}} alt="" height="400"></div></>)
    }
    })


  return(<div className="comicCard">
            <div className="card-container">
                
                    {mostrarImagen}
               
                <div className="container-right">
                    <div className="top-section">
                        <div className="title-content">
                            <h1>{data.title}</h1>
                            <p><span className="rating">R</span>| <span className="studio">Marvel Studios</span>|<img src="https://staticv2.rottentomatoes.com/static/images/icons/fresh-16.png" height="16px" width="16px" />
                            <span className="score">95%</span></p>
                        </div>
                    </div>
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                    <div className="favorite">
                        <div className="star-icon">
                            <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1">
                                <g>
                                    <polygon id="Star" points="7 10.5 2.88550323 12.663119 3.67130219 8.08155948 0.342604386 4.83688104 4.94275162 4.16844052 7 0 9.05724838 4.16844052 13.6573956 4.83688104 10.3286978 8.08155948 11.1144968 12.663119"></polygon>
                                </g>
                            </svg>
                        </div>
                        <p>Favorite</p>
                    </div>
                    <div className="wishlist">
                        <div className="list-icon">
                            <svg width="9px" height="8px" viewBox="0 0 9 8" version="1.1">
                                <g>
                                    <path d="M0,0 L9,0 L9,2 L0,2 L0,0 Z M0,3 L9,3 L9,5 L0,5 L0,3 Z M0,6 L9,6 L9,8 L0,8 L0,6 Z" id="Combined-Shape" ></path>
                                </g>
                            </svg>
                        </div>
                        <p>Add to Wish List</p>
                    </div>
                    <div className="button outline">
                        <p className="price">HD - $4.99</p>
                        <div className="arrow">
                            <svg width="8px" height="4px" viewBox="0 0 8 4" version="1.1">
                                <g >
                                    <polyline id="arrow" stroke="#145ce0" points="1 0.118013258 3.96325692 3.08127018 7.04452709 0"></polyline>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="button full">
                        <p>RENT</p>
                    </div>
                </div>
            </div>
        </div>)
 
}

export default ComicCard;