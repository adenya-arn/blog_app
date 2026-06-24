import AdminNavbar from "./AdminNavbar";

export default function Layout({ children }) {
  return (
    <>
      <AdminNavbar />

      <main id="main-content">{children}</main>
    </>
  );
}
