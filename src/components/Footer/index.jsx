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
      {socialMedia.map((item, index) => (
        <a
          key={index}
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

export default Footer;
