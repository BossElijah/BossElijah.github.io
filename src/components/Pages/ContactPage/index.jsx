import { Helmet } from "react-helmet";
import ContactForm from "../../ContactForm";

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

export default ContactPage;
