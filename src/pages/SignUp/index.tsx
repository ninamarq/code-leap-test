import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext, { IUserContext } from "../../context/UserContext";
import "./style.scss";

function SignUp() {
  const { username, setUsername }: IUserContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event: { target: HTMLInputElement }) => {
    setUsername?.(event.target.value);
  };

  const verifyUsername: boolean = username.length > 0;

  return (
    <div className="login-container">
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
        onClick={() => navigate("/main")}
      >
        ENTER
      </button>
    </div>
  );
}

export default SignUp;
