import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function Post({post}) {
  const navigate = useNavigate();
  //{} used to omit props.post.uid but only post.uid
  /**
   * handleClick is called when user clicks on the Article (Post)
   */
  function handleClick() {
    navigate(`posts/${post.id}`);
  }

  return (
    <article className="user-card" onClick={handleClick}>
      <UserAvatar uid={post.uid} />
      <img src={post.image} alt={post.caption} />
      <h2>{post.caption}</h2>
    </article>
  );
}
