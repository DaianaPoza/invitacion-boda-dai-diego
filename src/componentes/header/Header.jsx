import './Header.css';
import fondo from "../../assets/nana.jpeg"; 

function Header() {
  return (
    <section
      className="invitacion-fondo"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="invitacion-texto">
        <h1>Day & Diego</h1>
        <h2>¡Nos casamos!</h2>
      </div>
    </section>
  );
}

export default Header;

