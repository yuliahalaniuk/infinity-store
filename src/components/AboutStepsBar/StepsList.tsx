import React from "react";
import styles from "./StepsList.module.css";

const StepsList = ({
  tabs,
  activeIdx,
}: {
  tabs?: { text: string; href: string }[];
  activeIdx?: number;
}) => {
  return (
    <ul className={styles.flexList}>
      {tabs?.map(({ text, href }, index) => (
        <li key={href}>
          <a
            className={
              index === activeIdx ? styles.OurProduct2 : styles.OurCompany2
            }
            href={href}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StepsList;
