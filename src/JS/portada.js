
import '../CSS/portada.css';

function Portada () {

    return(
	/* PROMOCIONES */
	<div className="container-fluid">
		{/* PRIMERA LINEA */}

		
    			<div className="row">
					{/* LATERAL IZQUIERDO */}
					<div className="col-3">
						<div className="row">
							<div className="col-12">
								<div className="book-card">
    								<div className="book-card__cover">
     									<div className="book-card__book">
        									<div className="book-card__book-front">
          										<img className="book-card__img" src="https://i.ibb.co/gTvbqnQ/harry-potter.jpg"/>
        									</div> 
        									<div className="book-card__book-back"></div>
        									<div className="book-card__book-side"></div>
      									</div>  
    								</div>    
  								</div>
    							<div>
      								<div className="book-card__title">
        								| batman
        							</div>
      								<div className="book-card__author">
        								| J. K. Rowling
        							</div>
    							</div> 
							</div>
						</div>
					</div>
					{/* CENTRO Y LATERAL DERECHO */}
					<div className="col-6">
						

						<div className="col-12"> {/* banner películas */}						
							<div className="banner">
								<div className="slider-container">
 				 					<div className="menu">
    									<label for="slide-dot-1"></label>
    									<label for="slide-dot-2"></label>
    							
  									</div>
  									<input id="slide-dot-1" type="radio" name="slides" checked/>
  									<div className="slide slide-1">
										<div className="movie-card" style={{backgroundImage: `url("http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg")`}}>
											<div className="color-overlay">
												<div className="movie-share">
													<p>15 €</p>
												</div>
												<div className="movie-content">
													<div className="movie-header">
														<h1 className="movie-title">Blade Runner</h1>
														<h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
													</div>
													<p className="movie-desc">A blade runner must pursue and try to terminate four replicants who stole a ship in</p>
													<a className="btn btn-outline" href="#">Watch Trailer</a>
												</div>
											</div>
										</div>
									</div>
  									<input id="slide-dot-2" type="radio" name="slides"/>
  									<div className="slide slide-2">
										<div className="movie-card" style={{backgroundImage: `url("http://www.blastr.com/sites/blastr/files/back-to-the-future-part-ii-original.jpg")`}}>
											<div className="color-overlay">
												<div className="movie-share">
													<p>15 €</p>
												</div>
												<div className="movie-content">
													<div className="movie-header">
														<h1 className="movie-title">LA OTRA</h1>
														<h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
													</div>
													<p className="movie-desc">A blade runner must pursue and try to terminate four replicants who stole a ship in</p>
													<a className="btn btn-outline" href="#">Watch Trailer</a>
												</div>
											</div>
										</div>
									</div>
						
						
								</div>
							</div>
						</div> {/* fin banner peliculas */}
	
						
						<div className="col-12">
							
					 	{/* 	<div className="movie-card" style={{backgroundImage: `url("http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg")`}}>
								<div className="color-overlay">
									<div className="movie-share">
										<p>15 €</p>
									</div>
									<div className="movie-content">
										<div className="movie-header">
											<h1 className="movie-title">Blade Runner</h1>
											<h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
										</div>
										<p className="movie-desc">A blade runner must pursue and try to terminate four replicants who stole a ship in</p>
										<a className="btn btn-outline" href="#">Watch Trailer</a>
									</div>
								</div>
							</div>  */}

							{/* <div id="shadow">
							</div> */}

							<div id="slider">
  
    							<div id="allpic">
      								
  
    							</div>
    							<div id="allpic">
      								<img src="http://i4.ytimg.com/sh/G2lfbxaIEy4/showposter.jpg?v=4fbb28d7"/>
    							</div>
  								<div id="allpic">
      								<img src="http://ec2.images-amazon.com/images/I/41hmD1hLmBL._SL500_AA300_.jpg"/>
    							</div>
  								<div id="allpic">
      								<img src="https://1.bp.blogspot.com/-55F_zXg6TKI/UKB6cCTZ1XI/AAAAAAAAB3c/um9nqYtzfY4/s1600/61bEcpAzU0L._SL500_AA300_.jpg"/>
    							</div>
  								<div id="allpic">
      								<img src="https://1.bp.blogspot.com/-55F_zXg6TKI/UKB6cCTZ1XI/AAAAAAAAB3c/um9nqYtzfY4/s1600/61bEcpAzU0L._SL500_AA300_.jpg"/>
    							</div>
  
  
  
							</div>




						</div>
						
					</div>
					<div className="col-2">
					<div className="prueba">1</div>

					</div>

			</div>
		
			<div className="container-fluid">
    			<div className="row">
					<div className="col-12">

					<div className="slider">
		<div className="popular-movies">
			<div className="movie-container">
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. </p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento.</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. </p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento.</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			<div className="image-effect">
			<div className="movie-image" ><img src="https://farm5.staticflickr.com/4487/24153103448_8ce5082f75.jpg" alt="Guardianes de la galaxia vol.2" class="zoom"/>
			<div className="movie-info">
				<h2 className="movie-title">Guardianes de la Galaxia vol.2</h2>
				<p className="movie-sinopsis">La informacion de esta pelicula no se encuentra disponible en este momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit animi ut nam facilis architecto, minus itaque accusamus labore fugit assumenda omnis ab molestias optio saepe sunt..</p>
				<div className="links">
					<a className="watch" href="ver" >Ver</a>
					<a className="down" href="down" >Descargar</a>
				</div>
			</div>
			</div>
			</div>
			</div>
		</div>
	</div>
	
					</div>
				</div>
		</div>

		</div>);
}

  export default Portada;
  