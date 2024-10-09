import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function CreatePage() {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

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
      <PostForm
        savePost={handleSubmit}
        image={image}
        setImage={setImage}
        caption={caption}
        setCaption={setCaption}
      />
    </section>
  );
}
