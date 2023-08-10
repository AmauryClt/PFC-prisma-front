import React from "react";
import { useUser } from "../contexts/UserContext";

interface User {
  name: string;
  score: number;
}

export const Score: React.FC = () => {
  const { user }: User = useUser();

  return (
    <div>
      <h2>Score :</h2>
      <p>{user.score}</p>
    </div>
  );
};
