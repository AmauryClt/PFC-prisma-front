import React, { useState } from "react";
import "./Game.css";
import paper from "/papers.svg";
import rock from "/rock.svg";
import scissors from "/scissors.svg";

export const Game = () => {
  interface User1 {
    name: string;
    score: number;
  }
  const [user1, setUser1] = useState({ name: "wilou", score: 0 });

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("start");

  const fight = (choice: string) => {
    const choices = ["rock", "paper", "scissors"];
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
    setPlayerChoice(choice);

    console.log(`choix ordi ${computerChoice}`);
    console.log(`choix joueur ${playerChoice}`);
    console.log(`user ${user1.score}`);

    if (playerChoice === "rock" && computerChoice === "scissors") {
      setResult("You win");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setResult("lose");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setResult("win");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setResult("lose");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setResult("win");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setResult("lose");
      setUser1((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else {
      setResult("draw");
    }

    console.log(result);
  };

  return (
    <div className="game">
      <div className="game-rock">
        <button onClick={() => fight("rock")}>
          <img src={rock} />
        </button>
      </div>
      <div className="game-paper">
        <button onClick={() => fight("paper")}>
          <img src={paper} />
        </button>
      </div>
      <div className="game-scissors">
        <button onClick={() => fight("scissors")}>
          <img src={scissors} />
        </button>
      </div>
    </div>
  );
};
