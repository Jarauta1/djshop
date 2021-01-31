import './usuario.css';
import {useState, useEffect} from "react"
import {BrowswerRouter, Route, Link,Redirect} from "react-router-dom"
import logo from "../Imagenes/logo.png"
import foto from "../Imagenes/foto.png"



// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

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
    let [nombre,setNombre] = useState("")
    let [apellido,setApellido] = useState("")
    let [datos,setDatos] = useState({})
    let rangoWeb = rango.toUpperCase()

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
            suggestedMin: 60,
            suggestedMax: 125,
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
          "Enero",
          "Febrero",
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
        ],
        datasets: [
          {
            label: "Kilómetros",
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
            data: [30,31,32,33,34,35,36,37,38,39,40,41,42],
          },
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "Enero",
          "Febrero",
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
        ],
        datasets: [
          {
            label: "Calorias",
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
            data: [50,51,52,53,54,55,56,57,58,59,60,61,62],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "Enero",
          "Febrero",
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
        ],
        datasets: [
          {
            label: "Segundos",
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
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
          },
        ],
      };
    },
    options: chart1_2_options,
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
  let chartExample3 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["JUL", "AGO", "SEP", "OCT", "NOV", "DIC"],
        datasets: [
          {
            label: "Actividades",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
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
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: ["JUL", "AGO", "SEP", "OCT", "NOV", "DIC"],
        datasets: [
          {
            label: "Metros",
            fill: true,
            backgroundColor: gradientStroke,
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
  

  


    if (rango == "admin") {
        return(<>
        <p>user</p>
        </>)
    } else if (rango == "usuario") {

        


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
                  <div class="logo-dashboard"><span class="logo-det"><img src={logo} height="20" alt=""/></span></div>
                  <a class="header-link" >
                    <div className="material-icons header-admin">
                     <a>analytics</a>
                    </div>
                    Totales
                  </a>
                  <a class="header-link" >
                  <div className="material-icons header-admin">
                     <a>checkroom</a>
                    </div>
                    Camisetas
                  </a>
                  <a class="header-link" href="#">
                  <div className="material-icons header-admin">
                     <a>view_quilt</a>
                    </div>
                    Comics
                  </a>
                  <a class="header-link" href="#">
                  <div className="material-icons header-admin">
                     <a>auto_stories</a>
                    </div>
                    Libros
                  </a>
                  <a class="header-link" href="#">
                  <div className="material-icons header-admin">
                     <a>theaters</a>
                    </div>
                    Peliculas
                  </a>
                  <a class="header-link" href="#">
                  <div className="material-icons header-admin">
                     <a>ice_skating</a>
                    </div>
                    Zapatillas
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
                                            <CardTitle tag="h2">Total 2020</CardTitle>
                                            
                                        </Col>
                                        <Col sm="6">
                                            <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                                                <Button tag="label" className={classNames("btn-simple izquierda", {active: bigChartData === "data1",})} color="info" id="0" size="sm" onClick={() => setBgChartData("data1")}>
                                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                        Vistas
                                                    </span>
                                                   
                                                </Button>
                                                <Button color="info" id="1" size="sm" tag="label" className={classNames("btn-simple", { active: bigChartData === "data2", })} onClick={() => setBgChartData("data2")}>
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                        Cesta
                                                    </span>
                                                   
                                                </Button>
                                                <Button color="info" id="2" size="sm" tag="label" className={classNames("btn-simple derecha", { active: bigChartData === "data3", })} onClick={() => setBgChartData("data3")} >
                                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                        Compras
                                                    </span>
                                                    
                                                </Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                  {/*   <div className="chart-area"> */}
                                        <Bar data={chartExample1[bigChartData]} options={chartExample1.options} />
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
                    <img class="discount-img" src="https://image.tmdb.org/t/p/w500/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg" alt=""/>
                    <div class="discount-detail">
                      <div class="discount-name">Titulo: Wonder Woman 1984</div>
                      <div class="discount-type">Sección: Peliculas</div>
                    </div>
                  </div>
                  <div class="button offer-button">Get Offer</div>
                </div>
               
                <div class="account-wrapper">
                  <div class="account-profile">
                    <img src={foto} alt=""/>
                    <div class="blob-wrap">
                      <div class="blob"></div>
                      <div class="blob"></div>
                      <div class="blob"></div>
                    </div>
                    <div class="account-name">{nombre} {apellido}</div>
                    <div class="account-title">{rangoWeb}</div>
                  </div>
                  <div class="account card">
                    <div class="account-cash">$ 5637.04</div>
                    <div class="account-income">Total Income</div>
                    <div class="account-iban">**** **** **** 3060</div>
                  </div>
                </div>
              </div>
              
              <div class="user-box second-box">
                <div class="cards-wrapper">
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
                            <input type="checkbox" id="row1" class="table-row" checked/>
                            <span class="time">Admin</span>
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
          
                <div class="card transection">
                  <div class="transection-header">
                    <div class="head">Transacciones</div>
                    
                  </div>
                  <div class="credit-wrapper">
                    <svg viewBox="0 0 504 504">
                      <path xmlns="http://www.w3.org/2000/svg" fill="#fff" data-original="#2fabf7" d="M43.2 207.6h17.6L52 185.2z"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M261.6 188.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M432.8 164.4v9.6l-4.8-9.6h-37.6v9.6l-4.8-9.6h-51.2c-8.8 0-16 1.6-22.4 4.8v-4.8h-36v4.8c-4-3.2-8.8-4.8-15.2-4.8H132l-8.8 20-8.8-20H73.6v9.6l-4.8-9.6H34.4l-16 37.6L0 243.6h40.8l4.8-12.8h11.2l4.8 12.8H108V234l4 9.6h23.2l4-9.6v9.6h111.2v-20.8h1.6c1.6 0 1.6 0 1.6 2.4v17.6h57.6V238c4.8 2.4 12 4.8 21.6 4.8h24l4.8-12.8h11.2l4.8 12.8H424v-12l7.2 12h37.6v-78.4h-36zm-270.4 67.2h-13.6v-44l-19.2 44h-12l-19.2-44v44H71.2l-5.6-12H38.4l-4.8 12.8H18.4l24-56.8h20l22.4 53.6v-53.6h21.6L124 214l16-38.4h22.4v56zm54.4-44h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8v12zm60 23.2c1.6 3.2 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8-2.4-11.2-2.4-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8H256c7.2 0 12 0 16 2.4s6.4 6.4 6.4 12.8c0 8.8-5.6 13.6-9.6 15.2 4 .8 6.4 3.2 8 4.8zm24 20.8h-13.6v-56.8h13.6v56.8zm157.6 0h-19.2l-25.6-42.4v42.4h-27.2l-4.8-12h-28l-4.8 12.8h-15.2c-6.4 0-14.4-1.6-19.2-6.4-4.8-4.8-7.2-11.2-7.2-21.6 0-8 1.6-16 7.2-22.4 4-4.8 11.2-6.4 20-6.4h12.8v12h-12.8c-4.8 0-7.2.8-10.4 3.2-2.4 2.4-4 7.2-4 12.8 0 6.4.8 10.4 4 13.6 2.4 2.4 5.6 3.2 9.6 3.2h5.6l18.4-44h20L400 230v-53.6h20l23.2 39.2v-39.2h13.6v55.2h1.6z" fill="#fbfbfb" data-original="#0571c1"/>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" data-original="#228fe0" d="M358.4 207.6h18.4l-8.8-22.4zM222.4 322.8v-45.6l-20.8 22.4z"/>
                      </g>
                      <path xmlns="http://www.w3.org/2000/svg" fill="#fff" data-original="#2fabf7" d="M136.8 282.8v10.4h29.6v11.2h-29.6v12h32.8l15.2-16.8-14.4-16.8z"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M252.8 282.8H236v14.4h17.6c4.8 0 8-2.4 8-7.2-.8-4.8-4-7.2-8.8-7.2z" fill="#fff" data-original="#228fe0"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M500 296.4v-36h-33.6c-7.2 0-12.8 1.6-16.8 4.8v-4.8h-36.8c-5.6 0-12.8 1.6-16 4.8v-4.8H332v4.8c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2 12-10.4-12h-72v78.4h70.4l11.2-12 10.4 12h43.2v-18.4h5.6c5.6 0 12.8 0 18.4-2.4v21.6h36v-20.8h1.6c2.4 0 2.4 0 2.4 2.4v18.4h108.8c7.2 0 14.4-1.6 18.4-4.8v4.8H472c7.2 0 14.4-.8 19.2-4 8-4.8 12.8-13.6 12.8-24 0-5.6-1.6-11.2-4-15.2zm-248 12.8h-16v19.2h-25.6l-16-18.4-16.8 18.4h-52.8v-56.8h53.6l16 18.4 16.8-18.4h42.4c10.4 0 22.4 3.2 22.4 18.4-.8 16-12 19.2-24 19.2zm80-3.2c1.6 2.4 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8.8-2.4-11.2-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4c6.4 0 12 0 16 2.4s7.2 6.4 7.2 12.8c0 8.8-5.6 13.6-9.6 15.2 4 1.6 6.4 3.2 7.2 4.8zm55.2-23.2H356v10.4h30.4v11.2H356v11.2h31.2v12h-44.8v-56.8h44.8v12zm33.6 44.8h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24.8c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4 1.6 3.2 3.2 4s3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8 2.4 2.4 4 6.4 4 12 0 12-7.2 17.6-20.8 17.6zm68.8-5.6c-3.2 3.2-8.8 5.6-16.8 5.6h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4.8 3.2 3.2 4 1.6.8 3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8.8 0 .8.8.8.8 2.4 3.2 3.2 7.2 3.2 11.2 0 4.8-1.6 8.8-4.8 12z" fill="#fbfbfb" data-original="#0571c1"/>
                      <path xmlns="http://www.w3.org/2000/svg" d="M317.6 284.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0"/>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M261.6 188.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6zM358.4 207.6h18.4l-8.8-22.4zM222.4 322.8v-45.6l-20.8 22.4z" fill="#fff" data-original="#228fe0"/>
                      </g>
                      <path d="M252.8 282.8H236v14.4h17.6c4.8 0 8-2.4 8-7.2-.8-4.8-4-7.2-8.8-7.2zM317.6 284.4c-1.6-.8-4-.8-6.4-.8h-16v12.8h16c2.4 0 4.8 0 6.4-.8s2.4-3.2 2.4-5.6c.8-3.2-.8-4.8-2.4-5.6z" fill="#fff" data-original="#228fe0" xmlns="http://www.w3.org/2000/svg"/>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" data-original="#2fabf7" d="M247.2 326L236 314v13.6h-26.4l-16-18.4-17.6 18.4h-52.8v-56h53.6l16.8 18.4 8-9.6-20-20h-70.4v78.4h70.4l12-12 10.4 12h43.2zM164 242.8l-10.4-11.2h-4.8v-4.8l-12-12-8 16.8h-11.2l-19.2-44v44H71.2l-5.6-12H38.4l-5.6 12H18.4l24-56h20l22.4 53.6v-53.6h12l-11.2-11.2h-12v9.6l-4-9.6H34.4l-16 37.6L0 242.8H41.6l4.8-12h11.2l5.6 12H108v-9.6l4 9.6h23.2l4-9.6v9.6z"/>
                        <path fill="#fff" data-original="#2fabf7" d="M127.2 206l-12.8-12.8L124 214z"/>
                      </g>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M491.2 334.8c7.2-4.8 12-12.8 12.8-21.6L492.8 302c.8 2.4 1.6 4.8 1.6 8 0 4.8-1.6 8.8-4.8 12-3.2 3.2-8.8 5.6-16.8 5.6h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-15.2 16.8-16.8l-8.8-8.8c-1.6.8-2.4 1.6-3.2 1.6V258h-36.8c-5.6 0-12.8 1.6-16 4.8V258H332v4.8c-4.8-4-13.6-4.8-17.6-4.8h-43.2v4.8c-4-4-13.6-4.8-18.4-4.8h-48l-11.2 12-10.4-12h-8.8l24 24 12-12.8h42.4c10.4 0 22.4 3.2 22.4 18.4 0 16-11.2 19.2-23.2 19.2h-16v12l12 12v-12h4c5.6 0 12.8 0 18.4-2.4V338h36v-20.8h1.6c2.4 0 2.4 0 2.4 2.4V338h108.8c7.2 0 14.4-1.6 18.4-4.8v4.8H472c6.4.8 13.6 0 19.2-3.2zM332 306c1.6 2.4 2.4 5.6 2.4 10.4v11.2h-13.6v-7.2c0-3.2 0-8.8-2.4-11.2-1.6-2.4-4.8-2.4-9.6-2.4h-14.4v20.8h-13.6v-56.8h30.4c6.4 0 12 0 16 2.4s7.2 6.4 7.2 12.8c0 8.8-5.6 13.6-9.6 15.2 4 1.6 6.4 3.2 7.2 4.8zm55.2-23.2H356v10.4h30.4v11.2H356v11.2h31.2v12h-44.8v-56.8h44.8v12zm33.6 44.8h-25.6v-12h25.6c2.4 0 4 0 5.6-1.6.8-.8 1.6-2.4 1.6-4s-.8-3.2-1.6-4c-.8-.8-2.4-1.6-4.8-1.6-12.8-.8-28 0-28-17.6 0-8 4.8-16.8 19.2-16.8h26.4v13.6h-24.8c-2.4 0-4 0-5.6.8s-1.6 2.4-1.6 4c0 2.4 1.6 3.2 3.2 4s3.2.8 4.8.8h7.2c7.2 0 12 1.6 15.2 4.8 2.4 2.4 4 6.4 4 12 0 12-7.2 17.6-20.8 17.6z" fill="#fff" data-original="#228fe0"/>
                        <path d="M459.2 288.4c0 2.4.8 3.2 3.2 4 1.6.8 3.2.8 4.8.8h7.2c4.8 0 8 .8 11.2 2.4l-12-12h-7.2c-2.4 0-4 0-5.6.8-.8.8-1.6 2.4-1.6 4zM431.2 240.4l1.6 2.4h.8zM387.2 196.4l13.6 32.8V210z" fill="#fff" data-original="#228fe0"/>
                        <path d="M250.4 222.8h1.6c1.6 0 1.6 0 1.6 2.4v17.6h57.6V238c4.8 2.4 12 4.8 21.6 4.8h24l4.8-12.8h11.2l4.8 12.8H424v-8l-11.2-11.2v8.8h-27.2l-4-12.8h-28l-4.8 12.8h-15.2c-6.4 0-14.4-1.6-19.2-6.4-4.8-4.8-7.2-11.2-7.2-21.6 0-8 1.6-16 7.2-22.4 4-4.8 11.2-6.4 20-6.4h12.8v12h-12.8c-4.8 0-7.2.8-10.4 3.2-2.4 2.4-4 7.2-4 12.8 0 6.4.8 10.4 4 13.6 2.4 2.4 5.6 3.2 9.6 3.2h5.6l18.4-44h8l-11.2-11.2h-20.8c-8.8 0-16 1.6-22.4 4.8v-4.8H276v4.8c-4-3.2-8.8-4.8-15.2-4.8H132l-8.8 20-8.8-20H79.2l11.2 11.2h16L120 206l4.8 4.8 14.4-35.2h22.4v56.8H148v-44l-13.6 32 23.2 23.2h92l.8-20.8zm36.8-47.2h13.6v56.8h-13.6v-56.8zm-70.4 12h-31.2V198H216v11.2h-30.4v11.2h31.2v12H172v-56.8h44.8v12zm22.4 44h-13.6v-56.8H256c7.2 0 12 0 16 2.4s6.4 6.4 6.4 12.8c0 8.8-5.6 13.6-9.6 15.2 3.2.8 5.6 3.2 6.4 4.8 1.6 3.2 2.4 5.6 2.4 10.4v11.2H264v-7.2c0-3.2 0-8-2.4-11.2-.8-1.6-3.2-1.6-8-1.6h-14.4v20z" fill="#fff" data-original="#228fe0"/>
                      </g>
                    </svg>
                   
                    <div class="credit-name">
                      <div class="credit-type">Paypal</div>
                      <div class="credit-status">Payment Cancelled</div>
                    </div>
                    <div class="credit-money is-active">5.969 €</div>
                  </div>
                  <div class="credit-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.764 291.764">
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
            </div>
          </div>
        </div>)
    }

     
    
}

export default Usuario;