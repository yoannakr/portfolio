import React from "react";
import "../../App.css";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Title}>
        <h1 className={styles.HomeName}>Hi, I'm Yoanna!</h1>
        <h1>
          I'm a <b>Software Engineer</b>
        </h1>
        <h1>
          and <span className={styles.TitleTextAnimation}></span>
        </h1>
        <div className={styles.ScrollArrow}>
          <span className={styles.Arrow}>↓</span>
          <span>scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
