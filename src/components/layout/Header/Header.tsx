import { useLocation } from "react-router-dom";
import styles from "../Layout.module.css";

const headerItems = [
  {
    title: "Store",
    href: "/store",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "News & Events",
    href: "/news",
  },
  {
    title: "Support",
    href: "/support",
  },
  {
    title: "About Us",
    href: "/about",
  },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        <a className={styles.InfinityStore} href="/">
          INFINITY STORE
        </a>
        <ul className={styles.navList}>
          {headerItems?.map(({ title, href }) => {
            const isActive = href === pathname;

            return (
              <li
                key={href}
                className={
                  isActive
                    ? `${styles.headerItem} ${styles.active}`
                    : styles.headerItem
                }
              >
                <a className={styles.headerLink} href={href}>
                  {title}
                </a>
              </li>
            );
          })}
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
