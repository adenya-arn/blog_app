import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/posts/${post.id}`} className="post-link">
        <h2 className="post-title">{post.title}</h2>
      </Link>

      <p className="post-author">By {post.author?.username}</p>

      <p className="post-preview">{post.content.slice(0, 150)}...</p>

      <Link to={`/posts/${post.id}`} className="read-more-btn">
        Read More
      </Link>
    </article>
  );
}
