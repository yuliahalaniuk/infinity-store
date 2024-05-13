import React from "react";
import StepsList from "../AboutStepsBar/StepsList";
import css from "./AboutUs.module.css";

const AboutUsHeader = ({
  activeIdx,
  tabs,
}: {
  activeIdx: number;
  tabs: any;
}) => {
  return (
    <div className={css.containerSecondaryHeader}>
      <p style={{ padding: "8px" }}>
        <a className={css.InfinityStore2} href="/main">
          INFINITY STORE
        </a>
      </p>
      <StepsList tabs={tabs} activeIdx={activeIdx} />
    </div>
  );
};

export default AboutUsHeader;
