import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/reset-password/${token}`, { password });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>

      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
