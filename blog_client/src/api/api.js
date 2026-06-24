import axios from "axios";
// import { data } from "react-router-dom";

const API_URL = "http://localhost:3002";

export const api = axios.create({
  baseURL: API_URL,
});

export async function getPosts() {
  const response = await api.get("/posts");
  console.log(response);
  return response.data;
}

export async function getPost(id) {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

export async function getComments(postId) {
  const response = await api.get(`/comments/post/${postId}`);
  return response.data;
}

export async function createComment(postId, content, token) {
  const response = await api.post(
    `/comments/post/${postId}`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
