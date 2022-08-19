import React from "react";
import "../../App.scss";
import styles from "./Skills.module.scss";
import SkillSection from "./SkillSection/SkillSection";
import { SkillSections } from "../../constants/skills";

const Skills = () => {
  return (
    <div id="skills" className={styles.Skills}>
      {SkillSections.map((skillSection, key) => (
        <SkillSection key={key} skillSection={skillSection} />
      ))}
    </div>
  );
};

export default Skills;
