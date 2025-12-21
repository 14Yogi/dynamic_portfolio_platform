const ProjectCard = ({ title, description, github, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="links">
        <a href={github} target="_blank">GitHub</a>
        <a href={live} target="_blank">Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;
