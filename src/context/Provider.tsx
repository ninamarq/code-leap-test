import React, { useState } from "react";

import AppContext from "./UserContext";

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

function Provider({ children }: IProps): JSX.Element {
  const [username, setUsername] = useState("ola");

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const objStates = {
    username,
    setUsername,
  };

  return (
    <AppContext.Provider value={objStates}>{children}</AppContext.Provider>
  );
}

export default Provider;
