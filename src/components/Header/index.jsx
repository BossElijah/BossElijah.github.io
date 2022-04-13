import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">
      <img src="/img/logo.png" alt="BossElijah" className="header__logo" />
    </Link>
    <ul className="nav-links">
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
