import { useState } from "react";
import Header from "./components/Header";
import { Game } from "./components/Game";
import { Score } from "./components/Score";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <Header setUser={setUser} />
      <Score user={user} />
      <Game setUser={setUser} />
    </div>
  );
}

export default App;
