import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import IPosts from "../../interfaces/IPosts";

export function PostCard(props: { postObject: IPosts }) {
  const { postObject } = props;
  const { id, title, username, created_datetime, content } = postObject;
  return (
    <section key={id}>
      <header>
        <h1>{title}</h1>
        <FaEdit onClick={() => console.log("Edit")} />
        <MdDeleteForever onClick={() => console.log("Delete")} />
      </header>
      <div>
        <p>{username}</p>
        <p>{created_datetime}</p>
      </div>
      <p>{content}</p>
    </section>
  );
}
