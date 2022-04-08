import { useContext } from "react";

import UserContext from "../../context/UserContext";
import "./style.scss";

export default function Header() {
  const { username } = useContext(UserContext);

  return (
    <header className="main-screen-header">
      <h2>CodeLeap Network</h2>
    </header>
  );
}
