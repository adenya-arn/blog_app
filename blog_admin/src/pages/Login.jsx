import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

export default function Login() {
  const naviate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data.token);

      naviate("/");
    } catch (error) {
      console.error(error);

      alert("Login failed");
    }
  }
  return (
    <main id="login-page">
      <h1>Admin Login</h1>

      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
