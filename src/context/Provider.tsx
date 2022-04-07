import { useState } from "react";

import AppContext from "./UserContext";

export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

function Provider({ children }: IProps): JSX.Element {
  const [username, setUsername] = useState("ola");
  const [posts, setPosts] = useState([
    { id: 0, title: "none", content: "none" },
  ]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const objStates = {
    username,
    setUsername,
    posts,
    setPosts,
  };

  return (
    <AppContext.Provider value={objStates}>{children}</AppContext.Provider>
  );
}

export default Provider;
