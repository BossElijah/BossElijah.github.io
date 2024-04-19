import PropTypes from 'prop-types';

const Gallery = ({ title, images }) => (
  <div className="gallery">
    {title && <h2>{title}</h2>}
    <div className="images">
      {images.map(({ src, alt }) => (
        <div className="gallery-item">
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  </div>
);

Gallery.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default Gallery;
