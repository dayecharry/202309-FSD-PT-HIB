import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/list">Listado bebida</Link>
        </li>
      </ul>
    </header>
  );
}
export default Menu;
