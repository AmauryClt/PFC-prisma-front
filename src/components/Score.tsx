import React, { useEffect } from "react";
import styles from "./score.module.scss";

export const Score: React.FC = ({ user }) => {

  useEffect(() => {
    const updateScore = async () => {
      try {
        const response = await fetch(`http://localhost:5000/player/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          console.log("Score updated successfully.");
        } else {
          console.error("Failed to update score.");
        }
      } catch (error) {
        console.error("Error updating score:", error);
      }
    };

    updateScore();
  }, [user.score, user.id]);

  return (
    <div className={styles.scoreContent}>
      <div>
        <h2>Score :</h2>
        <p>{user.score}</p>
      </div>
    </div>
  );
};
