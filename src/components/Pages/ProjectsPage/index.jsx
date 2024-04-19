import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Teaser from '../../Teaser';

const ProjectsPage = ({ tabTitle, title, content, projects }) => (
  <>
    <Helmet>
      <title>{tabTitle}</title>
    </Helmet>
    <h1>{title}</h1>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
      className="content"
    />
    {projects.map(project => (
      <Teaser key={project.url} {...project} />
    ))}
  </>
);

ProjectsPage.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProjectsPage;
