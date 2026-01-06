import { motion } from "framer-motion";
import * as aboutService from "../services/aboutService";

const About = () => {
  const about = aboutService.getAbout() || {};

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <strong>{about.name || "Yogesh"}</strong>
        <br />
        {about.role || "Full Stack Developer"}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {about.bio ||
          "I build dynamic, scalable, and animated web applications using React, Spring Boot, and MongoDB."}
      </motion.p>
    </motion.div>
  );
};

export default About;
