import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.welcomeSTART}>
      <p className={styles.mainText}>Welcome to </p>
      <span className={styles.title}>
        I N F I N I T Y <p>S T O R E</p>
      </span>
      <p className={styles.secondaryText}>
        First UA platform for Developers and Gamers
      </p>
    </section>
  );
};

export default Hero;
