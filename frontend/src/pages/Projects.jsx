import ProjectCard from "../components/ProjectCard";
import { projects } from "../services/mockData";

const Projects = () => {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
