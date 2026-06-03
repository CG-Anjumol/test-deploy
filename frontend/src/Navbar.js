import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
    const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#333",
      padding: "15px",
      color: "white"
    }}>
      <h3 style={{margin: 0}}>My App</h3>

      <div>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/admin")}>Admin</button>
        
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
