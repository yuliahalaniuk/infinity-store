import React from "react";
import styles from "../../components/AboutUs/AboutUs.module.css";

const Hero = () => {
  return (
    <section className={styles.welcomeSTART}>
      <h1 className={styles["Welcome-to"]}>Welcome to</h1>
      <h2 className={styles["Welcome-inf"]}>I N F I N I T Y S T O R E</h2>
      <p className={styles["Welcome-first"]}>
        First UA platform for Developers and Gamers
      </p>
    </section>
  );
};

export default Hero;
