import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header";
import { Game } from "../components/Game";
import { Score } from "../components/Score";
import type { User } from "./Type";

interface Props {
  user:User
  setUser:Dispatch<SetStateAction<User>>
}

function GamePage({user, setUser}: Props ) {
  return (
    <div>
      <Header setUser={setUser} user={user} />
      <Score user={user} />
      <Game setUser={setUser} />
    </div>
  );
}

export default GamePage;
