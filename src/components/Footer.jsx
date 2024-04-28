import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Bitbucket } from '../assets/bitbucket.svg';
import { ReactComponent as Codepen } from '../assets/codepen.svg';
import { ReactComponent as Github } from '../assets/github.svg';

const Footer = ({ socialMedia }) => {
  const getSocialMediaIcon = type => {
    switch (type) {
      case 'codepen':
        return <Codepen height="26" width="26" />;
      case 'bitbucket':
        return <Bitbucket height="26" width="26" />;
      case 'github':
        return <Github height="26" width="26" />;
      default:
        return null;
    }
  };

  return (
    <footer>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} –{' '}
        <Link className="footer-link" to="/">
          BossElijah
        </Link>
      </div>
      <div className="socials">
        {socialMedia.map(({ platform, url }) => (
          <a
            key={platform}
            className="footer-item"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {getSocialMediaIcon(platform)}
          </a>
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Footer;
