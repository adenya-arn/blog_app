import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav id="navbar">
      <Link to="/">Blog</Link>

      <div id="nav-links">
        {token ? (
          <button id="logout-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
