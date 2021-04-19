import React, { useEffect, useState } from 'react'
import "../UserComponents/PostedJobs.css";
import { GrLocation } from "react-icons/gr";
import ApplicantModal from "./ApplicantModal";
import { IoDocumentText } from "react-icons/io5";

function AvailableJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://jobs-api.squareboat.info/api/v1/jobs")
            .then((result) => {
                result.json().then((resp) => {
                    setJobs(resp.data);
                    localStorage.setItem("jobs", JSON.stringify(resp))

                })
            })
    }, [])
    console.log(jobs)

    // Conditional render
    if (jobs == "") {
        return <div className="d-flex mt-5">
            <div className="mr-auto ml-auto">
                <div className="d-flex">
                    <IoDocumentText className="ml-auto mr-auto" color="rgba(211, 211, 211, 0.877)" size={150} />
                </div>
                <p>Your posted jobs will show here !</p>
                <div className="d-flex">
                    <button className="btn btn-primary ml-auto mr-auto px-4">Post a Job</button>
                </div>
            </div>
        </div>
    } else {
        return (
            <div>
                <div className="footer-pagination-div d-flex ">

                    {/* Posted jobs cards */}
                    {
                        jobs.map((item) =>
                            <div className="job-cards">

                                <div className="posted-job-card">
                                    <div className="posted-job-card-body">
                                        <h5 className="posted-job-card-title">{item.title}</h5>
                                        <p className="posted-job-card-text">{item.description}</p>
                                    </div>
                                    <div className="posted-job-card-footer row d-flex">
                                        <p><GrLocation size={20} color='#43AFFF' /> {item.location}</p>

                                        <button className="btn view-app-btn" data-toggle="modal" data-target="#scropllModalLong" /*This will trigger modal */>View Application</button>
                                    </div>
                                </div>

                            </div>

                        )
                    }


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="scropllModalLong" tabindex="-1" role="dialog" aria-labelledby="scropllModalLongTitle" aria-hidden="true" >
                        <ApplicantModal />
                    </div>
                </div>
                <div className="footer-pagination-div">
                    <div className="pagination-nav">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="pagination-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="pagination-item"><a className="page-link" href="#">1</a>
                                </li>
                                <li className="pagination-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        )
    }
}

export default AvailableJobs
