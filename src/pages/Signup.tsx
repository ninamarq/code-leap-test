import { useContext } from "react";

import UserContext, { IUserContext } from "../context/UserContext";

function SignUp() {
  const { setUsername }: IUserContext = useContext(UserContext);
  console.log(setUsername);
  return (
    <div>
      <h1>Welcome to CodeLeap network!</h1>
      <label htmlFor="username-sign">
        Please enter your username
        <input id="username-sign" type="text" placeholder="John doe" />
      </label>
      <button type="button">Enter</button>
    </div>
  );
}

export default SignUp;
