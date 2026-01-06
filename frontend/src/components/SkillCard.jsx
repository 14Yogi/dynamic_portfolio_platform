import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </motion.div>
  );
};

export default SkillCard;