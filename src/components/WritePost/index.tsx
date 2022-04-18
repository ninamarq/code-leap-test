import { useContext, useState, ChangeEvent } from "react";
import "./style.scss";

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
  const { setCreating, setEditing, username } = useContext(UserContext);
  const [currentPost, setCurrentPost] = useState({
    username: typePost === "CREATE" ? username : user,
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
    setCreating?.(true);
    setCurrentPost({
      username: "",
      title: "",
      content: "",
    });
    setEditing?.("notEditing");
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
    <section className={typePost}>
      {typePost === "SAVE" && <h1>Edit Item</h1>}
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
