import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2 className="post-title">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>

      <p className="post-author">By {post.author?.username}</p>

      <p className="post-preview">{post.content.slice(0, 120)}...</p>

      <Link className="read-more-btn" to={`/posts/${post.id}`}>
        Read More
      </Link>
    </article>
  );
}
