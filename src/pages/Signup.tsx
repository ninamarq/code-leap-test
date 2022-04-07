import { useContext } from "react";

import UserContext, { IUserContext } from "../context/UserContext";

function SignUp() {
  const { username, setUsername }: IUserContext = useContext(UserContext);

  const handleChange = (event: { target: HTMLInputElement }) => {
    setUsername?.(event.target.value);
  };

  const verifyUsername: boolean = username.length > 0;

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
      <button
        disabled={!verifyUsername}
        type="button"
        onClick={() => console.log("oi")}
      >
        Enter
      </button>
    </div>
  );
}

export default SignUp;
