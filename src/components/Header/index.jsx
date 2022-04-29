import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ logo, links }) => (
  <header>
    <Link to="/">
      <img src={logo.src} alt={logo?.alt} className="header__logo" />
    </Link>
    <ul className="nav-links">
      {links.map(({ url, label }) => (
        <li key={url}>
          <NavLink to={url} activeClassName="active">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
);

Header.propTypes = {
  logo: PropTypes.shape({
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
