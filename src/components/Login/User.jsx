import React from "react";
import styles from "./Login.module.css";


const User = ({ setUsername }) => {
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        onChange={handleChange}
        autoComplete="username"
      />
    </div>
  );
};

export default User;
