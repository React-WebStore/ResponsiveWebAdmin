import React from "react";
import { LoginContainer } from "./styles";

const Login = () => (
  <LoginContainer>
    <label>Username</label>
    <input type="text" label="Username" />
    <label>Password</label>
    <input type="text" label="Password" />
  </LoginContainer>
);

export default Login;
