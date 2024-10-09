import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const url = `https://fir-first-project-dd653-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPost(data);
      setCaption(post.caption);
      setImage(post.image);
    }

    getPost();
  }, [post.caption, post.image, url]);

  async function handleSubmit(event) {
    event.preventDefault();

    const postToUpdate = {
      uid: post.uid,
      caption,
      image,
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate),
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.error("Failed to update post"); //error makes it red in the console
    }
  }

  async function deletePost(event) {
    event.preventDefault();
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      navigate("/");
    } else {
      console.error("Failed to delete post"); //error makes it red in the console
    }
  }

  return (
    <section className="page">
      <h1>Update post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="caption">Title</label>
        <input
          id="caption"
          type="text"
          value={caption}
          placeholder="Type a title"
          onChange={(e) => setCaption(e.target.value)}
        />
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="url"
          value={image}
          placeholder="Paste image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <img
          id="image-preview"
          className="image-preview"
          src={
            image
              ? image
              : "https://placehold.co/600x400?text=Paste+an+image+URL"
          }
          alt="Preview"
          onError={(e) =>
            (e.target.src =
              "https://placehold.co/600x400?text=Error+loading+image")
          }
        />
        <button type="submit">UPDATE POST</button>
      </form>
      <button onClick={deletePost} type="delete">
        DELETE POST
      </button>
    </section>
  );
}
