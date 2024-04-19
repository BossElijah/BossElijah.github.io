import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ContactForm from './Form';
import Gallery from './Gallery';
import LinkComponent from './LinkComponent';
import RichText from './RichText';
import Teaser from './Teaser';

const Page = ({ title, tabTitle, components }) => (
  <>
    <Helmet>
      <title>{tabTitle}</title>
    </Helmet>
    <div className="page">
      <h1>{title}</h1>
      {components.map(item => {
        switch (item.type) {
          case 'richText':
            return <RichText {...item} />;
          case 'teaser':
            return <Teaser {...item} />;
          case 'link':
            return <LinkComponent {...item} />;
          case 'gallery':
            return <Gallery {...item} />;
          case 'contactForm':
            return <ContactForm {...item} />;
          default:
            return <>The {item.type} component was not yet created!</>;
        }
      })}
    </div>
  </>
);

Page.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  components: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      richText: PropTypes.string,
      date: PropTypes.string,
      success: PropTypes.string,
      error: PropTypes.string,
      images: PropTypes.shape(),
      labels: PropTypes.shape()
    })
  ).isRequired
};

export default Page;
