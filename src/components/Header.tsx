import { Dispatch, SetStateAction } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { User } from "../pages/Type";

interface Props {
  user:User
  setUser:Dispatch<SetStateAction<User>>
}

export default function Header({ user, setUser }: Props) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLogin = async () => {
    if (name) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/player`, {
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
          setUser(responseData);
          console.info(responseData);
          navigate("/GamePage");
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

  const logout = () => {
    setDisplayName("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      {displayName ? (
        <div className={styles.headerSizeLogout}>
          <h1>Welcome, {user.name} !</h1>
          <button onClick={logout}>Logout</button>
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
          <button onClick={handleLogin} className={styles.buttonHeader}>
            Login
          </button>
          <h1> !</h1>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}
