import { useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import UserContext from "../../context/UserContext";
import { getPosts } from "../../services/getPosts";

export default function PostList() {
  const { setPosts, posts, creating, setCreating } = useContext(UserContext);

  useEffect(() => {
    const postsAPI = async () => setPosts?.(await getPosts());
    postsAPI();
    setCreating?.(false);
  }, [creating]);

  return (
    <div>
      {posts?.map((element) => (
        <section key={element.id}>
          <header>
            <h1>{element.title}</h1>
            <FaEdit onClick={() => console.log("Edit")} />
            <MdDeleteForever onClick={() => console.log("Delete")} />
          </header>
          <div>
            <p>{element.username}</p>
            <p>{element.created_datetime}</p>
          </div>
          <p>{element.content}</p>
        </section>
      ))}
    </div>
  );
}
