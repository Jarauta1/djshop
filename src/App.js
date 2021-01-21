.App {
  text-align: center;
}

.promociones p {
  padding: 0 0 0.1% 2%;
  margin: 0;
  font: normal 20px/24px ECI;
  color: #da1e1e;
  font-weight: 600;
}

.promociones hr {
  width: 96%;
  margin: 0 2% 1% 2% ;
  height: 2.5px;
  background-color: red;
}

body {
  overflow-x: hidden;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
}

.nav-bar-blocks {
  background-color: #fff;
}

div {
  display: block;
}

@media only screen and (min-width: 48.0625em) {
.nav-bar-container._main {
    padding-bottom: 5px;
}
}

.nav-bar-container._main {
  background: #f5f5f5;
  transition: none;
}

.nav-bar {
  display: flex;
  align-items: center;
  color: #3e3e3e;
  position: relative;
  height: 100%;
}

@media only screen and (min-width: 26.625em) {
.vp {
    padding: 0 1em;
}
}
.vp {
    position: relative;
    margin: 10;
    padding: 0 .5em;
    max-width: 90em;
}

/* .context_menu.place-home {
    padding: .5em 0 .5em 0;
} */
.context_menu {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.context_menu.place-home .context_menu-list {
  display: flex;
  
  align-items: flex-end;
  justify-content: normal;
  font-weight: 700;
}
.context_menu-list {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  height: 2em;
  flex: 1;
  flex-direction: row;
  align-self: end;
  align-items: center;
  justify-content: flex-start;
}

ol, ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.context_menu.place-home .context_menu-item {
  padding: 0 1em;
  border-right: solid 1px #242424;
  margin: 0;
  font-weight: 700;
}

.context_menu.place-home .context_menu-item-last {
  padding: 0 1em;
 
  margin: 0;
  font-weight: 700;
}
.context_menu-item, .context_menu-item-last {
  font: normal 13px/24px ECI;
  color: #242424;
  font-weight: 700;
  letter-spacing: 1.5px;
  user-select: none;
  padding-left: 1em;
  padding-right: 1em;
}

.context_menu.place-home .context_menu-item a, .context_menu-item-last a, .context_menu.place-home .context_menu-item span, .context_menu-item-last span {
  font-weight: 700;
}
.context_menu-item a, .context_menu-item-last a, .context_menu-item span, .context_menu-item-last span {
  user-select: inherit;
  font: normal 13px/24px ECI;
  color: #242424;
  text-decoration: none;
  font-weight: 700;
}

/* ----------------- */
/* HEADER RESPONSIVE */
/* ----------------- */

/* @import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Lato);
 */
/* body {
  min-width: 320px;
  margin: 3% 0 3% 0;
  padding: 0;

  background-color: #f3e8e5;

  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #846d63;
} */

/* p {
  line-height: 150%;
}

h1 {
  margin: 0;
  padding: 0;

  border-bottom: 5px solid #f3e8e5;

  font-family: 'Montserrat', sans-serif;
  color: #bb8f85;
}

a {
  text-decoration: none;
  color: #8b534c;
} */

/* #post-body {
  margin: 0 15% 0 15%;
  padding: 4%;

  border-bottom: 10px solid #bb8f85;
  background: #f9f7f7;

  text-align: justify;
}

#post-body img {
  max-width: 25%;
  min-width: 10%;
  margin: 2% 0 0 2%;

  border-radius: 100%;
} */

ul#menu-topo {
  margin: 0 auto;
  padding: 10px 0;

  list-style-type: none;

  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
}

ul#menu-topo li {
  display: inline;

  margin: 0;
}

ul#menu-topo li a {
  display: inline-block;

  margin-right: 10px;
  margin-left: 10px;
  padding: 4px 10px;

  text-decoration: none;
}

.nav-toggle {
  display: none;
}

@media screen and (max-width: 800px) {
  body {
    margin: 0;
  }
  #post-body {
    margin: 5%;
  }
  .nav-menu {
    box-sizing: border-box;
    width: 100%;
    padding: 12px;

    background-color: #8b534c;

    table-layout: fixed;
  }
  ul#menu-topo {
    display: none;

    width: 100%;
    margin: 0;
    padding: 0;

    background-color: #8b534c;

    table-layout: fixed;

    transition: all .3s ease-in;
  }
  ul#menu-topo li {
    display: block;

    border-bottom: 1px solid #9a6760;

    line-height: 3;
    color: white;
  }
  #menu-topo li a {
    color: white;
  }
  ul#menu-topo li.hide {
    display: none !important;
  }
  #menu-topo li:hover {
    border-bottom: 1px solid #c77336;
    background-color: #c76926;
  }
  /****TOGGLE****/
  .nav-toggle-label:before {
    color: white;

    content: '☰';
  }
  .nav-toggle:checked + ul#menu-topo {
    display: table;

    margin-left: 0;
  }
}

/* --------------------- */
/* FIN HEADER RESPONSIVE */
/* --------------------- */