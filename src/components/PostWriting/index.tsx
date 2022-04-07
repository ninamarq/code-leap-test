import { useState, useContext } from "react";

import UserContext from "../../context/UserContext";

export default function PostWriting() {
  const { posts, setPosts } = useContext(UserContext);
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

  const handleClick = () => {
    if (posts?.[0].id === 0) {
      setPosts?.([
        { id: 1, title: currentPost.title, content: currentPost.content },
      ]);
    }
    return (
      posts &&
      setPosts?.([
        ...posts,
        {
          id: posts?.length,
          title: currentPost.title,
          content: currentPost.content,
        },
      ])
    );
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
        <button type="button">CREATE</button>
      </section>
    </div>
  );
}
