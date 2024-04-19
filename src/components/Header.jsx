import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ links }) => (
  <header>
    <Link to="/">
      <img
        src="/favicon.ico"
        alt="BossElijah"
        className="header__logo mobile"
      />
      <img
        src="/img/logo-text.png"
        alt="BossElijah"
        className="header__logo desktop"
      />
    </Link>
    <ul className="nav-links">
      {links.map(({ url, label }) => (
        <li key={url}>
          <NavLink
            to={url}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
);

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
