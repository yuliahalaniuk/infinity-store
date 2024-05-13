import React from "react";
import styles from "../AboutUs.module.css";

const ThirdTab = () => {
  return (
    <section className="welcome-section">
      <h1 className={styles.title}>
        <b>Create</b> or <b>Log In</b>
      </h1>
      <h2 className={styles.subtitle}>register on our platform</h2>
      <p className={styles.description}>
        Alternatively, use any authentication method provided on our website.
      </p>
    </section>
  );
};
export default ThirdTab;
