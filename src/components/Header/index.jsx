import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ logoMobile, logoDesktop, links }) => (
  <header>
    <Link to="/">
      <img
        src={logoMobile.src}
        alt={logoMobile?.alt}
        className="header__logo mobile"
      />
      <img
        src={logoDesktop.src}
        alt={logoDesktop?.alt}
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
  logoMobile: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  logoDesktop: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
