/* import logo from './logo.svg'; */
import './App.css';

import {BrowserRouter, Route} from "react-router-dom"

import Header from "./JS/Header.js"
import Login from "./JS/login.js"
import Peliculas from "./JS/peliculas.js"
import Portada from "./JS/portada.js"
import Libros from "./JS/libros.js"
import Footer from "./JS/Footer.js"
import PeliculaCard from "./JS/peliculaCard.js"
import Comics from "./JS/comics.js"


function App() {
/*   const [ usuario, setUsuario] = useState({})


  const login = (email, pass) => {
  fetch("/login")
}

if( usuario.administrador){
return
}else{´
  return <Redirect to="/" />
} */


  return(<BrowserRouter>
  <Header/*  usuario={usuario} *//>
  <Route exact path="/">
    <br></br>
<div className="promociones"><p>PROMOCIONES</p><hr></hr></div>

<div><Portada/></div>
  </Route>
  <Route exact path="/ropa">
<div><p>Ropa</p></div>
  </Route>
  <Route exact path="/login">
    <Login /* login={login} */ />
  </Route>
  <Route exact path="/zapatillas">
<div><p>Zapatillas</p></div>
  </Route>
  <Route exact path="/peliculas">
<Peliculas/>
  </Route>
<Route exact path="/peliculas/:titulo/:id">
  <PeliculaCard/>
</Route>
  <Route exact path="/libros">
<Libros />
  </Route>
  <Route exact path="/comics">
<Comics/>
  </Route>
  <Footer/>
  </BrowserRouter>)
  
}

export default App;


/* https://rapidapi.com/collection/how-to-get-amazon-product-reviews-api */
/* https://rapidapi.com/collection/amazon-products */
/* https://rapidapi.com/blog/email-apis-which-one-is-right-for-you/ */
/* https://blog.api.rakuten.net/top-retail-product-apis/ */