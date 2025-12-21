const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="links">
        {project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
        {project.liveUrl && <a href={project.liveUrl}>Live</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
