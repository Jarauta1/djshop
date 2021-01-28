import '../CSS/login.css';
import accederFoto from "../Imagenes/acceder.jpg"

import {useState,useEffect} from "react"
import {Redirect} from "react-router-dom"

function Login () {
  let [retorno,setRetorno] = useState(localStorage.getItem("retorno"))
  console.log(retorno)
  let [vuelta,setVuelta] = useState(false)
  
  let [emailAcceso, setEmailAcceso] = useState("")
  let [eventMailAcceso, setEventMailAcceso] = useState("")
  let [contrasenaAcceso, setContrasenaAcceso] = useState("")
  let [eventContrasenaAcceso, setEventContrasenaAcceso] =useState("")

  let [nombreRegistro,setNombreRegistro] = useState("")
  let [eventNombreRegistro,setEventNombreRegistro] = useState("")
  let [apellido1Registro,setApellido1Registro] = useState("")
  let [eventApellido1Registro,setEventApellido1Registro] = useState("")
  let [apellido2Registro,setApellido2Registro] = useState("")
  let [eventApellido2Registro,setEventApellido2Registro] = useState("")
  let [fechaRegistro,setFechaRegistro] = useState("")
  let [eventFechaRegistro,setEventFechaRegistro] = useState("")
  let [emailRegistro,setEmailRegistro] = useState("")
  let [eventEmailRegistro,setEventEmailRegistro] = useState("")
  let [passwordRegistro,setPasswordRegistro] = useState("")
  let [eventPasswordRegistro,setEventPasswordRegistro] = useState("")
  let [confirmacionRegistro,setConfirmacionRegistro] = useState("")
  let [eventConfirmacionRegistro,setEventConfirmacionRegistro] = useState("")


    function cambioPantalla () {
  
  document.querySelector('.container-login').classList.toggle('active');
}

function changeMailAcceso(e) {
  setEventMailAcceso(e.target.value)
}

function changeContrasenaAcceso(e) {
  setEventContrasenaAcceso(e.target.value)
}

function changeNombreRegistro(e) {
  setEventNombreRegistro(e.target.value)
}

function changeApellido1Registro(e) {
  setEventApellido1Registro(e.target.value)
}

function changeApellido2Registro(e) {
  setEventApellido2Registro(e.target.value)
}

function changeFechaRegistro(e) {
  setEventFechaRegistro(e.target.value)
}

function changeEmailRegistro(e) {
  setEventEmailRegistro(e.target.value)
}

function changePasswordRegistro(e) {
  setEventPasswordRegistro(e.target.value)
}

function changeConfirmacionRegistro(e) {
  setEventConfirmacionRegistro(e.target.value)
}

function acceder() {
  setEmailAcceso(eventMailAcceso)
  setContrasenaAcceso(eventContrasenaAcceso)

  fetch("http://localhost:3000/usuarios/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({mail: emailAcceso, password: contrasenaAcceso}),
  }).then((res)=>res.json()).then((res)=>{
    window.alert(res.mensaje)
    document.getElementById("mensajeAcceso").innerHTML = `<span>${res.mensaje}</span>`
    if (res.entrar == "si") {
      console.log(emailAcceso)
      setVuelta(true)
    }
  })
}

function registrar() {
  setNombreRegistro(eventNombreRegistro)
  setApellido1Registro(eventApellido1Registro)
  setApellido2Registro(eventApellido2Registro)
  setFechaRegistro(eventFechaRegistro)
  setEmailRegistro(eventEmailRegistro)
  setPasswordRegistro(eventPasswordRegistro)
  setConfirmacionRegistro(eventConfirmacionRegistro)
  console.log(fechaRegistro)
  console.log(emailRegistro)
  if (passwordRegistro.length < 6) {
    document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
  } else {
    if (confirmacionRegistro !== passwordRegistro) {
      document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña no coincide</span>"
    } else {
      fetch("http://localhost:3000/usuarios/registro",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre: nombreRegistro,apellido1: apellido1Registro, apellido2: apellido2Registro, fecha: fechaRegistro, mail: emailRegistro, password: passwordRegistro}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        setVuelta(true)
      })
    } 
  }

  

}
    

if (vuelta) {
  return(<Redirect to={`/${retorno}`}/>)
} else {
    return(<>
    
  <section className="login">
    <div className="container-login">
      <div className="user signinBx">
        <div className="imgBx"><img src={accederFoto} alt="" /></div>
        <div className="formBx">
          <div className="opcion-registro">
            <h2>Inicia sesión</h2>
            <input onChange={changeMailAcceso} className="input-long" type="text" name="" placeholder="Correo electrónico" />
            <input onChange={changeContrasenaAcceso} className="input-long" type="password" name="" placeholder="Contraseña" />
            <input onClick={acceder} className="input-long" type="submit" name="" value="Acceder"/>
            <div id="mensajeAcceso"></div>
            <p className="signup">
              ¿No tienes cuenta?
              <a onClick={cambioPantalla}>  Regístrate</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user signupBx">
        <div className="formBx">
          <div className="opcion-registro">
            <h2>CREA UNA CUENTA</h2>
            <input onChange={changeNombreRegistro} className="input-long" type="text" name="nombre" placeholder="Nombre"/>
            <input onChange={changeApellido1Registro} className="input-short1" type="text" name="primerApellido" placeholder="Primer apellido"/>
            <input onChange={changeApellido2Registro} className="input-short2" type="text" name="segundoApellido" placeholder="Segundo apellido"/>
            <input onChange={changeFechaRegistro} className="input-long" type="date" name="fecha" placeholder="Fecha nacimiento" />
            <input onChange={changeEmailRegistro} className="input-long" type="text" name="email" placeholder="Correo electrónico" />
            <input onChange={changePasswordRegistro} className="input-long" type="password" name="contraseña" placeholder="Contraseña" />
            <input onChange={changeConfirmacionRegistro} className="input-long" type="password" name="confContraseña" placeholder="Confirmar contraseña" />
            <input onClick={registrar} className="input-long" type="submit" name="" value="Regístrate" />
            <div id="mensajeRegistro"></div>
            <p className="signup">
              ¿Ya tienes una cuenta? 
              <a onClick={cambioPantalla}>  INICIAR SESIÓN</a>
            </p>
          </div>
        </div>
        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
      </div>
    </div>
  </section>
    </>)
}
}

export default Login;