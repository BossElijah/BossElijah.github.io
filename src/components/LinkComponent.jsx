import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, url }) => (
  <Link to={url} className="link">
    {title}
  </Link>
);

LinkComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkComponent;
