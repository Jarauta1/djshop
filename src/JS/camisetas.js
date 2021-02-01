import '../CSS/camisetas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Camisetas(props) {

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

 
      return(<>

<div class="centeri">
<div class="card">
    <p class="preco"> R$ 99.99</p>
  <img src="https://authenticfeet.vteximg.com.br/arquivos/ids/227026-1000-1000/Camiseta-Nike-Swoosh-1-Masculina-Vermelho.jpg" class="foto img-camisetas" /* style="width:100%" *//>
  <p class="titu">Nike T-Shirt</p>
  <center>
  <button class="button"><span><i class="fa fa-shopping-cart" /* style="font-size:24px" */></i></span></button>
  </center>
  </div>
  </div>

            </>);
      
}

export default Camisetas;