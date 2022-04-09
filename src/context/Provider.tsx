import { useState } from "react";

import AppContext from "./UserContext";

export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

function Provider({ children }: IProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([
    { id: 0, title: "none", content: "none", username: "" },
  ]);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState("editing");

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const objStates = {
    username,
    setUsername,
    posts,
    setPosts,
    creating,
    setCreating,
    editing,
    setEditing,
  };

  return (
    <AppContext.Provider value={objStates}>{children}</AppContext.Provider>
  );
}

export default Provider;
