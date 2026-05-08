import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");


  function handleSubmit(event){
    event.preventDefault();
    const blog = {title, body, author};
console.log(blog);
  }
  return (
    <div>
      <h1>Add a new Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          required
        />
        <label>Blog Body:</label>
        <textarea value={body} onChange={(event) => setBody(event.target.value)} required></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(event) => setAuthor(event.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;
