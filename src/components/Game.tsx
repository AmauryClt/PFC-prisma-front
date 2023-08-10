import React, { useState } from "react";
import "./Game.css";
import paper from "/papers.svg";
import rock from "/rock.svg";
import scissors from "/scissors.svg";

export const Game = ({ setUser }) => {
  interface User1 {
    name: string;
    score: number;
  }

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("start");

  const fight = (choice: string) => {
    const choices = ["rock", "paper", "scissors"];
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
    setPlayerChoice(choice);

    setTimeout;
    if (playerChoice === "rock" && computerChoice === "scissors") {
      setResult("You win");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setResult("lose");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setResult("win");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setResult("lose");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setResult("win");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setResult("lose");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else {
      setResult("draw");
    }
  };

  return (
    <>
      <div>
        <h3>{result}</h3>
      </div>
      <div className="game">
        <div className="game-rock" onClick={() => fight("rock")}>
          <img src={rock} />
        </div>
        <div className="game-paper" onClick={() => fight("paper")}>
          <img src={paper} />
        </div>
        <div className="game-scissors" onClick={() => fight("scissors")}>
          <img src={scissors} />
        </div>
      </div>
    </>
  );
};
