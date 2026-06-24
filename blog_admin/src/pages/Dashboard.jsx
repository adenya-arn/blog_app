import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function deletePost(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async function togglePublish(id) {
    try {
      await api.patch(`/posts/${id}/publish`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="dashboard-page">
      <div id="dashboard-header">
        <h1>Dashboard</h1>

        <Link id="new-post-btn" to="/create-post">
          New Post
        </Link>
      </div>

      <div id="posts-list">
        {posts.map((post) => (
          <div className="dashboard-post" key={post.id}>
            <h2>{post.title}</h2>

            <p>
              Status:
              <strong>{post.published ? " Published" : " Draft"}</strong>
            </p>

            <div className="dashboard-actions">
              <button onClick={() => togglePublish(post.id)}>
                {post.published ? "Unpublish" : "Publish"}
              </button>

              <Link to={`/edit-post/${post.id}`}>Edit</Link>

              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
