import { aboutData } from "../services/aboutdata";

const About = () => {
  return (
    <div className="page" style={{ minHeight: "100vh", color: "#333" }}>
      <h2>About Me</h2>
      <h3>{aboutData.name}</h3>
      <p><strong>{aboutData.title}</strong></p>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default About;
