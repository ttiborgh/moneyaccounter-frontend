import axios from "axios";
import React, { useState } from "react";

const LoginForm = ({ setLoggedIn, setUserId }) => {
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
      setUserId(response.data.id);
      setLoggedIn(response.data);
    } catch (error) {
      console.log(error.status);
    }
  };

  return (
    <div className="row loginpanel">
      <h3> LOGIN </h3>
      <div className="col-3">
        <form onSubmit={sendLoginRequest}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Type in your username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Type in your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <input type="submit" className="regbutton" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
