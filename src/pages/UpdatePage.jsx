import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

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
      <PostForm
        savePost={handleSubmit}
        image={image}
        setImage={setImage}
        setCaption={setCaption}
        caption={caption}
      />
      <button onClick={deletePost} type="delete">
        DELETE POST
      </button>
    </section>
  );
}
