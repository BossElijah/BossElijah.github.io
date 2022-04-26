import { ReactComponent as Codepen } from './codepen.svg';
import { ReactComponent as Bitbucket } from './bitbucket.svg';
import { ReactComponent as Github } from './github.svg';

const Footer = () => (
  <footer>
    <a className="footer-item" href="https://codepen.io/bosselijah"  target="_blank" rel="noreferrer">
      <Codepen height="32" width="32" />
    </a>
    <a className="footer-item" href="https://bitbucket.org/egb-dev"  target="_blank" rel="noreferrer">
      <Bitbucket height="32" width="32" />
    </a>
    <a className="footer-item" href="https://github.com/bosselijah" target="_blank" rel="noreferrer">
      <Github height="32" width="32" />
    </a>
  </footer>
);

export default Footer;
