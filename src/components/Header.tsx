import React, { useState } from "react";

export default function Header() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [existingUser, setExistingUser] = useState(false);
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
          setExistingUser(responseData.existingUser);
          setErrorMessage("");
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

  const handleLogout = () => {
    setExistingUser(false);
    setDisplayName("");
  };

  return (
    <div>
      {existingUser ? (
        <div>
          <h1>Welcome back, {displayName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {displayName}!</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}
