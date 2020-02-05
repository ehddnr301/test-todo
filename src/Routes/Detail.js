import React, { useState, useEffect } from "react";
import { todoApi } from "../api";

const Detail = props => {
  const [todo, setTodo] = useState(null);
  const {
    match: {
      params: { id }
    },
    history: { push }
  } = props;

  const didMount = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    try {
      const { data } = await todoApi.getTodoDetail(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <div>
      <form
        action={`http://localhost:5000/todo/${id}/updateTodo`}
        method="post"
      >
        <input type="text" name="updateTodo" placeholder="Add Todo" required />
        <input type="submit" value="추가" />
      </form>

      <form
        method="post"
        action={`http://localhost:5000/todo/${id}/deleteTodo`}
      >
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Detail;
