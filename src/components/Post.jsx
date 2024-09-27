import UserAvatar from "./UserAvatar";

export default function Post({post}) { //{} used to omit props.post.uid but only post.uid
  return (
    <article className="user-card">
      <UserAvatar uid={post.uid} />
      <img src={post.image} alt={post.caption} />
      <h2>{post.caption}</h2>
    </article>
  );
}
