import { getSocialMediaIcon } from '../../util/util';

const Footer = ({ socialMedia }) => (
  <footer>
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
  </footer>
);

export default Footer;
