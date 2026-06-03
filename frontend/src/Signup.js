import { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await API.post("/signup", { email, password });
      
      setMsg(res.data.message);   // ✅ show message
      
      setTimeout(() => {
        navigate("/");            // ✅ redirect to login
      }, 1000);

    } catch (err) {
      setMsg(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" onChange={(e)=>setPassword(e.target.value)} />
      
      <button onClick={handleSignup}>Signup</button>

      <p>{msg}</p> {/* ✅ message UI */}

      <a href="/">Already have account? Login</a>
    </div>
  );
}