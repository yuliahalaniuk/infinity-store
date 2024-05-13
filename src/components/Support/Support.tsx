import React from "react";
import css from "./Support.module.css";
const Support = () => {
  return (
    <div style={{ padding: "300px 0" }}>
      <h2 className={css.title}>Have any questions?</h2>
      <p className={css.secondaryText}>
        Send your inquiry to our support team <a href={"/"}>here</a> or use
        alternative methods
      </p>

      <ul className={css.linksList}>
        <li>
          <a href={"/"}> Telegram bot</a>
        </li>
        <li>
          <a href={"/"}>Instagram</a>
        </li>
        <li>
          <a href={"/"}> Gmail</a>
        </li>
      </ul>
    </div>
  );
};

export default Support;
