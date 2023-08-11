import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Game } from "../components/Game";
import { Score } from "../components/Score";
import { useEffect } from "react";

function GamePage({ user, setUser }) {
  // useEffect(() => {
  //   try {
  //     const userJSON = localStorage.getItem("user");
  //     if (userJSON) {
  //       setUser(JSON.parse(userJSON));
  //     }
  //   } catch (error) {
  //     console.error(
  //       "Erreur lors de la récupération depuis le local storage :",
  //       error
  //     );
  //     return null;
  //   }
  // }, []);

  return (
    <div>
      <Header setUser={setUser} />
      <Score user={user} />
      <Game setUser={setUser} />
    </div>
  );
}

export default GamePage;
