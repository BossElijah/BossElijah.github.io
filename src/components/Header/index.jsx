import { Link, NavLink } from 'react-router-dom';

const Header = ({ logo, links }) => (
  <header>
    <Link to="/">
      <img src={logo.src} alt={logo?.alt} className="header__logo" />
    </Link>
    <ul className="nav-links">
      {links.map(({ url, label }, index) => (
        <li key={index}>
          <NavLink to={url} activeClassName="active">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
