import { Helmet } from "react-helmet";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | BossElijah</title>
    </Helmet>
    <div class="button-container">
      <a href="mailto:eliasbruhn123@gmail.com" class="button">
        Contact me
      </a>
    </div>
  </>
);

export default ContactPage;
