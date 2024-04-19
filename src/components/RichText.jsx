import PropTypes from 'prop-types';

const RichText = ({ title, richText }) => (
  <div className="rich-text">
    {title && <h2>{title}</h2>}
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: richText }} />
  </div>
);

RichText.propTypes = {
  title: PropTypes.string,
  richText: PropTypes.string.isRequired
};

export default RichText;
