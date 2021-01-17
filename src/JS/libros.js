import "../CSS/libros.css"
import {useState, useEffect} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"

function Libros (){

    
    let [numPag,setNumPag] = useState(1)
    let [totalPag,setTotalPag] = useState(0)
    let [data,setData] = useState([])
  
    useEffect(function(){
      
      fetch("https://www.googleapis.com/books/v1/volumes?q=newest&key=AIzaSyClctZDhetiip9op2WDcw0IsILE9rBWgPE").then(respuesta=>respuesta.json()).then(datos=>{
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
  
    let dos = (pagina=>{
      if (numPag == 1) {
        return (<></>);
      } else if (numPag == 2) {
        return(<>
        <a href="#" onClick={anterior} className="page gradient">Anterior</a>
        <a href="#" className="page gradient">{numPag - 1}</a>
        </>);
      } else {
        return(<>
        <a href="#" onClick={anterior} className="page gradient">Anterior</a>
        <a href="#" className="page gradient">{numPag - 2}</a>
        <a href="#" className="page gradient">{numPag - 1}</a>
        </>);
      }
    })
  
  
      return(<>
     
      <div className="botones">
        <div className="pagination">
          {dos}      
          <span className="page active">{numPag}</span>
          <a href="#" className="page gradient">{numPag + 1}</a>
          <a href="#" className="page gradient">{numPag + 2}</a>
          <a href="#" onClick={siguiente} className="page gradient">Siguiente</a>
          </div>
      </div>
      </>)
}

export default Libros;