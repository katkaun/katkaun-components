import React, { useState } from "react";
import styles from "./Login.module.css";
import User from "./User"; 
import Password from "./Password"; 
import Button from "../Button/Button";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, password);
      setError(null);
    } else {
      setError("All fields are required");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.card}> 
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleLogin} className={styles.forminput}>
          <User setUsername={setUsername} />
          <Password setPassword={setPassword} />
          <Button title="Login" onClick={handleLogin} className={styles.submitButton} /> 
        </form>
      </div>
    </div>
  );
};

export default Login;