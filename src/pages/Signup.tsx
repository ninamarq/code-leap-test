import { useContext } from "react";

import UserContext, { IUserContext } from "../context/UserContext";

function SignUp() {
  const { setUsername }: IUserContext = useContext(UserContext);

  const handleChange = (event: { target: HTMLInputElement }) => {
    setUsername?.(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to CodeLeap network!</h1>
      <label htmlFor="username-sign">
        Please enter your username
        <input
          id="username-sign"
          onChange={(event) => handleChange(event)}
          type="text"
          placeholder="John doe"
        />
      </label>
      <button type="button">Enter</button>
    </div>
  );
}

export default SignUp;
