import React, { useEffect, useState } from 'react'
import "./Signup.css"
import { useHistory } from "react-router-dom";
import { RiUserSearchFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Signup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userRole, setUserRole] = useState(0);
    const [skills, setSkills] = useState("");

    const history = useHistory();

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function signup() {
        let item = { name, email, password, confirmPassword, userRole, skills }
        console.warn(item)
        let result = await fetch("https://jobs-api.squareboat.info/api/v1//auth/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        console.log("result", result)

        if (result.code == 201) {
            history.push("/login")

        }
        if (name == "") {
            setNameError(true);
        }
        if (email == "") {
            setEmailError(true);
        }
        if (password == "" || confirmPassword == "") {
            setPasswordError(true);
        }
    }

    return (
        <div className="signup-page">
            <div className="gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: "23px" }}>Jobs</span></a>
                </nav>
                <div className="signup-form">

                    <div className="row">
                        <h4 className="my-3 ">Signup</h4>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <label for="validInputEmail1">I'm a*</label>
                        </div>
                        <form>
                            <div className="radio-toolbar">
                                <label className={`radio-inline radio-btn ${userRole == 0 && "radio-btn-active"}`}>
                                    <input
                                        type="radio"
                                        name="optradio"
                                        onClick={() => setUserRole(0)}
                                    />
                                    <RiUserSearchFill size={25} />  Recruiter
                                 </label>
                                <label className={`radio-inline radio-btn ${userRole == 1 && "radio-btn-active"}`}>
                                    <input
                                        type="radio"
                                        name="optradio"
                                        onClick={() => setUserRole(1)}
                                    />
                                    <FaUsers size={25} />  Candidate
                                 </label>
                            </div>
                        </form>
                    </div>
                    <div className="signup-form-group ">
                        <label >Full Name*</label>
                        <input
                            type="email"
                            className={`form-control ${nameError == true && "signup-error"}`}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required />
                        <div className="row">
                            <p className={`signup-error-msg ${nameError == true && "signup-error-msg1"}`}>This feild is mandatory</p>
                        </div>

                        <label >Email address*</label>
                        <input
                            type="email"
                            className={`form-control ${emailError == true && "signup-error"}`}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required />
                        <div className="row">
                            <p className={`signup-error-msg ${emailError == true && "signup-error-msg1"}`}>Invalid email address</p>
                        </div>

                        <div className="row  d-flex" style={{ justifyContent: "space-between" }}>
                            <div className="create-password" >
                                <label >Create Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordError == true && "signup-error"}`}
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                            <div className="confirm-password">
                                <label >Confirm Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordError == true && "signup-error"}`}
                                    placeholder="Enter your password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="row">
                            <p className={`signup-error-msg ${passwordError == true && "signup-error-msg1"}`}>This feild is mandatory</p>
                        </div>
                        <label >Skills</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter coma separated skills"
                            onChange={(e) => setSkills(e.target.value)}
                            required />
                    </div>
                    <div className="signup-btn text-center my-4">
                        <button type="submit" className="btn btn-primary px-5" onClick={signup}>Signup</button>
                    </div>
                    <div className="create-account-link-div text-center">
                        <p>Have an account? <NavLink style={{ color: '#43AFFF' }} to="./login">Login</NavLink></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup
