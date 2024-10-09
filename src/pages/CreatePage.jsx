import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
const [caption, setCaption] = useState("");
const [image, setImage] = useState("");

const navigate = useNavigate();

async function handleSubmit(event) {
  event.preventDefault();

  const newPost = {
    uid: "fTs84KRoYw5pRZEWCq2Z", //default user id added
    caption,
    image,
  };

  const url =
    "https://fir-first-project-dd653-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newPost),
  });

  if (response.ok) {
    navigate("/");
  } else {
    console.error("Failed to create new post"); //error makes it red in the console
  }
}
  return (
    <section className="page">
      <h1>Create new post</h1>
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
        <button type="submit">SAVE</button>
      </form>
    </section>
  );
}
