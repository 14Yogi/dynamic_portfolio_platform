import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;