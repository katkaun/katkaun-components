import React from "react";
import styles from "./Login.module.css";

const Password = ({ setPassword }) => {
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
        autoComplete="current-password"
      />
    </div>
  );
};

export default Password;
