import { Helmet } from 'react-helmet';
import Teaser from '../../Teaser';

const ProjectsPage = ({ tabTitle, title, projects }) => (
  <>
    <Helmet>
      <title>{tabTitle}</title>
    </Helmet>
    <h1>{title}</h1>
    {projects.map((project, index) => {
      return <Teaser key={index} {...project} />;
    })}
  </>
);

export default ProjectsPage;
