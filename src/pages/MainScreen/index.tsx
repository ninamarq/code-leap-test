import Header from "../../components/Header";
import PostList from "../../components/PostList";
import PostWriting from "../../components/PostWriting";

function MainScreen() {
  return (
    <div>
      <Header />
      <PostWriting />
      <PostList />
    </div>
  );
}

export default MainScreen;
