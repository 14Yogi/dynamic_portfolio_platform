// Temporary: remove framer-motion while debugging
// import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <div className="project-card">
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </div>
  );
};

export default SkillCard;
