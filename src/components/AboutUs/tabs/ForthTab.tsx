import React from "react";
import styles from "../AboutUs.module.css";

const ForthTab = () => {
  return (
    <div>
      <p className={styles.DoYouWant}>
        Do you want to publish or showcase your development to the world?{" "}
        <b>Good idea!</b> To publish your product on our website, please read
        the following terms and adhere to them
      </p>
      <br />
      <p className={styles.Otherwise}>
        otherwise, your product won't be approved for the site
      </p>
      <br />
      <ol
        className={`${styles.Project} ${styles.publication}`}
        id="Project_publication"
      >
        <li className={styles.point1}>
          Register on our platform or log in using any convenient method
        </li>
        <li className={styles.point2}>
          Read and agree to the rules and conditions of our service
        </li>
        <li className={styles.point3}>
          Provide your details, all necessary details you can find in our help
          book
        </li>
        <li className={styles.point4}>
          Make the initial payment if it's a paid game; otherwise, no payment is
          required
        </li>
        <li className={styles.point5}>
          Provide a detailed description and attach photos/videos
        </li>
      </ol>
    </div>
  );
};

export default ForthTab;
