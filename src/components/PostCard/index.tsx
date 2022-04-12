import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./style.scss";

import UserContext from "../../context/UserContext";
import IPosts from "../../interfaces/IPosts";
import { convertDate } from "../../services/convertDate";
import { DeleteSure } from "../DeleteSure";
import { EditPost } from "../EditPost";

export function PostCard(props: { postObject: IPosts }) {
  const { setEditing, username } = useContext(UserContext);
  const [deleting, setDeleting] = useState(false);
  const { postObject } = props;
  const { id, title, created_datetime, content } = postObject;
  const handleDelete = () => {
    setEditing?.("editingPost");
    setDeleting(true);
  };
  return (
    <section key={id} className="post-card">
      <header>
        <h2>{title}</h2>
        {postObject.username === username && (
          <div>
            <MdDeleteForever onClick={handleDelete} />
            <EditPost postId={id} postUser={username} />
          </div>
        )}
        {deleting && <DeleteSure sure={setDeleting} id={id} />}
      </header>
      <main>
        <div className="user-time-post">
          <p>@{postObject.username}</p>
          <p>{convertDate(created_datetime)}</p>
        </div>
        <p className="content-card">{content}</p>
      </main>
    </section>
  );
}
