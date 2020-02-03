import React, { useState, useEffect } from "react";
import { userApi, ua } from "../api";

const Home = () => {
  const [todo, setTodo] = useState(null);
  const [user, setUser] = useState(null);

  const didMount = async () => {
    try {
      await userApi.user();
    } catch {
      console.log("erro");
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <form
      action="https://fathomless-temple-42089.herokuapp.com/todo/create"
      method="post"
    >
      <input type="text" name="title" placeholder="title" required></input>
      <input type="text" name="description" placeholder="description"></input>
      <input type="text" name="todo" placeholder="todo"></input>
      <input type="submit" value="생성"></input>
    </form>
  );
};

export default Home;
