import { projects } from "../services/mockData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
