import { useEffect, useState } from "react";
import api from "../api/api.js";
import PostCard from "../components/PostCard.jsx";

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
    <main id="home-page">
      <section className="container">
        <header className="page-header">
          <h1 className="site-title">Arnold's Blog</h1>

          <p className="site-description">
            Thoughts, programming, and projects.
          </p>
        </header>

        <section className="posts-container">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </section>
    </main>
  );
}
