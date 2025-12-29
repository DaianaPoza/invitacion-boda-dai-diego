
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
          href="https://open.spotify.com/playlist/621qt70RYhiIWP3HhhOdas?si=DM6KjNDvQ0qz8I-23lBFdw&pi=PX8_OnqESZaS3&pt=961ae8a750b26c092ce1204ffb6fe891"
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
