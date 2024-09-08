import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate()
    const [login_state, set_login_state] = useState({
        login_info: "",
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // login to the website 
    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                //creating a token for user
                sessionStorage.setItem("accessToken", response.data);
                sessionStorage.setItem("setUsername", username);
                sessionStorage.setItem("loginState", true);
                alert("logged in successfully");
                navigate("/");
            }
        });
    };

    //display whether a user is log in , no user is found or just the user and password does not match
    useEffect(() => {
        axios.get("http://localhost:3001/auth/user_login_info").then((response => {
            set_login_state({
                login_info: response.data.login_info,
            });
        }));
    });
    return (
        <div><h1 className="login_title">Login with your account </h1>
            <div className="login_UI">

                <label className="login_label"> Input your username </label>
                <input className="login_input" type="text" onChange={(event) => {
                    setUsername(event.target.value);
                }} />
                <label className="login_label" >Input your password</label>
                <input className="login_input" type="password" onChange={(event) => {
                    setPassword(event.target.value);
                }} />
                <button className="login_button" onClick={login}>
                    Login
                </button>
            </div>
            <h2 className="login_info" >{login_state.login_info}</h2>
        </div>
    );
}

export default Login;