import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function SignUp() {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome to CodeLeap network! {username}</h1>
      <label htmlFor="username-sign">
        Please enter your username
        <input id="username-sign" type="text" placeholder="John doe" />
      </label>
      <button type="button">Enter</button>
    </div>
  );
}

export default SignUp;
