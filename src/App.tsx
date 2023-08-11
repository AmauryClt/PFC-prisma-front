import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import Result from "./pages/Result";

type User = {
  id?: number;
  name?: string;
  score?: number;
};
function App() {
  const [user, setUser] = useState<User>({});

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
