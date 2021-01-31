import { useState, useEffect} from "react";
import {Link} from "react-router-dom"
/* import '../App.css'; */
import '../CSS/cesta.css';
import logo from "../Imagenes/logo_header_blanco.png"



function Cesta(props) {


    let [usuario,setUsuario] = useState(props.usuario)
    let [data,setData] = useState({})

    useEffect(function(){
  
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario}),
            }).then((res)=>res.json()).then((res)=>{
               console.log(res.datos[0].cesta)
               setData(res.datos[0].cesta)
               
                     
                
            })
          
      },[usuario])


      let mostrarCesta = data.map(cesta=>{
          return(<>
          <div class="product">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
    </div>
    <div class="product-details">
      <div class="product-title">Dingo Dog Bones</div>
      <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
    </div>
    <div class="product-price">12.99</div>
    <div class="product-quantity">
      <input type="number" value="2" min="1"/>
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">25.98</div>
  </div>
          </>)
      })

        return(<div className="body-cesta">
         <h2 className="h2-cesta">Cesta</h2>

<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Imagen</label>
    <label class="product-details">Producto</label>
    <label class="product-price">Precio</label>
    <label class="product-quantity">Cantidad</label>
    <label class="product-removal">Eliminar</label>
    <label class="product-line-price">Total</label>
  </div>

  

 {mostrarCesta}

  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">71.97</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">90.57</div>
    </div>
  </div>
      
      <button class="checkout">Checkout</button>

</div>
        </div>)
    


    
    }

export default Cesta;