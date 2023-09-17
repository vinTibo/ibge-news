import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Mais recentes</Link>
      <Link to="/release">Release</Link>
      <Link to="/news">Notícia</Link>
      <Link to="/favorite">Favoritas</Link>
    </nav>
  );
}

export default NavBar;