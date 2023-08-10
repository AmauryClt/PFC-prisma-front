import React, { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLogin = async () => {
    if (name) {
      try {
        const response = await fetch("http://localhost:5000/player", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          const responseData = await response.json();
          setDisplayName(responseData.name);
          setErrorMessage("");
          console.info(responseData)
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message);
        }
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    } else {
      console.log("Veuillez entrer un nom");
    }
  };

  return (
    <div>
      {displayName ? (
        <div className={styles.headerSizeLogout}>
          <h1>Welcome, {displayName} !</h1>
          <button onClick={() => setDisplayName("")}>Logout</button>
        </div>
      ) : (
        <div className={styles.headerSizeLogin}>
          <h1>Welcome </h1>
          <input
            type="text"
            className={styles.inputHeader}
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <button 
            onClick={handleLogin}
            className={styles.buttonHeader}
          >Login</button>
          <h1> !</h1>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}
