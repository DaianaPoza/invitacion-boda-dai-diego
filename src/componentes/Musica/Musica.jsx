
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
          href="https://open.spotify.com/playlist/621qt70RYhiIWP3HhhOdas?si=lIAu0YLbQHC-iDXHOOJhmw&pi=qtKhr6eZRNijv&pt=27dc678557cca6a209c5119caf58db70"
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
