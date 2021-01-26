import '../CSS/zapatillas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Zapatillas() {

  let [numPag,setNumPag] = useState(1)
  let [totalPag,setTotalPag] = useState(0)
  let [data,setData] = useState([])

  useEffect(function(){
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=670095a48bfcd1a43ef073e54c4dc56f&language=es-US&page="+numPag).then(respuesta=>respuesta.json()).then(datos=>{
     setData(datos.results)
     setTotalPag(data.total_pages)
    })
  },[numPag])

 
    return(<>
              
    <div className="fondo">
        <div className="card">
            <div className="imgBx">
                <img src="https://raw.githubusercontent.com/Jhonierpc/WebDevelopment/master/Product%20Card%20UI%20Design/img/shoes.png"/>
            </div>
            <div className="contentBx">
                <h2>Adidas Shoes</h2>
                <div className="size">
                    <h3>Size :</h3>
                    <span>42</span>
                    <span>43</span>
                    <span>44</span>
                    <span>45</span>
                    <span>46</span>
                </div>
                <div className="color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>

            </>);
      
}

export default Zapatillas;