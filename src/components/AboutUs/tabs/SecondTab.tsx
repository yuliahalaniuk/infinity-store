import React from "react";
import css from "../AboutUs.module.css";
const SecondTab = () => {
  return (
    <ul className={css.secondTabList}>
      <li>
        <h1 className={css.Create}>1.Create</h1>
        <p className={css.text1}>
          Create and bring your idea to life! Develop a product or game that
          you've been dreaming about for a significant amount of time and
          publish it
        </p>
      </li>
      <li>
        <h1 className={css.Publish}>2.Publish</h1>
        <p className={css.text2}>
          Publication on our website follows two principles:<b>F2P</b> or{" "}
          <a className={css.NFP}>NFP Not Free Placement </a>Make this choice
          carefully and consider all the pros and cons
        </p>
      </li>
      <li>
        <h1 className={css.Analyze}>3.Analyze</h1>
        <p className={css.text3}>
          After publishing your product gather and analyze user feedback. All
          information is collected, analyzed and then presented in your personal
          account
        </p>
      </li>
      <li>
        <h1 className={css.Better}>4.Better</h1>
        <p className={css.text4}>
          Make your product better and grow with us! We will help in every way
          we can to make your product better and more popular
        </p>
      </li>
    </ul>
  );
};

export default SecondTab;
