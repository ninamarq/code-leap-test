import Header from "../../components/Header";
import PostList from "../../components/PostList";
import PostWriting from "../../components/PostWriting";
import "./style.scss";

function MainScreen() {
  return (
    <div className="main-screen-container">
      <Header />
      <PostWriting />
      <PostList />
    </div>
  );
}

export default MainScreen;
