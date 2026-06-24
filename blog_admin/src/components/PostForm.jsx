import { useState } from "react";

export default function PostForm({ initialData, onSubmit }) {
  const [title, setTitle] = useState(initialData?.title || "");

  const [content, setContent] = useState(initialData?.content || "");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title,
      content,
    });
  }

  return (
    <form id="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>

        <textarea
          id="content"
          rows="12"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button type="submit">Save Post</button>
    </form>
  );
}
