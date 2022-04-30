import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { calculateAge } from '../../../util/util';

const HomePage = ({ tabTitle, img, content }) => {
  const newContent = content
    .replace('my-age', calculateAge('08.10.05'))
    .replace('micah-age', calculateAge('05.01.08'))
    .replace('josias-age', calculateAge('01.10.11'));

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
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: newContent }} />
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
  content: PropTypes.string.isRequired
};

export default HomePage;
