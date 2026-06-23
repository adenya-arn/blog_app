import { useState } from "react";
export default function CommentForm({ onSubmit }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(content);

    setContent("");
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
      />

      <button type="submit">Add Comment</button>
    </form>
  );
}
