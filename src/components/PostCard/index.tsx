import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./style.scss";

import UserContext from "../../context/UserContext";
import IPosts from "../../interfaces/IPosts";
import { deletePost } from "../../services/deletePost";
import { EditPost } from "../EditPost";

export function PostCard(props: { postObject: IPosts }) {
  const { setCreating } = useContext(UserContext);
  const { postObject } = props;
  const { id, title, username, created_datetime, content } = postObject;
  const handleDelete = () => {
    setCreating?.(true);
    deletePost(id);
  };

  return (
    <section key={id} className="post-card">
      <header>
        <h2>{title}</h2>
        <div>
          <MdDeleteForever onClick={handleDelete} />
          <EditPost postId={id} postUser={username} />
        </div>
      </header>
      <main>
        <div className="user-time-post">
          <p>@{username}</p>
          <p>{created_datetime}</p>
        </div>
        <p className="content-card">{content}</p>
      </main>
    </section>
  );
}
