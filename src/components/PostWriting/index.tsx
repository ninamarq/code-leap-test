import { useState, useContext } from "react";

import UserContext from "../../context/UserContext";
import { createPost } from "../../services/createPost";

export default function PostWriting() {
  const { username, setCreating, creating } = useContext(UserContext);
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

  const handleCreating = () => {
    console.log(creating);
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
        <button type="button" onClick={handleCreating}>
          CREATE
        </button>
      </section>
    </div>
  );
}
