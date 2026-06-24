import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
// import ManageComments from "./pages/ManageComments";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-post"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-post/:id"
          element={
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/comments/:id"
          element={
            <ProtectedRoute>
              <ManageComments />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
