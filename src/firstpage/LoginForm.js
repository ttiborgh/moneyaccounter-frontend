import Axios from "axios";
import React, { useState } from "react";

const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userData = { username, password };

  const sendLoginRequest = async (event) => {
    const response = await Axios.post("localhost:8081/api/login", userData);

    console.log(response);

    setLoggedIn(response); // ezt az API hivas alapjan fogjuk beallitani
    event.preventDefault();
  };

  return (
    <div>
      <h1> LOGIN </h1>
      <form onSubmit={sendLoginRequest}>
        <input
          type="text"
          name="username"
          placeholder="Type in username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="Type in your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
