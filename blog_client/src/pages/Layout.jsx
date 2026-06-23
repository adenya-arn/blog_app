import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div id="layout">
      <header id="header">
        <div id="header-container">
          <Link id="logo" to="/">
            Arnold's Blog
          </Link>
        </div>
      </header>

      <main id="main-content">{children}</main>
    </div>
  );
}
