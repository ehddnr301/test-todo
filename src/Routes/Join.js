import React from "react";

const Join = () => {
  return (
    <form
      action="https://fathomless-temple-42089.herokuapp.com/user/auth"
      method="post"
    >
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="password" name="password2" placeholder="password2" />
      <input type="submit" value="회원가입" />
    </form>
  );
};

export default Join;
