import axios from "axios";
#good
const API = axios.create({
  baseURL: "http://localhost:8000"
});

export default API;