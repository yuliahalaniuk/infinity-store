import styles from "./StoreFooter.module.css";
import { footerMap } from "./footerMap";

const StoreFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>INFINITY STORE</div>

        <ul className={styles.footerList}>
          {Object.entries(footerMap).map(([key, value]) => {
            const { title, list } = value;
            return (
              <li className={styles.footerItem} key={key}>
                <a href={"/"} className={styles.subtitle}>
                  <h3>{title}</h3>
                </a>

                <ul className={styles.linksList}>
                  {list.map(({ title, href }) => {
                    return (
                      <li key={title}>
                        <a href={href} className={styles.link}>
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StoreFooter;
