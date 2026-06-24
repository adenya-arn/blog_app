import { useEffect, useState } from "react";
import { api } from "../api/api";
import PostCard from "../components/PostCard.jsx";
import Layout from "./Layout.jsx";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/posts");

        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);
  return (
    <Layout>
      <main id="home-page">
        <h1 id="page-title">Latest Posts</h1>

        <div id="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
