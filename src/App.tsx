import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import Result from "./pages/Result";
import type { User } from "./pages/Type";

// export type User = {
//   id?: number;
//   name?: string;
//   score?: number;
// };

function App() {
  const [user, setUser] = useState<User>({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/gamePage"
          element={<GamePage user={user} setUser={setUser} />}
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
