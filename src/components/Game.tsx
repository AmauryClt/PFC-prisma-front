import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Game.css";
import paper from "/papers1.png";
import rock from "/rock1.png";
import scissors from "/scissors1.png";
import vs from "/vs1.png";

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

    if (playerChoice === "rock" && computerChoice === "scissors") {
      setResult("You Win! 🎉");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setResult("You Lose... 🙁");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setResult("You Win! 🎉");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setResult("You Lose... 🙁");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setResult("You Win! 🎉");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setResult("You Lose... 🙁");
      setUser((prevUser: User1) => ({
        ...prevUser,
        score: prevUser.score - 1,
      }));
    } else {
      setResult("draw 🤝");
    }
  };

  return (
    <>
      <div className="game-info">
        <h3>{result}</h3>
      </div>
      <section className="game-mainSection">
        <div className="game">
          <h2>Choose :</h2>
          <div className="game-choice">
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
        </div>
        <div className="vs">
          <img src={vs} alt="" />
        </div>
        <div className="game-computer">
          <h2>Computer choice</h2>
          <CircularProgress color="success" className="loading" />
        </div>
      </section>
    </>
  );
};
