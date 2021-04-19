import React, { useEffect, useState, } from 'react'
import { useHistory } from "react-router-dom";
import "./Login.css"
import { NavLink } from 'react-router-dom';
import PostAJob from "./UserComponents/PostAJob"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const history = useHistory();
    const [mail, setMail] = useState("");

    // This function runs on hiting the login button
    async function login() {
        console.warn("data", email, password)
        let item = { email, password };
        let result = await fetch("https://jobs-api.squareboat.info/api/v1/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        console.log("result", result)
        setMail(result)
        if (result.code == 200) {
            history.push("/postedjobs")
        }
        else {
            setErrorMsg(true);
        }
    }
    return (
        <div className="login-page">
            <div className="gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: "23px" }}>Jobs</span></a>
                </nav>

                {/* Login form */}
                <div className="login-form">
                    <div className="row">
                        <h4 className="my-3 ">Login</h4>
                    </div>

                    <div className="login-form-group">

                        {/* Email */}
                        <label >Email address</label>
                        <input
                            type="email"
                            className={`form-control ${errorMsg == true && "login-error"}`}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required />

                        {/* Password */}
                        <label >Password</label>
                        {/* Forgotten Password */}
                        <NavLink style={{ color: '#43AFFF', marginLeft: "208px" }} to="./forgotpass">Forgot your password?</NavLink>
                        <input
                            type="password"
                            className={`form-control ${errorMsg == true && "login-error"}`}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <div className="row">
                            <p className={`error-msg ${errorMsg == true && "error-msg1"}`}>Incorrect email address or password.</p>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="login-btn text-center my-4">
                        <button
                            type="submit"
                            className="btn btn-primary px-5 "
                            onClick={login}
                        >Login</button>
                    </div>

                    {/* Signup */}
                    <div className="create-account-link-div text-center">
                        <p>New to MyJobs? <NavLink style={{ color: '#43AFFF' }} to="./signup">Create an account</NavLink></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
