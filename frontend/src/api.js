import axios from "axios";
#good
const API = axios.create({
  baseURL: "http://localhost:8001",
});

export default API;