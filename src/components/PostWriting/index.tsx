import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import { getPosts } from "../../services/getPosts";

export default function PostWriting() {
  const { setPosts } = useContext(UserContext);
  const [currentPost, setCurrentPost] = useState({
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
  }, []);

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
        <button type="button">CREATE</button>
      </section>
    </div>
  );
}
