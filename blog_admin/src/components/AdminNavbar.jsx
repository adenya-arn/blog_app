import { Link } from "react-router-dom";

export default function AdminNavbar() {
  function logout() {
    localStorage.removeItem("token");

    window.location.href = "/login";
  }

  return (
    <nav id="admin-navbar">
      <Link to="/">Dashboard</Link>

      <Link to="/create-post">New Post</Link>

      <Link to="/comments">Comments</Link>

      <button id="logout-btn" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
