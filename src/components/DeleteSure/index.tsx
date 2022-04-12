import { useContext } from "react";

import UserContext from "../../context/UserContext";
import { deletePost } from "../../services/deletePost";
import "./style.scss";

export function DeleteSure(props: {
  sure: (value: boolean) => void;
  id: number | undefined;
}) {
  const { sure, id } = props;
  const { setCreating, setEditing } = useContext(UserContext);

  const handleDelete = () => {
    sure(false);
    deletePost(id);
    setCreating?.(true);
    setEditing?.("");
  };

  return (
    <div className="DELETE">
      <p>Are you sure you want to delete this item?</p>
      <section>
        <button type="button" onClick={() => sure(false)}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete}>
          OK
        </button>
      </section>
    </div>
  );
}
