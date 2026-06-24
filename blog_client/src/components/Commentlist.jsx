export default function CommentList({ comments }) {
  return (
    <section id="comments-section">
      <article className="comment-card">
        <h2>Comments</h2>

        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <h4 className="comment-author">{comment.user?.username}</h4>

              <p className="comment-content">{comment.content}</p>
            </div>
          ))
        )}
      </article>
    </section>
  );
}
