
import './home.css';

import camisetas from "./assets/seccion_camisetas.jpg"
import libros from "./assets/seccion_libros.jpg"
import cine from "./assets/seccion_cine.jpg"
import zapatillas from "./assets/seccion_zapatillas.jpg"
import comics from "./assets/seccion_comics.jpg"

import {Link} from "react-router-dom"


function Home () {
  localStorage.setItem("retorno", "")
    return(<>
      <div className="container-portada">
        <div className="row-portada">
          <div className="div-portada starred">
            <Link to="/camisetas">
              <h1 className="starred-title">CAMISETAS</h1>
              <img className="img-portada" src={camisetas} alt=""/>
            </Link>
          </div>
          <div className="div-portada starred">
            <Link to="/comics">
              <h1 className="starred-title">COMICS</h1>
              <img className="img-portada" src={comics} alt=""/>
            </Link>
          </div>
          <div className="div-portada starred">
            <Link to="/libros">
              <h1 className="starred-title">LIBROS</h1>
              <img className="img-portada" src={libros} alt=""/>
            </Link>
          </div>
        </div>
        <div className="row-portada">
          <div className="div-portada-50 starred">
            <Link to="/cine">
              <h1 className="starred-title">CINE</h1>
              <img className="img-portada" src={cine} alt=""/>
            </Link>
          </div>
          <div className="div-portada-50 starred">
            <Link to="/zapatillas">
              <h1 className="starred-title">ZAPATILLAS</h1>
              <img className="img-portada" src={zapatillas} alt=""/>
            </Link>
          </div>
        </div>
      </div>
		</>);
}

  export default Home;