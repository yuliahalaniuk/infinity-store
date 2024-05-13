import React from "react";
import css from "../AboutUs.module.css";

const FirstTab = () => {
  return (
    <div className={css.firstTab}>
      <div className={css.firstTabLeftSide}>
        <p className={css.WeARE}>
          We are a team of aspiring developers united by a common idea, and
          we've decided to create our project called
        </p>
        <p className={css.inf}>Infinity Store</p>
        <div>
          <p className={css.WeBelive}>
            We believe that our project will help the Ukrainian game development
            community showcase their talents and skills, demonstrating the
            products they can ultimately deliver. Users will have the
            opportunity to evaluate and play projects from unknown developers.
          </p>
        </div>

        <div>
          <p className={css.ThereIsNoPlatform}>
            There is no platform that facilitates the same level of creativity
            among developers as ours. We can confidently say that by choosing
            INFINITY STORE, you will opt for the best solution among all
          </p>
        </div>
      </div>
      <div className={css.step1}>
        <a className={css.Generate} href="/">
          Generate
        </a>
        <a className={css.Create} href="/">
          Create
        </a>
        <a className={css.Publicate} href="/">
          Publicate
        </a>
      </div>
    </div>
  );
};

export default FirstTab;
