
import "./Musica.css";
import { FaSpotify } from "react-icons/fa";

function Musica() {
  return (
    <section className="spotify">
      <div className="container">
        <h1 className="spotify__title">
        <FaSpotify className="spotify__icon" />
        Nuestra playlist</h1>

        <h2 className="spotify__text">
          ¡La fiesta también es tuya!  
          <h3 className="spotify__text">Agregá tus canciones favoritas a nuestra lista</h3>
          </h2>
        

        <a
          href="Hagamos una playlist en equipo. Unite y editala: Boda D&D https://open.spotify.com/playlist/621qt70RYhiIWP3HhhOdas?si=6Lp5BY55RfG6wOjCWGXQ9w&pt=faa7347c799f1522e576105ee8a28290&pi=gm-UhSkiRKqcD"
          target="_blank"
          rel="noopener noreferrer"
          className="spotify__button"
        >
          Agregar canción
        </a>
      </div>
    </section>
  );
}

export default Musica;
