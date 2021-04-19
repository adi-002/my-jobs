import React, { useEffect, useState } from 'react'
import "./ResetYourPass.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ResetYourPass() {

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const history = useHistory();

    //This function runs on hitting the reset button
    async function resetpass() {

        var userToken = JSON.parse(localStorage.getItem('token'));
        var token = userToken.data.token;
        console.log("data", password, confirmPassword, token)
        let item = { password, confirmPassword, token };
        let result = await fetch("https://jobs-api.squareboat.info/api/v1/auth/resetpassword", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("result", result)
        if (result.code == 200) {
            history.push("/login")
        }

    }

    return (
        <div className="resetpass-page">
            <div className="gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF" }}>Jobs</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="login-signup-btn ml-auto" to="./login">Login/Signup</NavLink>
                </nav>

                {/* Reset password form */}
                <div className="resetpass-form">
                    <div className="row">
                        <h4 className="my-3 ">Reset your password </h4>
                    </div>
                    <div className="row mb-3">
                        <p>Enter your new password below.</p>
                    </div>
                    <div class="form-group row">
                        <label >New password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div class="form-group row">
                        <label>Confirm new password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required />
                    </div>
                    <div className="login-btn text-center my-4">
                        <button type="submit" class="btn btn-primary px-5" onClick={resetpass}>Reset</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResetYourPass
