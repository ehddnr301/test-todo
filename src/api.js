import axios from "axios";

const api = axios.create({
  baseURL: "https://fathomless-temple-42089.herokuapp.com/"
});

const api1 = axios.create({
  baseURL: "http://localhost:5000/"
});

export const todoApi = {
  getAllTodo: () => api1.get("todo/list"),
  getTodoDetail: id => api1.get(`todo/${id}`),
  createTodo: () => api.post("todo")
};

export const userApi1 = {
  userDetail: id => api1.get(`user/${id}`),
  user: () => api1.get("user/user")
};
