import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);


  // this is how we send the data
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email or username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Login;
