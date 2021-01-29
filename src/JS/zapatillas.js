import '../CSS/zapatillas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Zapatillas() {

  let [data,setData] = useState([])

  useEffect(function(){
    
    fetch("http://localhost:3000/productos/zapatillas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res)=>res.json()).then((res)=>{
    setData(res[0].zapatillas)
    console.log(res[0].zapatillas)
  })
    
  },[])

  
  let mostrarProducto = data.map(zapatillas=>{
      return(<div className="card-zapatilla">
                <div className="imgBx">
                    <img src={zapatillas.imagen}/>
                </div>
                <div className="contentBx">
                    <h4>{zapatillas.titulo}</h4>
                    <div className="size">
                        <h3>Size :</h3>
                        <span>42</span>
                        <span>43</span>
                        <span>44</span>
                        <span>45</span>
                        <span>46</span>
                    </div>
                    <div className="color">
                        <h3>Precio: {zapatillas.precio} €</h3>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>)
  })
 
    return(<>
              
    <div className="fondo-zapatillas">
        {mostrarProducto}
    </div>

            </>);
      
}

export default Zapatillas;