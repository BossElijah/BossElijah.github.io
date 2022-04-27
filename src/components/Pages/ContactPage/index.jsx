import { Helmet } from 'react-helmet';

const ContactPage = ({ tabTitle, link }) => (
  <>
    <Helmet>
      <title>{tabTitle}</title>
    </Helmet>
    <div className="button-container">
      <a href={link.url} className="button">
        {link.label}
      </a>
    </div>
  </>
);

export default ContactPage;
