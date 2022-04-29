import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ContactForm from '../../ContactForm';

const ContactPage = ({ tabTitle, title, contactForm }) => (
  <>
    <Helmet>
      <title>{tabTitle}</title>
    </Helmet>
    <div className="contact-page">
      <h1>{title}</h1>
      <ContactForm {...contactForm} />
    </div>
  </>
);

ContactPage.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contactForm: PropTypes.shape({
    success: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    labels: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  })
};

export default ContactPage;
