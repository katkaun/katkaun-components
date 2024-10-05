import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, className }) => {
  if (!title) {
    console.error("title is missnig in login button");
  }
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${className}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
