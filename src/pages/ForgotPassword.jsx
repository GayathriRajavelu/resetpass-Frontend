import { useState } from "react";
import API from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("auth/forgot-password", { email });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgot}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
