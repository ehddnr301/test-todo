import React, { useState, useEffect } from "react";
import { todoApi, userApi1 } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [todo, setTodo] = useState(null);
  const [user, setUser] = useState(null);

  const didMount = async () => {
    try {
      const { data: todo } = await todoApi.getAllTodo();
      setTodo(todo);
      console.log(todo);
      // todo.map(t => console.log(t.title));
    } catch {
      console.log("erro");
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <>
      <form
        action="https://fathomless-temple-42089.herokuapp.com/todo/create"
        method="post"
      >
        <input type="text" name="title" placeholder="title" required></input>
        <input type="text" name="description" placeholder="description"></input>
        <input type="text" name="todo" placeholder="todo"></input>
        <input type="submit" value="생성"></input>
      </form>

      <div>
        {todo ? (
          <div>
            {todo.map(t => {
              return (
                <>
                  <Link to={`/todo/${t.id}`}>
                    <h5>title : {t.title}</h5>
                    <h6>description :{t.description}</h6>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default Home;
