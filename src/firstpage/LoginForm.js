import axios from "axios";
import React, { useState } from "react";

const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post(`/api/login?username=${username}&password=${password}`)
        .catch(function (error) {
          console.log(error);
        });
      setLoggedIn(response.data);
    } catch (e) {
      console.log(error.status)
    }
  };

  return (
    <div className="row">
      <h3> LOGIN </h3>
      <div className="col-3">
        <form onSubmit={sendLoginRequest}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Type in username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="Type in your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" className="regbutton" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
