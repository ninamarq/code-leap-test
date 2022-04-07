import { useContext } from "react";

import UserContext from "../../context/UserContext";

export default function Header() {
  const { username } = useContext(UserContext);

  return (
    <header>
      <h2>CodeLeap Network</h2>
      <h3>{username}</h3>
    </header>
  );
}
