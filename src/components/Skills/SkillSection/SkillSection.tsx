import React from "react";
import "../../../App.scss";
import { ISkillSection } from "../../../types/skills";
import styles from "./SkillSection.module.scss";

interface SkillSectionProps {
  skillSection: ISkillSection;
}

const SkillSection = (props: SkillSectionProps) => {
  const { skillSection } = props;

  return (
    <div className={styles.SkillsWrapper}>
      <p className={styles.Title}>{skillSection.title}</p>
      <ul className={styles.Items}>
        {skillSection.items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
