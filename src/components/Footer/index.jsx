import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSocialMediaIcon } from '../../util/util';

const Footer = ({ socialMedia }) => (
  <footer>
    <div className="copyright">
      Copyright &copy; {new Date().getFullYear()} –{' '}
      <Link className="link" to="/">
        BossElijah
      </Link>
    </div>
    <div className="socials">
      {socialMedia.map(item => (
        <a
          key={item.platform}
          className="footer-item"
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {getSocialMediaIcon(item.platform)}
        </a>
      ))}
    </div>
  </footer>
);

Footer.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Footer;
