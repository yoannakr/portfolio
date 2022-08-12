import React from "react";
import "../../App.scss";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.Home}>
      <div className={styles.Title}>
        <h1 className={styles.HomeName}>Hi, I'm Yoanna!</h1>
        <h1>
          I'm a <b>Software Engineer</b>
        </h1>
        <h1>
          and <span className={styles.TitleTextAnimation}></span>
        </h1>
        <div className={styles.ScrollArrow}>
          <a className={styles.Arrow} href="#about">
            ↓
          </a>
          <a href="#about">scroll</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
