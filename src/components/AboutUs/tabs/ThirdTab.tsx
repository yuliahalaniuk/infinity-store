import styles from "../AboutUs.module.css";

const ThirdTab = () => {
  return (
    <section className={styles.thirdTabSec}>
      <h2 className={styles.title}>
        Create <span>or </span>Log In
      </h2>
      <h2 className={styles.subtitle}>Register on our platform!</h2>
      <p className={styles.description}>
        Alternatively, use any authentication method provided on our website.
      </p>
    </section>
  );
};
export default ThirdTab;
