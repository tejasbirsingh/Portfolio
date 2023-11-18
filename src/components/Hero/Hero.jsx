import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tejas Bir Singh</h1>
        <p className={styles.description}>
          I'm a software development engineer with 2+ years of experience in working with microservices, AWS services, backend.
           Reach out if you'd like to learn more!
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
