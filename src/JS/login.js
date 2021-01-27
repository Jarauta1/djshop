import '../CSS/login.css';
import accederFoto from "../Imagenes/acceder.jpg"

import {useState} from "react"

function Login () {

  let [emailAcceso, setEmailAcceso] = useState("")
  let [eventMailAcceso, setEventMailAcceso] = useState("")

  let [contrasenaAcceso, setContrasenaAcceso] = useState("")
  let [eventContrasenaAcceso, setEventContrasenaAcceso] =useState("")

    function cambioPantalla () {
  
  document.querySelector('.container-login').classList.toggle('active');
}

function changeMailAcceso(e) {
  setEventMailAcceso(e.target.value)
  
}

function changeContrasenaAcceso(e) {
  
  setEventContrasenaAcceso(e.target.value)
}

function acceder() {
  setEmailAcceso(eventMailAcceso)
  setContrasenaAcceso(eventContrasenaAcceso)
  console.log(emailAcceso,contrasenaAcceso)
}

function registrar() {



}
    
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
            <input className="input-long" type="text" name="nombre" placeholder="Nombre"/>
            <input className="input-short1" type="text" name="primerApellido" placeholder="Primer apellido"/>
            <input className="input-short2" type="text" name="segundoApellido" placeholder="Segundo apellido"/>
            <input className="input-long" type="date" name="fecha" placeholder="Fecha nacimiento" />
            <input className="input-long" type="email" name="email" placeholder="Correo electrónico" />
            <input className="input-long" type="password" name="contraseña" placeholder="Contraseña" />
            <input className="input-long" type="password" name="confContraseña" placeholder="Confirmar contraseña" />
            <input onClick={registrar} className="input-long" type="submit" name="" value="Regístrate" />
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

export default Login;