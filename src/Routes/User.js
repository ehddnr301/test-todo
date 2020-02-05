import React, { useState, useEffect } from "react";
import { userApi1 } from "../api";

const User = props => {
  const [user, setUser] = useState(null);
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
      const { data } = await userApi1.userDetail(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return <div></div>;
};

export default User;
