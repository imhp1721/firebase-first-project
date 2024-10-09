export default function PostForm({
  savePost,
  image,
  caption,
  setCaption,
  setImage,
}) {
  return (
    <form onSubmit={savePost}>
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
          image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"
        }
        alt="Preview"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/600x400?text=Error+loading+image")
        }
      />
      <button type="submit">SAVE</button>
    </form>
  );
}
