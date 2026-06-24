import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/api";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/posts/${id}`);

        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();
  }, [id]);

  async function handleSubmit(formData) {
    try {
      await api.put(`/posts/${id}`, formData);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div id="edit-post-page">
      <h1>Edit Post</h1>

      <PostForm initialData={post} onSubmit={handleSubmit} />
    </div>
  );
}
