import { useEffect, useState } from "react";
import api from "../api/api";

export default function ManageComments() {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    try {
      const response = await api.get("/comments");
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm("Delete this comment?");

    if (!confirmed) return;

    try {
      await api.delete(`/comments/${id}`);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="manage-comments-page">
      <h1>Manage Comments</h1>

      <div id="comments-list">
        {comments.length === 0 ? (
          <p>No comments found.</p>
        ) : (
          comments.map((comment) => (
            <div className="admin-comment-card" key={comment.id}>
              <h3>{comment.post.title}</h3>

              <p>{comment.content}</p>

              <p>
                <strong>Author:</strong> {comment.user?.username}
              </p>

              <button
                className="delete-btn"
                onClick={() => handleDelete(comment.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
