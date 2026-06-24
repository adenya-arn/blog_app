import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  }

  return (
    <main id="register-page">
      <h1>Create Account</h1>

      <form id="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />

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

        <button type="submit">Register</button>
      </form>
    </main>
  );
}

export default Register;
