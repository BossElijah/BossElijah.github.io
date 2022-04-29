import PropTypes from 'prop-types';

const Teaser = ({ title, url, text, date }) => (
  <a href={url} target="_blank" rel="noreferrer" className="project">
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="date">{date}</div>
  </a>
);

Teaser.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Teaser;
