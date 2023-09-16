import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <NavLink to={'/'}><h1>IBGE News</h1></NavLink>
    </header>
  );
}

export default Header;