//import React from 'react';
import React, { useEffect } from "react";
import './App.css'
import Header from './componentes/header/Header'
import Seccion from './componentes/seccion/Seccion'
import Footer from './componentes/footer/Footer'
import Map from "./componentes/mapa/Map.jsx";
import { WEDDING } from "./config/WeddingConfig.js";
import Regalo from "./componentes/regalo/Regalo.jsx";
import Vestimenta from "./componentes/vestimenta/Vestimenta.jsx";
import Chicos from "./componentes/chicos/Chicos.jsx"
import Musica from "./componentes/Musica/Musica.jsx"
import RSVP from "./componentes/confirmacion/Confirmacion.jsx";
import Fecha from "./componentes/fecha/Fecha.jsx";
import Music from "./componentes/music/Music.jsx";


function App() {

  useEffect(() => {
    const secciones = document.querySelectorAll("section");

    const mostrar = () => {
      secciones.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();
        const delay = index * 40; // 💫 pequeño retraso entre secciones

        if (rect.top < window.innerHeight - 120) {
          setTimeout(() => {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.filter = "blur(0px)";
          }, delay);
        }
      });
    };

    window.addEventListener("scroll", mostrar);
    mostrar(); // ejecuta una vez al cargar
    return () => window.removeEventListener("scroll", mostrar);
  }, []);





  return (
    <>
    <div className='body'>
  <Header />

  <Music />

  <Fecha />
  <Seccion />
  <Map
        name={WEDDING.venue.name}
        address={WEDDING.venue.address}
      />
<Vestimenta/>
<Chicos/>
<Musica/>
  <Regalo />
  <RSVP />
  <Footer />
  </div>
    </>
  
  )
}

export default App;
