import '../CSS/camisetas.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Camisetas(props) {

  let [data,setData] = useState([])

  localStorage.setItem("retorno", "camisetas")

  useEffect(function(){
    
    fetch("http://localhost:3000/productos/camisetas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res)=>res.json()).then((res)=>{
    setData(res[0].camisetas)
    console.log(res[0].camisetas)
  })
    
  },[])

  let mostrarCamisetas= data.map(camiseta=>{
    return(<>
    <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src={camiseta.imagen} alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>{camiseta.titulo}</span>
            </div>
            <div class="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div class="description-prod">
              <p></p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">{camiseta.precio} €</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="material-icons zmdi zmdi-shopping-basket">shopping_cart</i></a></div>
            </div>
          </div>
        </div>
      </div>
    </>)
  })

 
      return(<body className="body-camisetas">




<div class="shell">
  <div class="container">
    <div class="row">
     
     
      {mostrarCamisetas}
      
    </div>
   
  </div>
</div>


            </body>);
      
}

export default Camisetas;