import axios from "axios";
#good
const API = axios.create({
  baseURL: "http://backend:8000"
});

export default API;