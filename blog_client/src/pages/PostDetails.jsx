import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "./Layout";
import CommentList from "../components/Commentlist";
import CommentForm from "../components/CommentForm";

import { getPost, getComments, createComment } from "../api/api";

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadData() {
      const postData = await getPost(id);
      const commentData = await getComments(id);

      setPost(postData);
      setComments(commentData);
    }

    loadData();
  }, [id]);

  async function handleComment(content) {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const newComment = await createComment(id, content, token);

    setComments((prev) => [newComment, ...prev]);
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <article id="single-post">
        <h1>{post.title}</h1>

        <p>By {post.author?.username}</p>

        <p>{post.content}</p>

        <CommentForm onSubmit={handleComment} />

        <CommentList comments={comments} />
      </article>
    </Layout>
  );
}
