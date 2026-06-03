
import Navbar from "./Navbar";
import "./App.css";

export default function Home() {
 
  const user = localStorage.getItem("user");



  return (
    <>
      {/* ✅ Navbar outside */}
      <Navbar />
      
        

      {/* ✅ Only one container */}
      <div className="container">
        <h1>Welcome</h1>
        <h3>{user}</h3>

       
      </div>
    </>
  );
}
