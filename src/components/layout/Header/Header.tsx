import React from "react";
import styles from "../Layout.module.css";
// import lang from "../../../../public/icons/lang.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        <a className={styles.InfinityStore} href="/main">
          INFINITY STORE
        </a>
        <ul className={styles.navList}>
          <li>
            <a className={styles.headerLink} href="/store">
              Store
            </a>
          </li>
          <li>
            <a className={styles.headerLink} href="/community">
              Community
            </a>
          </li>
          <li>
            <a className={styles.headerLink} href="/news">
              News & Events
            </a>
          </li>
          <li>
            <a className={styles.headerLink} href="/support">
              Support
            </a>
          </li>
          <li>
            <a className={styles.headerLink} href="/about">
              About Us
            </a>
          </li>
        </ul>
      </nav>

      <ul className={styles.iconsList}>
        <li>
          {/* <input
                className={styles.search}
                type="search"
                id="site-search"
                name="q"
              /> */}
          <img
            className={styles.lookfor}
            src="C:\Users\admin\Desktop\Css\Lookfor.png"
            alt="Look for"
          />
        </li>
        <li>
          <span id="ChangeLanguages" className={styles.ChangeLanguages}>
            <img
              className={styles.iconChangeLanguages}
              // src={lang}
              alt="Change Languages"
            />
          </span>
        </li>
        <li>
          <span id="Profile" className={styles.Profile}>
            <img
              className={styles.iconProfile}
              src="C:\Users\admin\Desktop\Css\Profile.png"
              alt="Profile"
            />
          </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
