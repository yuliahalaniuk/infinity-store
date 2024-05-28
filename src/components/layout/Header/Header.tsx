import { useLocation } from "react-router-dom";
import styles from "../Layout.module.css";
import langIcon from "../../../icons/lang.svg";
import profileIcon from "../../../icons/profile.svg";
import searchIcon from "../../../icons/search.svg";
import { useState } from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import MobMenu from "./MobMenu/MobMenu";

export const headerItems = [
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

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };
  const isBreakpoint = useMediaQuery(1280);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navList}>
          <a className={styles.InfinityStore} href="/">
            INFINITY STORE
          </a>
        </div>

        {!isBreakpoint ? (
          <div className={styles.headerList}>
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
            <ul className={styles.iconsList}>
              <li
                className={styles.Profile}
                style={{
                  borderRight: "1px solid rgb(154, 154, 154)",
                  paddingRight: "10px",
                }}
              >
                {/* <input
                className={styles.search}
                type="search"
                id="site-search"
                name="q"
              /> */}
                <img
                  src={searchIcon}
                  alt="Look for"
                  className={styles.lookFor}
                />
              </li>
              <li className={styles.Profile}>
                <span id="ChangeLanguages">
                  <img src={langIcon} alt="Change Languages" />
                </span>
              </li>
              <li className={styles.Profile}>
                <a id="Profile" href="/profile">
                  <img src={profileIcon} alt="Profile" />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={handleClick}
            type="button"
            className={styles.menuBtn}
          >
            Menu
          </button>
        )}
      </header>

      <MobMenu onClose={handleClick} isShown={isOpen} />
    </>
  );
};

export default Header;
