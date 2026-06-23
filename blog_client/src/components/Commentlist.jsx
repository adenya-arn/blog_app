export default function CommentList({ comments }) {
  return (
    <div id="comments-section">
      <h2>Comments</h2>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h4>{comment.user?.username}</h4>

            <p>{comment.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
