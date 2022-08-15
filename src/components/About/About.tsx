import React from "react";
import "../../App.scss";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.About}>
      <div className={styles.AboutWrapper}>
        <div className={styles.ProfilePicture}>
          <img src="images/profile-picture.jpg" alt="profile picture yoanna" />
        </div>
        <div className={styles.AboutDescription}>
          <p className={styles.Title}>Hello, I am Yoanna Krasteva 🙂</p>
          <p>
            I am passionate about coding and solving problems through code. A
            person who cares about the details.
          </p>
          <p>
            I've recently graduated Bachelor's degree in Computer and Software
            Engineering at Technical University of Sofia. Currently, I am
            working both front end and back end at Microinvest.
          </p>
          <p>
            I enjoy figuring out the logic behind creating applications but I am
            more interested in learning how to make it look pretty to users.
            That's why I want to switch my career in front end development.
          </p>
          <a
            href="Yoanna_Krasteva_Software_Engineer.pdf"
            className={styles.DownloadButton}
            download
          >
            Download my resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
