import React, { useEffect, useState } from 'react'
import "./ForgotYourPass.css";
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom";

function ForgotYourPass() {

    const [baseUrl, setBaseUrl] = useState("");
    const [tokenData, setTokenData] = useState("");
    // const [resetUrl, setResetUrl] = useState("");
    // const [verifyToken, setVerifyToken] = useState("");
    const history = useHistory();


    //This function runs on hitting the submit button
    async function forgotpass() {
        console.warn(baseUrl)
        await fetch(baseUrl)
            .then((result) => {
                result.json().then((resp) => {
                    setTokenData(resp);
                    localStorage.setItem("token", JSON.stringify(resp))
                })
            })
        console.log("token", tokenData)
    }
    useEffect(() => {
        if (tokenData == "") {
            console.log("blank")
        } else {
            console.warn(">>>>>>>>>>", tokenData.code)
            if (tokenData.code == 201) {
                history.push('/resetpass')
            }
        }
    }, [forgotpass])

    return (
        <div className="forgottPass-page">
            <div className="gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: "23px" }}>Jobs</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="login-signup-btn ml-auto" to="./login">Login/Signup</NavLink>
                </nav>

                {/* Forgot password column */}
                <div className="forgottPass-form">
                    <div className="row">
                        <h4 className="my-3 ">Fotgot your password ?</h4>
                        <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                    </div>
                    <div class="form-group row">

                        {/* Email id */}
                        <label for="validInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="validInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email"
                            onChange={(e) => setBaseUrl("https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=" + e.target.value)}
                            required />
                    </div>
                    <div className="login-btn text-center my-4">
                        <button
                            type="submit"
                            class="btn btn-primary px-5"
                            onClick={forgotpass}
                        >Submit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ForgotYourPass
