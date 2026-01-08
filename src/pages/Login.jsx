import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/login", { email, password });
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <span className="link" onClick={() => navigate("/forgot-password")}>
        Forgot Password?
      </span>

      <p className="text">
        New user?{" "}
        <span className="link" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
