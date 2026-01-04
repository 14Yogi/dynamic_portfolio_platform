import SkillCard from "../components/SkillCard";
import { skills } from "../services/mockData";

const Skills = () => {
  return (
    <div className="page">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
