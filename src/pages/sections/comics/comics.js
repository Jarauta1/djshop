import './comics.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Comics (props) {

    let [data,setData] = useState([])
    let [info,setInfo] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [usuario,setUsuario] = useState(props.usuario)
    let [edadUsuario,setEdadUsuario] = useState(props.edad)
    let [checkFavoritos,setCheckFavoritos] = useState(false)
    let [checkCesta,setCheckCesta] = useState(false)
    let contador = 0
    
    localStorage.setItem("retorno", "comics")
  
    useEffect(function(){
      
        setIsLoading(true)
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=70945025a9ff9a1f3d2c54de4c8c3599&hash=a92c5e400dfca9dbc06a81b098cf6210`).then(respuesta=>respuesta.json()).then(datos=>{
            
            setData(datos)
            setInfo(datos.data.results)
            setIsLoading(false)
            console.log(datos)
        
      })
    },[])


    
    
      function visualizado (titulo,imagen1,imagen2,id,edad,precio) {
        let poster = imagen1+"."+imagen2
        console.log(poster)
        fetch("http://localhost:3000/comics/visualizado",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({titulo:titulo,cartel:poster,id:parseInt(id), edad: edad,producto: "comics",precio:precio}),
          }).then((res)=>res.json()).then((res)=>{
            console.log(res)
            console.log(edad)
          })
    
      }
    
      
    
    let element = document.getElementById("animate");

    let mostrarComics= info.map(resultados=>{
        if (resultados.description !== null) {
            {contador = 0}
            return(<>
            <div className="card-comic">
            <Link to={`/comics/${resultados.id}`}>
            {resultados.images.map(mostrar=>{if (contador <= 0) {contador = contador + 1
                                return(<><img onClick={()=>{visualizado(resultados.title,mostrar.path,mostrar.extension,resultados.id,edadUsuario,resultados.prices[0].price)}} className="box" src={`${mostrar.path}.${mostrar.extension}`} alt="" width="300"/>
                                
                       
                                </>)}
                            })}
                            
                            <div className="text top-left"><p>{resultados.title}</p></div>
                            <div className="text bottom-right"><p>{resultados.prices[0].price} €</p></div>
                        
                    </Link>
            </div>

                    
                </>)
        }
                                    
    })

    if (isLoading) {
        return(<div className="body-comic">
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
                    {/* <div className="col-1">
                        <div className="box box1">
                            <div className="oddboxinner"> bangers?</div>
                        </div>
                    </div> */}
                    <div className="col-12">
                    <div class="body-loader-body">
                    <div class="body-loader-comic">
  <span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </span>
  <div class="base">
    <span></span>
    <div class="face"></div>
  </div>
</div>
<div class="longfazers">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
                   </div>
                    </div>
                    {/* <div className="col-1">
                        <div className="box box1">
                            <div className="oddboxinner"> bangers?</div>
                        </div>
                    </div> */}
                </div>
            </div>
        <footer><p>{data.attributionText}</p></footer>
        </div>)
    } else {
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
                    {/* <div className="col-1">
                        <div className="box box1">
                            <div className="oddboxinner"> bangers?</div>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="container-comic">
                            {mostrarComics}
                        </div>
                    </div>
                    {/* <div className="col-1">
                        <div className="box box1">
                            <div className="oddboxinner"> bangers?</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <footer><p>{data.attributionText}</p></footer>
        </>)
    }
}

export default Comics;