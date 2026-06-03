import { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", { email, password });

      setMsg(res.data.message);

      // ✅ store user
      localStorage.setItem("user", email);

      // ✅ redirect
      navigate("/home");

    } catch (err) {
      setMsg(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="container">

      <h2>Login</h2>

      <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>

      <button onClick={handleLogin}>Login</button>

      <p>{msg}</p>

      <a href="/signup">Signup</a>
    </div>
  );
}