import React, { useEffect, useState } from 'react';
import { BsCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./PostAJob.css";
function PostAJob() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [recruiterToken, setRecruiterToken] = useState("");

    var usersdata = JSON.parse(localStorage.getItem('user-info'));

    useEffect(() => {
        setRecruiterToken(usersdata)
    }, [])
    async function postjob() {
        console.log("RECRUITER TOKEN", recruiterToken);

        let item = { title, description, location }
        console.warn(item)
        let result = await fetch("https://jobs-api.squareboat.info/api/v1/jobs/", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `${recruiterToken.data.token}`
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("POSTE_JOB", result)
    }
    return (
        <div>
            <div className="post-a-job-gradient-box">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: "23px" }}>Jobs</span></a>

                    <p className="post-a-job-nav-item ml-auto">Post a Job</p>
                    <div className="dropdown">
                        <button className="btn btn-circle dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <BsCircleFill size={40} color="#D9EFFF" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Logout</a>
                        </div>
                    </div>
                </nav>
                <div className="post-a-job-content">
                    <p><AiFillHome /> Home <AiOutlineRight /> Post a Job</p>
                </div>
            </div>
            <div className="post-a-job-form">
                <form>
                    <div >
                        <h4 className="mt-4 mb-3 ">Post a Job</h4>
                    </div>
                    <div class="form-group">
                        <label for="title">Job title*</label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="title"
                            placeholder="Enter job title"
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                        <label for="desc">Description*</label>
                        <textarea
                            type="text"
                            class="form-control mb-3"
                            id="desc"
                            placeholder="Enter job discription"
                            rows="4"
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                        <label for="location">Location*</label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="location"
                            placeholder="Enter job location"
                            onChange={(e) => setLocation(e.target.value)}
                            required />

                    </div>
                    <div className="login-btn text-center my-4">
                        <button type="submit" class="btn btn-primary px-5" onClick={postjob}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PostAJob
