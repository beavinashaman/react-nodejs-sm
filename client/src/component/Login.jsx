import React, { useContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import AuthContext from '../helpers/AuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {setAuthState} = useContext(AuthContext)
  
  let navigate  = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:8080/auth/login", data).then((response) => {
      console.log(response.data);
      if(response.data.error){
        alert(response.data.error);
      } else{
        sessionStorage.setItem("accessToken", response.data);
        setAuthState(true)
        navigate("/")
      }
    
    });
  };
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login </button>
    </div>
  );
}

export default Login;