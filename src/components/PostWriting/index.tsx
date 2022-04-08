import { useState, useContext } from "react";

import UserContext from "../../context/UserContext";
import { createPost } from "../../services/createPost";

export default function PostWriting() {
  const { username, setCreating } = useContext(UserContext);
  const [currentPost, setCurrentPost] = useState({
    username,
    title: "",
    content: "",
  });

  const handleChange = (event: { target: HTMLInputElement }) => {
    setCurrentPost({
      ...currentPost,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreating = () => {
    setCurrentPost({
      username,
      title: "",
      content: "",
    });
    setCreating?.(true);
    createPost(currentPost);
  };

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
            value={currentPost.title}
          />
        </label>
        <label htmlFor="content">
          Content
          <input
            id="content"
            type="textarea"
            placeholder="Content here"
            value={currentPost.content}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="button" onClick={handleCreating}>
          CREATE
        </button>
      </section>
    </div>
  );
}
