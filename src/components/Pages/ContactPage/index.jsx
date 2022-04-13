import { Helmet } from "react-helmet";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | BossElijah</title>
    </Helmet>
    <div className="button-container">
      <a href="mailto:eliasbruhn123@gmail.com" className="button">
        Contact me
      </a>
    </div>
  </>
);

export default ContactPage;
