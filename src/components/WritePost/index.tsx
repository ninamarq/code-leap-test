import { useContext, useState, ChangeEvent } from "react";

import UserContext from "../../context/UserContext";
import { createPost } from "../../services/createPost";
import { updatePost } from "../../services/updatePost";

export function WritePost(props: {
  typePost: string;
  id: number | undefined;
  user: string;
  click: (value: boolean) => void;
}) {
  const { typePost, id, user, click } = props;
  const { setCreating } = useContext(UserContext);
  const [currentPost, setCurrentPost] = useState({
    username: user,
    title: "",
    content: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPost({
      ...currentPost,
      [event.target.id]: event.target.value,
    });
  };

  const handleClick = () => {
    setCurrentPost({
      username: user,
      title: "",
      content: "",
    });
    setCreating?.(true);
    click(false);
    return typePost === "SAVE"
      ? updatePost(currentPost, id)
      : createPost(currentPost);
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPost({
      ...currentPost,
      [event.target.id]: event.target.value,
    });
  };

  return (
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
        <textarea
          id="content"
          placeholder="Content here"
          value={currentPost.content}
          onChange={(e) => handleTextAreaChange(e)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        {typePost}
      </button>
    </section>
  );
}
