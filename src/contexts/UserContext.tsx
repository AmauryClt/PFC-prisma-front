import React, { createContext, useContext, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

interface User {
  name: string;
  score: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userTest = {
    name: "hello",
    score: 0,
  };
  const [user, setUser] = useState(userTest);

  const contextValue = useMemo<UserContextType>(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <UserContext.Provider value={({ user: user }, { setuser: setUser })}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
