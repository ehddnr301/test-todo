import axios from "axios";

const api = axios.create({
  baseURL: "https://fathomless-temple-42089.herokuapp.com/"
});

const api1 = axios.create({
  baseURL: "http://localhost:5000/"
});

export const todoApi = {
  getAllTodo: () => api1.get("todo/list"),
  createTodo: () => api.post("todo")
};

export const userApi = {
  authenticate: () => api.post("auth"),
  user: () => api1.get("user/user")
};
