import { useEffect, useState } from "react";

import API from "./api";
import Navbar from "./Navbar";
import "./App.css";

export default function Admin() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    API.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);


  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Users List</h2>

       

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}