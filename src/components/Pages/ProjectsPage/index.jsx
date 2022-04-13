import { Helmet } from "react-helmet";
import projects from "./projects.json";
import Teaser from "../../Teaser";

const ProjectsPage = () => (
  <>
    <Helmet>
      <title>Projects | BossElijah</title>
    </Helmet>
    <div className="content">
      <h1>My Projects</h1>
      {projects.projects.map((project, index) => {
        return <Teaser key={index} {...project} />;
      })}
    </div>
  </>
);

export default ProjectsPage;
