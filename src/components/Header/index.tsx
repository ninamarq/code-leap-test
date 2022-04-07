import { useContext } from "react";

import UserContext from "../../context/UserContext";

export default function Header() {
  const { username } = useContext(UserContext);

  return (
    <header>
      <h1>CodeLeap Network</h1>
      <h3>{username}</h3>
    </header>
  );
}
