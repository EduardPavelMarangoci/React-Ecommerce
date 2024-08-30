import axios from "axios";

const API = axios.create({
  baseURL: "https://springboot-ecommerce-v1gh.onrender.com/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
