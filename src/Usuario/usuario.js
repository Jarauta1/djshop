import './usuario.css';
import {useState, useEffect} from "react"
import {BrowswerRouter, Route, Link,Redirect} from "react-router-dom"
import logo from "../Imagenes/logo.png"
import foto from "../Imagenes/foto.png"



// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";


function Usuario(props) {
  
    console.log(props)
    let [edad,setEdad] = useState(props.edad)
    let [usuario,setUsuario] = useState(props.usuario)
    let [rango,setRango] = useState(props.rango)
    let [menu,setMenu] = useState("totales")
    let [nombreUsuario,setNombreUsuario] = useState(props.nombre)
    let [diaUsuario,setDiaUsuario] = useState(props.dia)
    let [mesUsuario,setMesUsuario] = useState(props.mes)
    let [anyoUsuario,setAnyoUsuario] = useState(props.anyo)
    let [apellido1Usuario,setApellido1Usuario] = useState(props.apellido1)
    let [apellido2Usuario,setApellido2Usuario] = useState(props.apellido2)
    let [nombre,setNombre] = useState("")
    let [apellido,setApellido] = useState("")
    let [datos,setDatos] = useState({})
    let rangoWeb = rango.toUpperCase()

    let [vistas,setVistas] = useState([])
    let [cesta,setCesta] =useState([])
    let [compras,setCompras] = useState([])
    let [usuarios,setUsuarios] = useState([])

    let [nombrePerfil,setNombrePerfil] = useState(datos.usuario)
    let [nombrePerfilEditado,setNombrePerfilEditado] = useState("")
    let [nombreServer, setNombreServer] = useState("")

    let [diaPerfil,setDiaPerfil] = useState(datos.dia)
    let [diaPerfilEditado,setDiaPerfilEditado] = useState("")
    let [diaServer, setDiaServer] = useState("")

    let [mesPerfil,setMesPerfil] = useState(datos.mes)
    let [mesPerfilEditado,setMesPerfilEditado] = useState("")
    let [mesServer, setMesServer] = useState("")

    let [anyoPerfil,setAnyoPerfil] = useState(datos.anyo)
    let [anyoPerfilEditado,setAnyoPerfilEditado] = useState("")
    let [anyoServer, setAnyoServer] = useState("")

    let [apellido1Perfil,setApellido1Perfil] = useState(datos.apellido1)
    let [apellido1PerfilEditado,setApellido1PerfilEditado] = useState("")
    let [apellido1Server, setApellido1Server] = useState("")

    let [apellido2Perfil,setApellido2Perfil] = useState(datos.apellido2)
    let [apellido2PerfilEditado,setApellido2PerfilEditado] = useState("")
    let [apellido2Server, setApellido2Server] = useState("")
    
    /* --------------------------------------------------------------------------------------------------------- */
/*       let [opcion,setOpcion] = useState(false)
    let [color,setColor] = useState("#4255d3")
    let [texto,setTexto] = useState("User")
    let [num,setNum] = useState(1)
    
    useEffect(function(){
      if (opcion) {
        setColor("#4255d3")
        setTexto("admin")
        
      } else {
        
        setColor("#9e5924")
        setTexto("user")
      }
      
      
    },[num])
    
    
      function cambiarAdmin(e) {
        setMenu(e.target.checked)
        console.log(e.target.checked)
        setNum(num+1)
      }  */
      let color = "#4255d3"
      let texto = "User"
     /*  document.getElementById("spanAdmin").style.backgroundColor = color
      document.getElementById("spanAdmin").innerHTML = texto */
/* --------------------------------------------------------------------------------------------------------- */
    function actualizar() {
    /*  setNombrePerfil(nombrePerfilEditado) */
     console.log(nombrePerfilEditado)
      server(nombrePerfilEditado,diaPerfilEditado,mesPerfilEditado,anyoPerfilEditado,apellido1PerfilEditado,apellido2PerfilEditado)
    }

  function server(nombre,dia,mes,anyo,apellido1,apellido2) {
    console.log(nombre)
    if (nombre.length == 0) {
      setNombreServer(usuario)
    } else {
      setNombreServer(nombre)
    }
    if (dia.length == 0) {
      setDiaServer(datos.dia)
    } else {
      setDiaServer(dia)
    }
    if (mes.length == 0) {
      setMesServer(datos.mes)
    } else {
      setMesServer(mes)
    }
    if (anyo.length == 0) {
      setAnyoServer(datos.anyo)
    } else {
      setAnyoServer(anyo)
    }
    if (apellido1.length == 0) {
      setApellido1Server(datos.apellido1)
    } else {
      setApellido1Server(apellido1)
    }
    if (apellido2.length == 0) {
      setApellido2Server(datos.apellido2)
    } else {
      setApellido2Server(apellido2)
    }




      fetch("http://localhost:3000/usuarios/editar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre: nombre, mail:usuario}),
            }).then((res)=>res.json()).then((res)=>{
               console.log(res)
               setDatos(res.datos[0])
               setNombre(res.datos[0].usuario)
               setApellido(res.datos[0].apellido1)
                     
                
            })
    }

    function cambiarNombrePerfil(e){
      setNombrePerfilEditado(e.target.value)
      console.log(e.target.value)
    }
    function cambiarDiaPerfil(e){
      setDiaPerfilEditado(e.target.value)
      console.log(e.target.value)
    }
    function cambiarMesPerfil(e){
      setMesPerfilEditado(e.target.value)
      console.log(e.target.value)
    }
    function cambiarAnyoPerfil(e){
      setAnyoPerfilEditado(e.target.value)
      console.log(e.target.value)
    }
    function cambiarApellido1Perfil(e){
      setApellido1PerfilEditado(e.target.value)
      console.log(e.target.value)
    }
    function cambiarApellido2Perfil(e){
      setApellido2PerfilEditado(e.target.value)
      console.log(e.target.value)
    }

    

    useEffect(function(){
  
        if (usuario !== "") {
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario}),
            }).then((res)=>res.json()).then((res)=>{
               console.log(res)
               setDatos(res.datos[0])
               setNombre(res.datos[0].usuario)
               setApellido(res.datos[0].apellido1)
                     
                
            })

        fetch("http://localhost:3000/graficas/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
            }).then((res)=>res.json()).then((res)=>{
               console.log(res)
                     
                
            })
          }
      },[usuario])


    const [bigChartData, setbigChartData] = useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  
  // chartExample1 and chartExample2 options
let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 27000,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };

  // chartExample30-70 options
let chart30 = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10000,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample1 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200,26214,23000,18561,13548,9246,13012,15364,10648,16248,23124,19248],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532,12214,10000,9561,8548,7246,6012,9364,6648,11248,16124,10248],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032,9214,8000,8561,8048,7246,5012,8364,5648,9248,17124,8248],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231,7225,6115,9813,13456,3648,7954,4397,6119,3249,15796,6453],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200,26214,23000,18561,13548,9246,13012,15364,10648,16248,23124,19248],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532,12214,10000,9561,8548,7246,6012,9364,6648,11248,16124,10248],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032,9214,8000,8561,8048,7246,5012,8364,5648,9248,17124,8248],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032,9214,8000,8561,8048,7246,5012,8364,5648,9248,17124,8248],
          },
        ],
      };
    },
    options: chart1_2_options,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample60 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/4,26214/4,23000/4,18561/4,13548/4,9246/4,13012/4,15364/4,10648/4,16248/4,23124/4,19248/4],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/4,12214/4,10000/4,9561/4,8548/4,7246/4,6012/4,9364/4,6648/4,11248/4,16124/4,10248/4],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231/4,7225/4,6115/4,9813/4,13456/4,3648/4,7954/4,4397/4,6119/4,3249/4,15796/4,6453/4],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/4,26214/4,23000/4,18561/4,13548/4,9246/4,13012/4,15364/4,10648/4,16248/4,23124/4,19248/4],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/4,12214/4,10000/4,9561/4,8548/4,7246/4,6012/4,9364/4,6648/4,11248/4,16124/4,10248/4],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },
        ],
      };
    },
    options: chart30,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample40 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/4,26214/4,23000/4,18561/4,13548/4,9246/4,13012/4,15364/4,10648/4,16248/4,23124/4,19248/4],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/4,12214/4,10000/4,9561/4,8548/4,7246/4,6012/4,9364/4,6648/4,11248/4,16124/4,10248/4],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231/4,7225/4,6115/4,9813/4,13456/4,3648/4,7954/4,4397/4,6119/4,3249/4,15796/4,6453/4],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/4,26214/4,23000/4,18561/4,13548/4,9246/4,13012/4,15364/4,10648/4,16248/4,23124/4,19248/4],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/4,12214/4,10000/4,9561/4,8548/4,7246/4,6012/4,9364/4,6648/4,11248/4,16124/4,10248/4],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/4,9214/4,8000/4,8561/4,8048/4,7246/4,5012/4,8364/4,5648/4,9248/4,17124/4,8248/4],
          },
        ],
      };
    },
    options: chart30,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample70 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231/5,7225/5,6115/5,9813/5,13456/5,3648/5,7954/5,4397/5,6119/5,3249/5,15796/5,6453/5],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    options: chart30,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample50 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231/5,7225/5,6115/5,9813/5,13456/5,3648/5,7954/5,4397/5,6119/5,3249/5,15796/5,6453/5],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    options: chart30,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample30 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    data4: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeWhite = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeWhite.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeWhite.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeWhite.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeWhite,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [8231/5,7225/5,6115/5,9813/5,13456/5,3648/5,7954/5,4397/5,6119/5,3249/5,15796/5,6453/5],
          },
        ],
      };
    },
    data5: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: [
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          "Enero",
          "Febrero",
        ],
        datasets: [
          {
            label: "Vistas",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [15200/5,26214/5,23000/5,18561/5,13548/5,9246/5,13012/5,15364/5,10648/5,16248/5,23124/5,19248/5],
          },
          {
            label: "Añadidas a la cesta",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6532/5,12214/5,10000/5,9561/5,8548/5,7246/5,6012/5,9364/5,6648/5,11248/5,16124/5,10248/5],
          },
          {
            label: "Favoritas",
            fill: true,
            backgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d34242",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d34242",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },{
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f5f5f5",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f5f5f5",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [6032/5,9214/5,8000/5,8561/5,8048/5,7246/5,5012/5,8364/5,5648/5,9248/5,17124/5,8248/5],
          },
        ],
      };
    },
    options: chart30,
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample2 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["JUL", "AGO", "SEP", "OCT", "NOV", "DIC"],
        datasets: [
          {
            label: "Metros/Segundo",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [1,2,3,4,5,6],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
  
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 5,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
  
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample20 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [10,14,8,32,36],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 50,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample3 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [523+100,536,634,736,708],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 800,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample32 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["My beard, my rules", "Mandala", "ElepHand", "Pandastic", "Geometric Bear"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [623/5,100/5,536/5,634/5,736/5,708/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample42 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [623/4,536/4,634/4,736/4,708/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample52 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [623/5,536/5,634/5,736/5,708/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample62 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [623/4,536/4,634/4,736/4,708/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample72 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Visitadas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            pointHoverBackgroundColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [623/5,536/5,634/5,736/5,708/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample5 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532,403,618,746,612],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 800,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample33 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Panda", "Mandala", "Movember", "My beard, my rules", "ElepHand"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532/4,403/4,618/4,746/4,612/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample43 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532/5,403/5,618/5,746/5,612/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample53 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532/4,403/4,618/4,746/4,612/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample63 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532/5,403/5,618/5,746/5,612/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample73 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: gradientStrokeRed,
            hoverBackgroundColor: gradientStrokeRed,
            borderColor: "#d34242",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [532/4,403/4,618/4,746/4,612/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample6 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597,432,369,531,593],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 800,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample34 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Movember", "ButterFlower", "Deer", "Frida BB", "FlowerSkull"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597/10,432/10,369/10,531/10,593/10],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample54 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597/5,432/5,369/5,531/5,593/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample74 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597/5,432/5,369/5,531/5,593/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample64 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597/4,432/4,369/4,531/4,593/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample44 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "En cesta",
            fill: true,
            backgroundColor: gradientStrokePurple,
            hoverBackgroundColor: gradientStrokePurple,
            borderColor: "#f5f5f5",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [597/4,432/4,369/4,531/4,593/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample7 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493,351,296,501,456],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 800,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample35 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["FlowerSkull", "Deer", "Geometric Bear", "Frida BB", "Panda"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493/4,351/4,296/4,501/4,456/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample55 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493/4,351/4,296/4,501/4,456/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample75 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493/4,351/4,296/4,501/4,456/4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample45 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493/5,351/5,296/5,501/5,456/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample65 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: ["Camisetas", "Comics", "Libros", "Peliculas", "Zapatillas"],
        datasets: [
          {
            label: "Compradas",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [493/5,351/5,296/5,501/5,456/5],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 300,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  const chartExample4 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
      
      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors
      
      return {
        labels: ["JUL", "AGO", "SEP", "OCT", "NOV", "DIC"],
        datasets: [
          {
            label: "Metros",
            fill: true,
            backgroundColor: gradientStrokeGreen,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#00d6b4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [1,2,3,4,5,6],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
        
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    },
  };
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample15 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65", "+65"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [26,19,21,19,15],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  let chartExample16 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "Favoritos",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [10,14,8,32,36],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################

  let chartExample31 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "%",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [32,46,11,8,3],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################

  let chartExample41 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "%",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [54,38,5,2,1],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################

  let chartExample51 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "%",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [12,31,39,14,4],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################

  let chartExample61 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "%",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [29,26,34,9,2],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
   // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################

  let chartExample71 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStrokeRed = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokeRed.addColorStop(1, "rgba(176,72,72,0.1)");
      gradientStrokeRed.addColorStop(0.4, "rgba(176,72,72,0.0)");
      gradientStrokeRed.addColorStop(0, "rgba(169,52,52,0)"); //purple colors

      let gradientStrokePurple = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStrokePurple.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStrokePurple.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStrokePurple.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      let gradientStrokeGreen = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeGreen.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStrokeGreen.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStrokeGreen.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStrokeYellow = ctx.createLinearGradient(0, 230, 0, 50);
      
      gradientStrokeYellow.addColorStop(1, "rgba(166, 176, 72,0.15)");
      gradientStrokeYellow.addColorStop(0.4, "rgba(166, 176, 72,0.0)"); //green colors
      gradientStrokeYellow.addColorStop(0, "rgba(166, 176, 72,0)"); //green colors
  
      return {
        labels: ["16-30", "31-40", "41-50", "51-65","+65"],
        datasets: [
          {
            label: "%",
            fill: true,
            backgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            hoverBackgroundColor: [gradientStrokeRed,gradientStrokePurple,gradientStroke,gradientStrokeGreen, gradientStrokeYellow],
            borderColor: ["#d34242","#f5f5f5","#1f8ef1","#00d6b4","#e3f11f"],
          /*   borderWidth: 2, */
           /*  borderDash: [], */
         /*    borderDashOffset: 0.0, */
            data: [46,38,8,6,2],
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
       /*  yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
       /*  xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ], */
      },
    },
  };// #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  // #########################################
  // // // used inside src/views/Dashboard.js
  // #########################################
  function totales(){
    setMenu("totales")
    console.log("totales")
  }  
  function camisetas(){
    setMenu("camisetas")
    console.log("camisetas")
  }  
  function comics(){
    setMenu("comics")
  }  
  function libros(){
    setMenu("libros")
  }  
  function peliculas(){
    setMenu("peliculas")
  }  
  function zapatillas(){
    setMenu("zapatillas")
  }  
  function tabla(){
    setMenu("usuarios")
  }  


    if (rango == "usuario") {
        return(<>
        
  <div class="pf-sect-form-tabs">
    <section id="TabSectionInfoPersonal" class="pf-sect-tab pf-active" data-type="tab-section">
      <h1 class="pf-title-sect-tab">Información Personal</h1>
      <div class="pf-cnt-form">     
        <div class="pf-row">
          <div class="pf-w-50">
            <div class="pf-form-group pf-icon">
              <label for="" class="pf-lbl-title">Email</label>
              <input type="text"  class="pf-inp-control" value={usuario} disabled/>
              <i class="fa fa-key"></i>                            
            </div>                    
          </div>
        </div>         
        <div class="pf-row">        
          <div class="pf-w-50">          
            <div class="pf-form-group pf-icon">
              <label for="" class="pf-lbl-title">Nombre</label>
              <input type="text"  class="pf-inp-control" onChange={cambiarNombrePerfil} placeholder={nombreUsuario}/>
              <i class="fa fa-user"></i>
            </div>    
          </div>            
          <div class="pf-w-10">         
            <div class="pf-form-group pf-icon">
            <label for="" class="pf-lbl-title">Día</label>
            <input type="text"  class="pf-inp-control" onChange={cambiarDiaPerfil} placeholder={diaUsuario}/>
              <i class="fa fa-user"></i>              
          </div>       
          </div>  
          <div class="pf-w-10">         
            <div class="pf-form-group pf-icon">
            <label for="" class="pf-lbl-title">Mes</label>
            <input type="text"  class="pf-inp-control" onChange={cambiarMesPerfil} placeholder={mesUsuario}/>
              <i class="fa fa-user"></i>              
          </div>       
          </div>  
          <div class="pf-w-10">         
            <div class="pf-form-group pf-icon">
            <label for="" class="pf-lbl-title">Año</label>
            <input type="text"  class="pf-inp-control" onChange={cambiarAnyoPerfil} placeholder={anyoUsuario}/>
              <i class="fa fa-user"></i>              
          </div>       
          </div>  
        </div> 
        <div class="pf-row">
          <div class="pf-w-50">
            <div class="pf-form-group pf-icon">
              <label for="" class="pf-lbl-title">Primer Apellido</label>
              <input type="text"  class="pf-inp-control" onChange={cambiarApellido1Perfil} placeholder={apellido1Usuario}/>
              <i class="fa fa-user"></i>              
            </div>        
          </div>            
          <div class="pf-w-50">           
            <div class="pf-form-group pf-icon">
              <label for="" class="pf-lbl-title">Segundo apellido</label>
              <input type="text"  class="pf-inp-control" onChange={cambiarApellido2Perfil} placeholder={apellido2Usuario}/>
              <i class="fa fa-user"></i>              
            </div>                            
          </div>
          <div className="pf-row">
            <div className="pf-w-100">
              <button onClick={actualizar}>Actualizar</button>
            </div>
          </div>  
        </div>
      </div>
    </section>
    
   
  </div>

        </>)
    } else if (rango == "admin") {

        if (menu == "totales") {
          return(<div className="body-dashboard">
          <div class="wrapper-dashboard">
              <div class="left-side">
                {/* <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="active">
                  <path d="M197.3 170.7h-160A37.4 37.4 0 010 133.3v-96A37.4 37.4 0 0137.3 0h160a37.4 37.4 0 0137.4 37.3v96a37.4 37.4 0 01-37.4 37.4zM37.3 32c-3 0-5.3 2.4-5.3 5.3v96c0 3 2.4 5.4 5.3 5.4h160c3 0 5.4-2.4 5.4-5.4v-96c0-3-2.4-5.3-5.4-5.3zm0 0M197.3 512h-160A37.4 37.4 0 010 474.7v-224a37.4 37.4 0 0137.3-37.4h160a37.4 37.4 0 0137.4 37.4v224a37.4 37.4 0 01-37.4 37.3zm-160-266.7c-3 0-5.3 2.4-5.3 5.4v224c0 3 2.4 5.3 5.3 5.3h160c3 0 5.4-2.4 5.4-5.3v-224c0-3-2.4-5.4-5.4-5.4zm0 0M474.7 512h-160a37.4 37.4 0 01-37.4-37.3v-96a37.4 37.4 0 0137.4-37.4h160a37.4 37.4 0 0137.3 37.4v96a37.4 37.4 0 01-37.3 37.3zm-160-138.7c-3 0-5.4 2.4-5.4 5.4v96c0 3 2.4 5.3 5.4 5.3h160c3 0 5.3-2.4 5.3-5.3v-96c0-3-2.4-5.4-5.3-5.4zm0 0M474.7 298.7h-160a37.4 37.4 0 01-37.4-37.4v-224A37.4 37.4 0 01314.7 0h160A37.4 37.4 0 01512 37.3v224a37.4 37.4 0 01-37.3 37.4zM314.7 32c-3 0-5.4 2.4-5.4 5.3v224c0 3 2.4 5.4 5.4 5.4h160c3 0 5.3-2.4 5.3-5.4v-224c0-3-2.4-5.3-5.3-5.3zm0 0" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <svg viewBox="0 1 511 512" fill="currentColor">
                  <path d="M498.7 222.7L289.8 13.8a46.8 46.8 0 00-66.7 0L14.4 222.6l-.2.2A47.2 47.2 0 0047 303h8.3v153.7a55.2 55.2 0 0055.2 55.2h81.7a15 15 0 0015-15V376.5a25.2 25.2 0 0125.2-25.2h48.2a25.2 25.2 0 0125.1 25.2V497a15 15 0 0015 15h81.8a55.2 55.2 0 0055.1-55.2V303.1h7.7a47.2 47.2 0 0033.4-80.4zm-21.2 45.4a17 17 0 01-12.2 5h-22.7a15 15 0 00-15 15v168.7a25.2 25.2 0 01-25.1 25.2h-66.8V376.5a55.2 55.2 0 00-55.1-55.2h-48.2a55.2 55.2 0 00-55.2 55.2V482h-66.7a25.2 25.2 0 01-25.2-25.2V288.1a15 15 0 00-15-15h-23A17.2 17.2 0 0135.5 244L244.4 35a17 17 0 0124.2 0l208.8 208.8v.1a17.2 17.2 0 010 24.2zm0 0" />
                </svg>
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M467 76H45a45 45 0 00-45 45v270a45 45 0 0045 45h422a45 45 0 0045-45V121a45 45 0 00-45-45zm-6.3 30L287.8 278a44.7 44.7 0 01-63.6 0L51.3 106h409.4zM30 384.9V127l129.6 129L30 384.9zM51.3 406L181 277.2l22 22c14.2 14.1 33 22 53.1 22 20 0 38.9-7.9 53-22l22-22L460.8 406H51.3zM482 384.9L352.4 256 482 127V385z" />
                </svg>
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z" />
                  <path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z" />
                </svg>
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M255.2 468.6H63.8a21.3 21.3 0 01-21.3-21.2V64.6c0-11.7 9.6-21.2 21.3-21.2h191.4a21.2 21.2 0 100-42.5H63.8A63.9 63.9 0 000 64.6v382.8A63.9 63.9 0 0063.8 511H255a21.2 21.2 0 100-42.5z" />
                  <path d="M505.7 240.9L376.4 113.3a21.3 21.3 0 10-29.9 30.3l92.4 91.1H191.4a21.2 21.2 0 100 42.6h247.5l-92.4 91.1a21.3 21.3 0 1029.9 30.3l129.3-127.6a21.3 21.3 0 000-30.2z" />
                </svg> */}
              </div>
              <div class="main-container">
                <div class="header-dashboard">
                <div class="logo-dashboard"><span class="logo-det"><img classname="img-usuario" src={logo} height="20" alt=""/></span></div>
                  <a class="header-link" onClick={totales}>
                    <div className="material-icons header-admin">
                     <a>analytics</a>
                    </div>
                    Totales
                  </a>
                  <a class="header-link" onClick={camisetas}>
                  <div className="header-admin">
                  <i className="fa fa-tshirt camiseta-usuario"></i>
                    </div>
                    Camisetas
                  </a>
                  <a class="header-link" onClick={comics}>
                  <div className="material-icons header-admin">
                     <a>view_quilt</a>
                    </div>
                    Comics
                  </a>
                  <a class="header-link" onClick={libros}>
                  <div className="material-icons header-admin">
                     <a>auto_stories</a>
                    </div>
                    Libros
                  </a>
                  <a class="header-link" onClick={peliculas}>
                  <div className="material-icons header-admin">
                     <a>theaters</a>
                    </div>
                    Peliculas
                  </a>
                  <a class="header-link" onClick={zapatillas}>
                  <div className="header-admin">
                    <i className="fa fa-shoe-prints camiseta-usuario"></i>
                    </div>
                    Zapatillas
                  </a>
                  <a class="header-link" onClick={tabla}>
                  <div className="material-icons header-admin">
                     <a>admin_panel_settings</a>
                    </div>
                    Usuarios
                  </a>
                
              </div>
               
  
                <div class="user-box first-box">
                  <div class="activity card">
                      <Row>
                          <Col xs="12">
                              <div /* className="card-chart" */>
                                  <CardHeader>
                                      <Row>
                                          <Col className="text-left" sm="6">
                                              <CardTitle tag="h2">{menu.toUpperCase()}</CardTitle>
                                              
                                          </Col>
                                          <Col sm="6">
                                              <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                                                  <Button tag="label" className={classNames("btn-simple izquierda", {active: bigChartData === "data1",})} color="info" id="0" size="sm" onClick={() => setBgChartData("data1")}>
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Vistas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data4", })} onClick={() => setBgChartData("data4")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Favoritas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data2", })} onClick={() => setBgChartData("data2")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Cesta
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data3", })} onClick={() => setBgChartData("data3")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Compras
                                                      </span>
                                                      
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple derecha", { active: bigChartData === "data5", })} onClick={() => setBgChartData("data5")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Todas
                                                      </span>
                                                      
                                                  </Button>
                                              </ButtonGroup>
                                          </Col>
                                      </Row>
                                  </CardHeader>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                          <Line data={chartExample1[bigChartData]} options={chartExample1.options} />
                                     {/*  </div> */}
                                  </CardBody>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                         {/*  <Line data={chartExample5[bigChartData]} options={chartExample5.options} /> */}
                                     {/*  </div> */}
                                  </CardBody>
                              </div>
                          </Col>
                      </Row>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="discount card">
                    <div class="title">Mejor producto</div>
                    <div class="discount-wrapper">
                      <div class="discount-info">
                        <div class="subtitle">Mayor beneficio en un día:</div>
                        <div class="subtitle-count">4.995,92 €</div>
                        <div class="subtitle">Venta en promoción:</div>
                        <div class="subtitle-count dist">628,74 € (126 ventas)</div>
                      </div>
                      <div class="discount-chart">
                        <div class="circle">
                          <div class="pie">
                            <svg>
                              <circle cx="60" cy="60" r="50"></circle>
                            </svg>
                          </div>
                          <div class="counter">71 %</div>
                        </div>
                      </div>
                    </div>
                    <div class="discount-profile">
                      <span class="by">Articulo:</span>
                      <img class="discount-img img-usuario" src="https://image.tmdb.org/t/p/w500/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg" alt=""/>
                      <div class="discount-detail">
                        <div class="discount-name">Titulo: Wonder Woman 1984</div>
                        <div class="discount-type">Sección: Peliculas</div>
                      </div>
                    </div>
                   
                  </div>
                 
                  <div class="account-wrapper">
                    <div class="account-profile">
                      <img className="img-usuario" src={foto} alt=""/>
                      <div class="blob-wrap">
                        <div class="blob"></div>
                        <div class="blob"></div>
                        <div class="blob"></div>
                      </div>
                      <div class="account-name">{nombre} {apellido}</div>
                      <div class="account-title">{rangoWeb}</div>
                    </div>
                    
                  </div>
                </div>
                <div class="user-box third-box">
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Visitadas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample3.data} options={chartExample3.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Favoritos</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample5.data} options={chartExample5.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">En cesta</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample6.data} options={chartExample6.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample7.data} options={chartExample7.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  
                 


                 
                </div>
                






                <div class="user-box second-box">
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">% Ventas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample20.data} options={chartExample20.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Rango edades</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Pie data={chartExample15.data} options={chartExample15.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
            
                  <div class="card transection">
                    <div class="transection-header">
                      <div class="head">Transacciones</div>
                      
                    </div>
                    <div class="credit-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.351 469.351" style={{backgroundColor: "#0365b3"}}>
                      <path xmlns="http://www.w3.org/2000/svg" d="M356.626 85.086a37.887 37.887 0 00-38.763-8.277 10.668 10.668 0 00-7.168 8.533l-2.987 20.523c-4.529 30.998-31.052 54.019-62.379 54.144h-42.667a10.666 10.666 0 00-10.347 8.085l-32 128a10.667 10.667 0 0010.346 13.248h53.333a10.666 10.666 0 0010.347-8.085l19.307-77.248h41.6c31.934.106 59.792-21.66 67.413-52.672l7.872-31.552a56.099 56.099 0 00-13.907-54.699z" fill="#e6f0f9" data-original="#03a9f4"/>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.664 437.342C4.773 437.341-.002 432.564 0 426.673c0-.869.107-1.735.317-2.578l10.667-42.453v-.448l10.667-42.432a10.666 10.666 0 0110.347-8.085h27.136c14.728-.003 26.669 11.933 26.673 26.661 0 2.181-.267 4.354-.795 6.47l-2.667 10.667c-2.967 11.875-13.637 20.205-25.877 20.203H29.672l-8.64 34.581a10.667 10.667 0 01-10.368 8.083zm24.341-64h21.461a5.335 5.335 0 005.163-4.053l2.667-10.667a5.311 5.311 0 00-5.163-6.634H40.338l-5.333 21.354zM124.733 437.342h-15.189c-16.33.004-29.571-13.231-29.575-29.561a29.56 29.56 0 01.882-7.175l1.408-5.675c3.157-12.736 14.612-21.662 27.733-21.611h15.189c16.33.028 29.545 13.289 29.517 29.619a29.561 29.561 0 01-.887 7.138l-1.408 5.675c-3.16 12.705-14.579 21.614-27.67 21.59zm-23.168-31.552a8.234 8.234 0 007.979 10.219h15.189a7.147 7.147 0 006.955-5.419l1.408-5.675a8.234 8.234 0 00-7.979-10.219h-15.189a7.147 7.147 0 00-6.955 5.419l-1.408 5.675z" fill="#fff" data-original="#283593"/>
                        <path d="M138.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.667c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-10.667 42.667a10.666 10.666 0 01-10.368 8.085z" fill="#fff" data-original="#283593"/>
                      </g>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M266.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.453v-.448l10.667-42.432a10.666 10.666 0 0110.347-8.085h27.136c14.728-.003 26.669 11.933 26.673 26.661 0 2.181-.267 4.354-.795 6.47l-2.667 10.667c-2.967 11.875-13.637 20.205-25.877 20.203h-26.795l-8.64 34.581a10.669 10.669 0 01-10.369 8.084zm24.341-64h21.483a5.335 5.335 0 005.163-4.053l2.667-10.667a5.312 5.312 0 00-5.163-6.634h-18.816l-5.334 21.354zM380.733 437.342h-15.189c-16.33.004-29.571-13.231-29.575-29.561a29.56 29.56 0 01.882-7.175l1.408-5.675c3.157-12.736 14.612-21.662 27.733-21.611h15.189c16.33-.004 29.571 13.231 29.575 29.561a29.56 29.56 0 01-.882 7.175l-1.408 5.675c-3.157 12.736-14.612 21.662-27.733 21.611zm-23.168-31.552a8.234 8.234 0 007.979 10.219h15.189a7.147 7.147 0 006.955-5.419l1.408-5.675a8.234 8.234 0 00-7.979-10.219h-15.189a7.147 7.147 0 00-6.955 5.419l-1.408 5.675z" fill="#e6f0f9" data-original="#03a9f4"/>
                        <path d="M394.664 437.342a10.667 10.667 0 01-10.347-13.248l10.667-42.667c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-10.667 42.667a10.666 10.666 0 01-10.368 8.085z" fill="#e6f0f9" data-original="#03a9f4"/>
                      </g>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M202.664 426.676a10.668 10.668 0 01-8.875-4.757l-21.333-32c-3.27-4.901-1.947-11.525 2.955-14.795s11.525-1.947 14.795 2.955l21.333 32c3.275 4.897 1.961 11.521-2.935 14.797a10.681 10.681 0 01-5.94 1.8z" fill="#fff" data-original="#283593"/>
                        <path d="M181.33 458.676c-5.891-.002-10.665-4.78-10.663-10.671a10.667 10.667 0 012.471-6.823l53.333-64c3.776-4.524 10.505-5.131 15.029-1.355 4.524 3.776 5.131 10.505 1.355 15.029l-53.333 64a10.663 10.663 0 01-8.192 3.82z" fill="#fff" data-original="#283593"/>
                      </g>
                      <path xmlns="http://www.w3.org/2000/svg" d="M437.33 437.342a10.667 10.667 0 01-10.347-13.248l21.333-85.333c1.426-5.72 7.218-9.202 12.939-7.776 5.72 1.426 9.202 7.218 7.776 12.939l-21.333 85.333a10.665 10.665 0 01-10.368 8.085z" fill="#e6f0f9" data-original="#03a9f4"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M321.405 29.129a53.908 53.908 0 00-40.661-18.453H159.997a10.666 10.666 0 00-10.496 8.768L106.834 254.11c-1.049 5.797 2.801 11.346 8.598 12.395.626.113 1.262.17 1.898.17h64a10.666 10.666 0 0010.347-8.085l19.328-77.248h34.325c41.958-.165 77.478-31.012 83.52-72.533l5.333-36.459a54.332 54.332 0 00-12.778-43.221z" fill="#fff" data-original="#283593"/>
                    </svg> 
                      <div class="credit-name">
                        <div class="credit-type">Paypal</div>
                        <div class="credit-status">Pagos recibidos</div>
                      </div>
                      <div class="credit-money is-active">5.969 €</div>
                    </div>
                    <div class="credit-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.764 291.764" style={{backgroundColor: "#292c6d"}}>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path d="M119.259 100.23l-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z" fill="#fff" data-original="#2394bc"/>
                          <path d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z" fill="#fffffe" data-original="#efc75e"/>
                        </g>
                      </svg>
                      <div class="credit-name">
                        <div class="credit-type">Visa</div>
                        <div class="credit-status">Pagos recibidos</div>
                      </div>
                      <div class="credit-money is-active">3.945 €</div>
                    </div>
                    <div class="credit-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{backgroundColor: "#1f2755"}}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M488.727 66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273h465.454c12.853 0 23.273-10.42 23.273-23.273V89.767c0-12.853-10.42-23.273-23.273-23.273z" fill="#1f2755" data-original="#5286f9"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M273.776 189.773c5.115 5.86 9.57 12.31 13.236 19.242 7.427 14.041 11.655 30.026 11.655 46.986s-4.228 32.943-11.655 46.986c-3.666 6.932-8.121 13.38-13.236 19.24-5.264 6.031-11.23 11.427-17.776 16.069 16.454 11.664 36.523 18.553 58.182 18.553 55.608 0 100.849-45.241 100.849-100.848S369.79 155.152 314.182 155.152c-21.659 0-41.728 6.886-58.182 18.553 6.544 4.642 12.51 10.039 17.776 16.068z" fill="#f0425c" data-original="#ffb655"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M287.012 209.016c-3.666-6.934-8.121-13.382-13.236-19.242-5.267-6.031-11.231-11.425-17.776-16.066-16.452-11.667-36.523-18.553-58.182-18.553-55.608 0-100.848 45.241-100.848 100.848s45.241 100.848 100.848 100.848c21.659 0 41.73-6.887 58.182-18.553 6.546-4.641 12.51-10.038 17.776-16.067 5.115-5.86 9.57-12.31 13.236-19.24 7.427-14.043 11.655-30.028 11.655-46.986 0-16.964-4.228-32.948-11.655-46.989z" fill="#ef8641" data-original="#d8143a"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M197.818 356.851c-55.608 0-100.848-45.241-100.848-100.848s45.241-100.848 100.848-100.848c21.659 0 41.728 6.886 58.182 18.553V66.494H23.273C10.42 66.494 0 76.914 0 89.767v332.466c0 12.853 10.42 23.273 23.273 23.273H256v-107.21c-16.454 11.666-36.523 18.555-58.182 18.555z" fill="#1f2755" data-original="#3d6deb"/>
                      </svg>
                      <div class="credit-name">
                        <div class="credit-type">MasterCard</div>
                        <div class="credit-status">Pagos recibidos</div>
                      </div>
                      <div class="credit-money is-active">2.99 €</div>
                    </div>
                    
                  </div>
                </div>
              
                <div className="user-box fourth-box">
                <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>euro</a>
                      </div>
                      Usuarios más rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                           
                            <th>Nombre</th>
                           <th></th>
                            <th>Apellidos</th>
                            <th></th>
                            <th>Edad</th>
                            <th></th>
                            <th>id</th>
                            <th></th>
                            <th>€</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            
                            <td>Sergio</td>
                            <th></th>
                            <td>Gimeno Orizo</td>
                            <th></th>
                            <td>34</td>
                            <th></th>
                            <td>sergiogo@gmail.com</td>
                            <th></th>
                            <td>546,15</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Laura</td>
                            <th></th>
                            <td>Valles Borque</td>
                            <th></th>
                            <td>43</td>
                            <th></th>
                            <td>lvalles@gmail.com</td>
                            <th></th>
                            <td>412,69</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Diego</td>
                            <th></th>
                            <td>Jarauta Ibáñez</td>
                            <th></th>
                            <td>34</td>
                            <th></th>
                            <td>diegojarauta8@gmail.com</td>
                            <th></th>
                            <td>364,90</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Ángeles</td>
                            <th></th>
                            <td>Hernandez Malo</td>
                            <th></th>
                            <td>53</td>
                            <th></th>
                            <td>angelines539@gmail.com</td>
                            <th></th>
                            <td>213,99</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Víctor</td>
                            <th></th>
                            <td>Campos Gracia</td>
                            <th></th>
                            <td>43</td>
                            <th></th>
                            <td>camgar@gmail.com</td>
                            <th></th>
                            <td>115,23</td>
                            
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                
                <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>thumb_down_alt</a>
                      </div>
                      Usuarios menos rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                           
                            <th>Nombre</th>
                           <th></th>
                            <th>Apellidos</th>
                            <th></th>
                            <th>Edad</th>
                            <th></th>
                            <th>id</th>
                            <th></th>
                            <th>€</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                            
                            <td>José</td>
                            <th></th>
                            <td>Fernandez Lucientes</td>
                            <th></th>
                            <td>53</td>
                            <th></th>
                            <td>jflucientes@gmail.com</td>
                            <th></th>
                            <td>16,99</td>
                            
                          </tr>
                          <tr>
                            
                            <td>María</td>
                            <th></th>
                            <td>Rojo Ullate</td>
                            <th></th>
                            <td>18</td>
                            <th></th>
                            <td>mariaru@gmail.com</td>
                            <th></th>
                            <td>23,98</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Jesús</td>
                            <th></th>
                            <td>Ibáñez Moreno</td>
                            <th></th>
                            <td>43</td>
                            <th></th>
                            <td>ibmojesus@gmail.com</td>
                            <th></th>
                            <td>36,86</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Elena</td>
                            <th></th>
                            <td>Chicón Lalzarra</td>
                            <th></th>
                            <td>57</td>
                            <th></th>
                            <td>echicon8@gmail.com</td>
                            <th></th>
                            <td>62,61</td>
                            
                          </tr>
                          <tr>
                            
                            <td>Eduardo</td>
                            <th></th>
                            <td>Peinado Bronchales
                            </td>
                            <th></th>
                            <td>38</td>
                            <th></th>
                            <td>epeinado@gmail.com</td>
                            <th></th>
                            <td>93,46</td>
                            
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                
                </div>

              </div>
            </div>
          </div>)
      
        } else if (menu == "camisetas") {
          return(<>
           <div className="body-dashboard">
          <div class="wrapper-dashboard">
              <div class="left-side">
              </div>
              <div class="main-container">
                <div class="header-dashboard">
                <div class="logo-dashboard"><span class="logo-det"><img classname="img-usuario" src={logo} height="20" alt=""/></span></div>
                  <a class="header-link" onClick={totales}>
                    <div className="material-icons header-admin">
                     <a>analytics</a>
                    </div>
                    Totales
                  </a>
                  <a class="header-link" onClick={camisetas}>
                  <div className="header-admin">
                  <i className="fa fa-tshirt camiseta-usuario"></i>
                    </div>
                    Camisetas
                  </a>
                  <a class="header-link" onClick={comics}>
                  <div className="material-icons header-admin">
                     <a>view_quilt</a>
                    </div>
                    Comics
                  </a>
                  <a class="header-link" onClick={libros}>
                  <div className="material-icons header-admin">
                     <a>auto_stories</a>
                    </div>
                    Libros
                  </a>
                  <a class="header-link" onClick={peliculas}>
                  <div className="material-icons header-admin">
                     <a>theaters</a>
                    </div>
                    Peliculas
                  </a>
                  <a class="header-link" onClick={zapatillas}>
                  <div className="header-admin">
                    <i className="fa fa-shoe-prints camiseta-usuario"></i>
                    </div>
                    Zapatillas
                  </a>
                  <a class="header-link" onClick={tabla}>
                  <div className="material-icons header-admin">
                     <a>admin_panel_settings</a>
                    </div>
                    Usuarios
                  </a>
                
              </div>
               
  
                <div class="user-box first-box">
                  <div class="activity card">
                      <Row>
                          <Col xs="12">
                              <div /* className="card-chart" */>
                                  <CardHeader>
                                      <Row>
                                          <Col className="text-left" sm="6">
                                              <CardTitle tag="h2">{menu.toUpperCase()}</CardTitle>
                                              
                                          </Col>
                                          <Col sm="6">
                                              <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                                                  <Button tag="label" className={classNames("btn-simple izquierda", {active: bigChartData === "data1",})} color="info" id="0" size="sm" onClick={() => setBgChartData("data1")}>
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Vistas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data4", })} onClick={() => setBgChartData("data4")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Favoritas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data2", })} onClick={() => setBgChartData("data2")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Cesta
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data3", })} onClick={() => setBgChartData("data3")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Compras
                                                      </span>
                                                      
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple derecha", { active: bigChartData === "data5", })} onClick={() => setBgChartData("data5")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Todas
                                                      </span>
                                                      
                                                  </Button>
                                              </ButtonGroup>
                                          </Col>
                                      </Row>
                                  </CardHeader>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                          <Line data={chartExample30[bigChartData]} options={chartExample30.options} />
                                     {/*  </div> */}
                                  </CardBody>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                         {/*  <Line data={chartExample5[bigChartData]} options={chartExample5.options} /> */}
                                     {/*  </div> */}
                                  </CardBody>
                              </div>
                          </Col>
                      </Row>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="discount card">
                    <div class="title">Mejor producto</div>
                    <div class="discount-wrapper">
                      <div class="discount-info">
                        <div class="subtitle">Mayor beneficio en un día:</div>
                        <div class="subtitle-count">4918,6 €</div>
                        <div class="subtitle">Venta en promoción:</div>
                        <div class="subtitle-count dist">2594.2 € (238 ventas)</div>
                      </div>
                      <div class="discount-chart">
                        <div class="circle">
                          <div class="pie">
                            <svg>
                              <circle cx="60" cy="60" r="50"></circle>
                            </svg>
                          </div>
                          <div class="counter">92%</div>
                        </div>
                      </div>
                    </div>
                    <div class="discount-profile">
                      <span class="by">Articulo:</span>
                      <img class="discount-img img-usuario" src="https://srv.latostadora.com/designall.dll/camiseta_my_beard_my_rules--i:135623264090401356232017092627;k:f09a67d2a2054313490c948435d692a2;b:f8f8f8;s:H_A27;f:f.jpg" alt=""/>
                      <div class="discount-detail">
                        <div class="discount-name">Titulo: My bear, my rules</div>
                        <div class="discount-type">Sección: Camisetas</div>
                      </div>
                    </div>
                   
                  </div>
                 
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">% Ventas por edades</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Pie data={chartExample31.data} options={chartExample31.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                </div>
                <div class="user-box third-box">
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Top compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample32.data} options={chartExample32.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Top favoritos</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample33.data} options={chartExample33.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Menos compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample34.data} options={chartExample34.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Menos % visitadas/compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample35.data} options={chartExample35.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  
                 


                 
                </div>
 
                <div class="user-box second-box">
                <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>done</a>
                      </div>
                      Más rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                            <th>Producto</th>
                            <th>ID</th>
                            <th>Comprado</th>
                            
                            <th>€</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>My beard, my rules</td>
                            <td>BB0001</td>
                            <td>1.896</td>
                            <td>7643,7</td>
                            
                          </tr>
                          <tr>
                            <td>My beard, my rules</td>
                            <td>BB0001</td>
                            <td>1.896</td>
                            <td>7643,7</td>
                            
                          </tr>
                          <tr>
                            <td>My beard, my rules</td>
                            <td>BB0001</td>
                            <td>1.896</td>
                            <td>7643,7</td>
                            
                          </tr>
                          <tr>
                            <td>My beard, my rules</td>
                            <td>BB0001</td>
                            <td>1.896</td>
                            <td>7643,7</td>
                            
                          </tr>
                          <tr>
                            <td>My beard, my rules</td>
                            <td>BB0001</td>
                            <td>1.896</td>
                            <td>7643,7</td>
                            
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>highlight_off</a>
                      </div>
                      Menos rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                            <th>Admin</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th></th>
                            <th>Edad</th>
                            <th>id</th>
                            <th>Cumpleaños</th>
                            <th></th>
                            <th></th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" id="row1" class="table-row" name="inputAdmin" /* onChange={cambiarAdmin} */ />
                              <div id="spanAdmin" style={{backgroundColor: {color}}}>{texto}</div>
                            </td>
                            <td>Diego</td>
                            <td>Jarauta</td>
                            <td>Ibáñez</td>
                            <td>34</td>
                            <td>diegojarauta8@gmail.com</td>
                            <td>23</td>
                            <td>8</td>
                            <td>1987</td>
                            <td>
                              <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row2" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Sergio</td>
                            <td>Campos</td>
                            <td>Corredera</td>
                            <td>35</td>
                            <td>scampos@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                              <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row3" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Jose</td>
                            <td>Fernandez</td>
                            <td>Lucientes</td>
                            <td>46</td>
                            <td>flucientes@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row4" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Victor</td>
                            <td>Gimeno</td>
                            <td>Garcia</td>
                            <td>22</td>
                            <td>vgimeno@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Ángeles</td>
                            <td>Malo</td>
                            <td>Vallespín</td>
                            <td>58</td>
                            <td>mvangeles@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                                
               
                
            
                 
                </div>
               
              </div>
            </div>
          </div>)
      
          </>)
    
        } else if (menu == "comics") {
          return(<>
           <div className="body-dashboard">
          <div class="wrapper-dashboard">
              <div class="left-side">
              </div>
              <div class="main-container">
                <div class="header-dashboard">
                <div class="logo-dashboard"><span class="logo-det"><img classname="img-usuario" src={logo} height="20" alt=""/></span></div>
                  <a class="header-link" onClick={totales}>
                    <div className="material-icons header-admin">
                     <a>analytics</a>
                    </div>
                    Totales
                  </a>
                  <a class="header-link" onClick={camisetas}>
                  <div className="header-admin">
                  <i className="fa fa-tshirt camiseta-usuario"></i>
                    </div>
                    Camisetas
                  </a>
                  <a class="header-link" onClick={comics}>
                  <div className="material-icons header-admin">
                     <a>view_quilt</a>
                    </div>
                    Comics
                  </a>
                  <a class="header-link" onClick={libros}>
                  <div className="material-icons header-admin">
                     <a>auto_stories</a>
                    </div>
                    Libros
                  </a>
                  <a class="header-link" onClick={peliculas}>
                  <div className="material-icons header-admin">
                     <a>theaters</a>
                    </div>
                    Peliculas
                  </a>
                  <a class="header-link" onClick={zapatillas}>
                  <div className="header-admin">
                    <i className="fa fa-shoe-prints camiseta-usuario"></i>
                    </div>
                    Zapatillas
                  </a>
                  <a class="header-link" onClick={tabla}>
                  <div className="material-icons header-admin">
                     <a>admin_panel_settings</a>
                    </div>
                    Usuarios
                  </a>
                
              </div>
               
  
                <div class="user-box first-box">
                  <div class="activity card">
                      <Row>
                          <Col xs="12">
                              <div /* className="card-chart" */>
                                  <CardHeader>
                                      <Row>
                                          <Col className="text-left" sm="6">
                                              <CardTitle tag="h2">{menu.toUpperCase()}</CardTitle>
                                              
                                          </Col>
                                          <Col sm="6">
                                              <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                                                  <Button tag="label" className={classNames("btn-simple izquierda", {active: bigChartData === "data1",})} color="info" id="0" size="sm" onClick={() => setBgChartData("data1")}>
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Vistas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data4", })} onClick={() => setBgChartData("data4")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Favoritas
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data2", })} onClick={() => setBgChartData("data2")}>
                                                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Cesta
                                                      </span>
                                                     
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data3", })} onClick={() => setBgChartData("data3")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Compras
                                                      </span>
                                                      
                                                  </Button>
                                                  <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple derecha", { active: bigChartData === "data5", })} onClick={() => setBgChartData("data5")} >
                                                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                          Todas
                                                      </span>
                                                      
                                                  </Button>
                                              </ButtonGroup>
                                          </Col>
                                      </Row>
                                  </CardHeader>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                          <Line data={chartExample30[bigChartData]} options={chartExample30.options} />
                                     {/*  </div> */}
                                  </CardBody>
                                  <CardBody>
                                    {/*   <div className="chart-area"> */}
                                         {/*  <Line data={chartExample5[bigChartData]} options={chartExample5.options} /> */}
                                     {/*  </div> */}
                                  </CardBody>
                              </div>
                          </Col>
                      </Row>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="discount card">
                    <div class="title">Mejor producto</div>
                    <div class="discount-wrapper">
                      <div class="discount-info">
                        <div class="subtitle">Mayor beneficio en un día:</div>
                        <div class="subtitle-count">1000 €</div>
                        <div class="subtitle">Venta en promoción:</div>
                        <div class="subtitle-count dist">300 € (20 ventas)</div>
                      </div>
                      <div class="discount-chart">
                        <div class="circle">
                          <div class="pie">
                            <svg>
                              <circle cx="60" cy="60" r="50"></circle>
                            </svg>
                          </div>
                          <div class="counter">92%</div>
                        </div>
                      </div>
                    </div>
                    <div class="discount-profile">
                      <span class="by">Articulo:</span>
                      <img class="discount-img img-usuario" src="https://image.tmdb.org/t/p/w500/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg" alt=""/>
                      <div class="discount-detail">
                        <div class="discount-name">Titulo: Wonder Woman 1984</div>
                        <div class="discount-type">Sección: Peliculas</div>
                      </div>
                    </div>
                   
                  </div>
                 
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">% Ventas por edades</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Pie data={chartExample31.data} options={chartExample31.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                </div>
                <div class="user-box third-box">
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Top compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample3.data} options={chartExample3.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Top favoritos</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample5.data} options={chartExample5.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Menos compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample6.data} options={chartExample6.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                  <div class="activity card">
                      <Row>
                        <Col lg="12">
                            <Card className="card-chart">
                              <CardHeader>
                                <h5 className="card-category">Menos % visitadas/compradas</h5>
                              </CardHeader>
                              <CardBody>
                                <div className="chart-area">
                                  <Bar data={chartExample7.data} options={chartExample7.options}/>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                      </Row>
                  </div>
                 
                      {/* <div class="destination-card">
                        <div class="destination-profile">
                          <img class="profile-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                          <div class="destination-length">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            42.8m
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">Pickup Point</div>
                          <div class="sub-point">Maryland 17, NY</div>
                        </div>
                      </div>
                    </div> */}
                  
                 


                 
                </div>
 
                <div class="user-box second-box">
                <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>done</a>
                      </div>
                      Más rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                            <th>Admin</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th></th>
                            <th>Edad</th>
                            <th>id</th>
                            <th>Cumpleaños</th>
                            <th></th>
                            <th></th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" id="row1" class="table-row" name="inputAdmin" /* onChange={cambiarAdmin} */ />
                              {/* <div id="spanAdmin" style={{backgroundColor: {color}}}>{texto}</div> */}
                            </td>
                            <td>Diego</td>
                            <td>Jarauta</td>
                            <td>Ibáñez</td>
                            <td>34</td>
                            <td>diegojarauta8@gmail.com</td>
                            <td>23</td>
                            <td>8</td>
                            <td>1987</td>
                            <td>
                              <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row2" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Sergio</td>
                            <td>Campos</td>
                            <td>Corredera</td>
                            <td>35</td>
                            <td>scampos@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                              <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row3" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Jose</td>
                            <td>Fernandez</td>
                            <td>Lucientes</td>
                            <td>46</td>
                            <td>flucientes@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row4" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Victor</td>
                            <td>Gimeno</td>
                            <td>Garcia</td>
                            <td>22</td>
                            <td>vgimeno@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Ángeles</td>
                            <td>Malo</td>
                            <td>Vallespín</td>
                            <td>58</td>
                            <td>mvangeles@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>highlight_off</a>
                      </div>
                      Menos rentables
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                            <th>Admin</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th></th>
                            <th>Edad</th>
                            <th>id</th>
                            <th>Cumpleaños</th>
                            <th></th>
                            <th></th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" id="row1" class="table-row" name="inputAdmin" /* onChange={cambiarAdmin} */ />
                              <div id="spanAdmin" style={{backgroundColor: {color}}}>{texto}</div>
                            </td>
                            <td>Diego</td>
                            <td>Jarauta</td>
                            <td>Ibáñez</td>
                            <td>34</td>
                            <td>diegojarauta8@gmail.com</td>
                            <td>23</td>
                            <td>8</td>
                            <td>1987</td>
                            <td>
                              <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row2" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Sergio</td>
                            <td>Campos</td>
                            <td>Corredera</td>
                            <td>35</td>
                            <td>scampos@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                              <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row3" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Jose</td>
                            <td>Fernandez</td>
                            <td>Lucientes</td>
                            <td>46</td>
                            <td>flucientes@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row4" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Victor</td>
                            <td>Gimeno</td>
                            <td>Garcia</td>
                            <td>22</td>
                            <td>vgimeno@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Ángeles</td>
                            <td>Malo</td>
                            <td>Vallespín</td>
                            <td>58</td>
                            <td>mvangeles@gmail.com</td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                            <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                                
               
                
            
                 
                </div>
               
              </div>
            </div>
          </div>)
      
          </>)
    
        }
        else if (menu == "usuarios") {
          
          return(<div className="body-dashboard">
          <div class="wrapper-dashboard">
              <div class="left-side">
                
              </div>
              <div class="main-container">
                <div class="header-dashboard">
                <div class="logo-dashboard"><span class="logo-det"><img classname="img-usuario" src={logo} height="20" alt=""/></span></div>
                  <a class="header-link" onClick={totales}>
                    <div className="material-icons header-admin">
                     <a>analytics</a>
                    </div>
                    Totales
                  </a>
                  <a class="header-link" onClick={camisetas}>
                  <div className="header-admin">
                  <i className="fa fa-tshirt camiseta-usuario"></i>
                    </div>
                    Camisetas
                  </a>
                  <a class="header-link" onClick={comics}>
                  <div className="material-icons header-admin">
                     <a>view_quilt</a>
                    </div>
                    Comics
                  </a>
                  <a class="header-link" onClick={libros}>
                  <div className="material-icons header-admin">
                     <a>auto_stories</a>
                    </div>
                    Libros
                  </a>
                  <a class="header-link" onClick={peliculas}>
                  <div className="material-icons header-admin">
                     <a>theaters</a>
                    </div>
                    Peliculas
                  </a>
                  <a class="header-link" onClick={zapatillas}>
                  <div className="header-admin">
                    <i className="fa fa-shoe-prints camiseta-usuario"></i>
                    </div>
                    Zapatillas
                  </a>
                  <a class="header-link" onClick={tabla}>
                  <div className="material-icons header-admin">
                     <a>admin_panel_settings</a>
                    </div>
                    Usuarios
                  </a>
                
              </div>
                                
                <div class="user-box second-box">
                  <div class="activity-user card">
                    <div class="cards-header">
                      <div class="cards-view">
                        
                      <div className="material-icons header-admin">
                       <a>admin_panel_settings</a>
                      </div>
                      Usuarios
                      </div>
                      
                    </div>
                    <div class="cards card usuarios-admin">
                      <table class="table table-admin">
                        <thead>
                          <tr>
                            <th>Admin</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            
                            <th>Edad</th>
                            <th>id</th>
                            <th>Cumpleaños</th>
                            <th>Compras</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" id="row1" class="table-row" name="inputAdmin" checked/>
                              <span id="spanAdmin" style={{backgroundColor: "#9e5924"}}>{texto}</span>
                            </td>
                            <td>Diego</td>
                            <td>Jarauta Ibáñez</td>
                           
                            <td>34</td>
                            <td>diegojarauta8@gmail.com</td>
                            <td>23/08/1987</td>
                            <td>215</td>
                            <td>
                              <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row2" class="table-row" /* onChange={cambiarAdmin} *//>
                              <span id="spanAdmin" style={{backgroundColor: {color}}} class="time is-wait">User</span> {/* aqui */}
                            </td>
                            <td>Sergio</td>
                            <td>Gimeno Orizo</td>
                            <td>35</td>
                            <td>sergiogo@gmail.com</td>
                            <td>24/05/1986</td>
                            <td>312</td>
                            
                            
                            <td>
                              <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <input type="checkbox" id="row3" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Jose</td>
                            <td>Fernandez Lucientes</td>
                            <td>46</td>
                            <td>flucientes@gmail.com</td>
                            <td>25/12/1975</td>
                            <td>15</td>
                           
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row4" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Victor</td>
                            <td>Campos Gracia</td>
                            <td>43</td>
                            <td>camgar@gmail.com</td>
                            <td>10/08/1978</td>
                            <td>163</td>
                           
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Ángeles</td>
                            <td>Hernandez Malo</td>
                            <td>53</td>
                            <td>angelines539@gmail.com</td>
                            <td>12/02/1968</td>
                            <td>183</td>
                           
                            <td>
                            <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Laura</td>
                            <td>Valles Borque</td>
                            <td>43</td>
                            <td>lvalles@gmail.com</td>
                            <td>3/08/1978</td>
                          
                            <td>208</td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>María</td>
                            <td>Rojo Ullate</td>
                            <td>18</td>
                            <td>mariaru@gmail.com</td>
                            <td>18/06/2003</td>
                           
                            <td>32</td>
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Jesús</td>
                            <td>Ibáñez Moreno</td>
                            <td>43</td>
                            <td>ibmojesus@gmail.com</td>
                            <td>9/05/1978</td>
                            <td>46</td>
                            
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr>
                          {/* <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Elena</td>
                            <td>Chicón</td>
                            <td>Lalzarra</td>
                            <td>57</td>
                            <td>echicon8@gmail.com</td>
                            <td>8/06/1964</td>
                           
                            <td>
                            <div class="status is-red">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                                Inactivo
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="row5" class="table-row"/>
                              <span class="time is-wait">User</span>
                            </td>
                            <td>Eduardo</td>
                            <td>Peinado</td>
                            <td>Bronchales</td>
                            <td>38</td>
                            <td>epeinado@gmail.com</td>
                            <td>11/11/1983</td>
                            
                            <td>
                            <div class="status is-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                Activo
                              </div>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
            
                 
                </div>
              </div>
            </div>
          </div>)
        
        }


        
  }

     
    
}

export default Usuario;