import React, { useEffect, useState } from 'react'
import "./PostedJobs.css"
import { BsCircleFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import AvailableJobs from "./AvailableJobs";
function PostedJobs() {


    return (
        <div className="posted-jobs-page">


            {/* Contents inside the gradient background */}
            <div className="posted-job-gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: "23px" }}>Jobs</span></a>

                    <NavLink to="/postajob" className="ml-auto mr-4" style={{ color: "white" }}>Post a Job</NavLink>
                    <div className="dropdown">
                        <button className="btn btn-circle dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <BsCircleFill size={40} color="#D9EFFF" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Logout</a>
                        </div>
                    </div>
                </nav>

                {/* Heading */}
                <div className="posted-job-content">
                    <p><AiFillHome /> Home</p>
                    <h5>Jobs posted by you</h5>
                </div>
            </div>

            {/* Contents */}
            <AvailableJobs />

        </div>
    )
}

export default PostedJobs
