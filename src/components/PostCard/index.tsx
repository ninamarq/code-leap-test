import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./style.scss";

import IPosts from "../../interfaces/IPosts";

export function PostCard(props: { postObject: IPosts }) {
  const { postObject } = props;
  const { id, title, username, created_datetime, content } = postObject;
  return (
    <section key={id} className="post-card">
      <header>
        <h2>{title}</h2>
        <div>
          <MdDeleteForever onClick={() => console.log("Delete")} />
          <FaEdit onClick={() => console.log("Edit")} />
        </div>
      </header>
      <main>
        <div className="user-time-post">
          <p>@{username}</p>
          <p>{created_datetime}</p>
        </div>
        <p>{content}</p>
      </main>
    </section>
  );
}
