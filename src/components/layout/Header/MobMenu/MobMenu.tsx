import styles from "./MobMenu.module.css";
import langIcon from "../../../../icons/lang.svg";
import profileIcon from "../../../../icons/profile.svg";
import searchIcon from "../../../../icons/search.svg";
import { headerItems } from "../Header";
import { useLocation } from "react-router-dom";

const MobMenu = ({
  onClose,
  isShown,
}: {
  onClose?: () => void;
  isShown?: boolean;
}) => {
  const { pathname } = useLocation();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };
  return (
    <div
      className={isShown ? styles.backdrop : styles.hiddenBackdrop}
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>
        <button type="button" onClick={onClose} className={styles.closeBtn}>
          Close
        </button>
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
          <li className={styles.Profile}>
            <img src={searchIcon} alt="Look for" className={styles.lookFor} />
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
    </div>
  );
};

export default MobMenu;
