import { motion } from "framer-motion";
import { getContact } from "../services/contactService";

const Contact = () => {
  const contact = getContact();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Contact Me</h2>

      <motion.ul
        className="contact-list"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {Object.entries(contact).map(
          ([key, value]) =>
            value && (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                {key === "email" && (
                  <>📧 <a href={`mailto:${value}`}>{value}</a></>
                )}
                {key === "phone" && (
                  <>📱 <a href={`tel:${value}`}>{value}</a></>
                )}
                {key !== "email" && key !== "phone" && (
                  <>🔗 <a href={value} target="_blank">{key}</a></>
                )}
              </motion.li>
            )
        )}
      </motion.ul>
    </motion.div>
  );
};

export default Contact;
