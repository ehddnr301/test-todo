import React from "react";

const Login = () => {
  return (
    <form
      action="https://fathomless-temple-42089.herokuapp.com/user/login"
      method="post"
    >
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="로그인" />
    </form>
  );
};

export default Login;
