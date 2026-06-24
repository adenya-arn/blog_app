import PostForm from "../components/PostForm";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    try {
      await api.post("/posts", formData);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="create-post-page">
      <h1>Create Post</h1>

      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
