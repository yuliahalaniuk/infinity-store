import styles from "../Layout.module.css";
// import profileIcon from "../../../icons/profile.png";

// import { ReactComponent as LangIcon } from "../../../../public/icons/lang.svg";

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
            src={"C:UsersadminDesktopCssProfile.png"}
            alt="Look for"
          />
        </li>
        <li>
          <span id="ChangeLanguages" className={styles.ChangeLanguages}>
            <img
              className={styles.iconChangeLanguages}
              src={"C:UsersadminDesktopCssProfile.png"}
              alt="Change Languages"
            />
          </span>
        </li>
        <li>
          <a id="Profile" className={styles.Profile} href="/profile">
            <img
              className={styles.iconProfile}
              src="C:\Users\admin\Desktop\Css\Profile.png"
              alt="Profile"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
