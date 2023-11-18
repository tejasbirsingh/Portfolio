import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tejas Bir Singh</h1>
        <p className={styles.description}>
        In the world of software development, I'm driven by a passion for learning and a dedication to 
        mastering diverse aspects of the field.
        
        Connect with me if you're curious to explore further!
        </p>
        <a href="mailto:tejasbir.rekhi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/my_photo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
