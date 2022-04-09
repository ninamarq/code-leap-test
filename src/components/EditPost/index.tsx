import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";

import UserContext from "../../context/UserContext";
import { WritePost } from "../WritePost";

export function EditPost(props: {
  postId: number | undefined;
  postUser: string;
}) {
  const { setEditing } = useContext(UserContext);
  const { postId, postUser } = props;
  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    setEdit(true);
    setEditing?.("editingPost");
  };

  return edit ? (
    <WritePost typePost="SAVE" id={postId} user={postUser} click={setEdit} />
  ) : (
    <FaEdit onClick={handleClick} />
  );
}
