import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import { createPost } from "../../services/createPost";
import { getPosts } from "../../services/getPosts";

export default function PostWriting() {
  const { username, posts, setPosts } = useContext(UserContext);
  const [currentPost, setCurrentPost] = useState({
    username,
    title: "defaultTitle",
    content: "defaultContent",
  });

  const handleChange = (event: { target: HTMLInputElement }) => {
    setCurrentPost({
      ...currentPost,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const postsAPI = async () => setPosts?.(await getPosts());
    postsAPI();
  }, [posts]);

  return (
    <div>
      <h2>What’s on your mind?</h2>
      <section>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            placeholder="Hello world!"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="content">
          Content
          <input
            id="content"
            type="textarea"
            placeholder="Content here"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="button" onClick={() => createPost(currentPost)}>
          CREATE
        </button>
      </section>
    </div>
  );
}
