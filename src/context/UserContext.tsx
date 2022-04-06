import React, { createContext } from "react";

interface IPosts {
  id: number;
  title: string;
  content: string;
}

interface IUser {
  username: string;
  posts?: IPosts[];
}

const AppContext = createContext<IUser>({ username: '', posts: [] });

const Provider: React.FC<React.ReactNode> = ({ children }) => {
  const [username, setUsername] = React.useState("");

  const objStates = {
    username,
    setUsername,
  };
  return <AppContext.Provider value={objStates}>{children}</AppContext.Provider>;

}

export default Provider;
