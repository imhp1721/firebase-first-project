import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://fir-first-project-dd653-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      })); //from object to array
      setPosts(postsArray);
    }
    getPosts();
  }, []);

  return (
    <section className="grid">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
}
