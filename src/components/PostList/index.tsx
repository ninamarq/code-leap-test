import { useContext, useEffect } from "react";
import "./style.scss";

import UserContext from "../../context/UserContext";
import { getPosts } from "../../services/getPosts";
import { PostCard } from "../PostCard";

export default function PostList() {
  const { setPosts, posts, creating, setCreating } = useContext(UserContext);

  useEffect(() => {
    const postsAPI = async () => setPosts?.(await getPosts());
    postsAPI();
    setCreating?.(false);
  }, [creating]);

  return (
    <div className="post-list-container">
      {posts?.map((element) => (
        <PostCard postObject={element} />
      ))}
    </div>
  );
}
