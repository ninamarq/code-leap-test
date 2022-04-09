import { useState } from "react";
import { FaEdit } from "react-icons/fa";

import { WritePost } from "../WritePost";

export function EditPost(props: {
  postId: number | undefined;
  postUser: string;
}) {
  const { postId, postUser } = props;
  const [editing, setEditing] = useState(false);
  const handleClick = () => {
    setEditing(true);
  };

  return editing ? (
    <WritePost typePost="SAVE" id={postId} user={postUser} click={setEditing} />
  ) : (
    <FaEdit onClick={handleClick} />
  );
}
