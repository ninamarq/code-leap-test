import { useContext } from "react";

import PostList from "../../components/PostList";
import PostWriting from "../../components/PostWriting";
import UserContext from "../../context/UserContext";
import Header from "./Header";
import "./style.scss";

function MainScreen() {
  const { editing } = useContext(UserContext);
  return (
    <div className={`main-screen-container ${editing}`}>
      <Header />
      <PostWriting />
      <PostList />
    </div>
  );
}

export default MainScreen;
