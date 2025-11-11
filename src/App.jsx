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
    const secs = Array.from(document.querySelectorAll("section"));
    if (!secs.length) return;
  
    // 👇 muestra inmediatamente las dos primeras secciones (Header + la que sigue)
    secs.slice(0, 2).forEach(el => el.classList.add("is-visible"));
  
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target); // solo una vez
          }
        });
      },
      {
        threshold: 0,           // dispara apenas asoma
        root: null,
        rootMargin: "200px 0px 0px 0px", // 💡 revela ~200px ANTES de entrar
      }
    );
  
    // saltamos las 2 primeras que ya mostramos
    secs.slice(2).forEach((s) => io.observe(s));
    return () => io.disconnect();
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
