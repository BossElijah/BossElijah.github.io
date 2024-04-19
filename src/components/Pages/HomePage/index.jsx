import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomePage = ({ tabTitle, img, content, gallery }) => {
  const galleryItems = gallery.map(item => (
    <div className="gallery-item">
      <img src={item.src} alt={item.alt} />
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>{tabTitle}</title>
      </Helmet>
      <div className="home-page">
        {img && (
          <img
            src={img.src}
            alt={img.alt}
            height="150px"
            width="150px"
            className="picture"
          />
        )}
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
          className="content"
        />
        <Link to="/contact">Get in touch</Link>
        <h2>Gallery</h2>
        <div className="gallery">{galleryItems}</div>
      </div>
    </>
  );
};

HomePage.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  content: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default HomePage;
