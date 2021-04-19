import React, { useEffect, useState } from 'react'
import { BsCircleFill } from "react-icons/bs"
import "./ApplicantModal.css";
// import { HiDocumentText } from "react-icons/hi"
function ApplicantModalContent() {
    // const [apps, setApps] = useState();
    // useEffect(() => {
    //     var applicants = JSON.parse(localStorage.getItem('jobs'));
    //     setApps(applicants);
    //     var url = "https://jobs-api.squareboat.info/api/v1//recruiters/jobs/" + apps.data[0].id + "/candidates";
    //     fetch("https://jobs-api.squareboat.info/api/v1/jobs")
    //         .then((result) => {
    //             result.json().then((resp) => {
    //                 console.log("RESPONCE", resp)
    //                 console.log("URL", url);

    //             })
    //         })
    // }, [])

    return (
        <div>
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scropllModalLongTitle">Applicants for this job</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Total 35 applications</p>
                        <div className="modal-content-div d-flex" >

                            {/* <div className="mr-auto ml-auto mt-5 pt-5">
                                <div className="d-flex">
                                    <HiDocumentText className="ml-auto mr-auto" color="grey" size={150} />
                                </div>
                                <p>No applications available</p>

                            </div> */}
                            <div className="modal-card">
                                <div className="row">
                                    <BsCircleFill size={40} color='#D9EFFF' style={{ marginRight: '20px' }} />
                                    <div >
                                        <h6>Aditya Shrivastava</h6>
                                        <p>enailid@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Skills</h6>
                                    <p>Coading, design, resturant, playing, driving</p>
                                </div>

                            </div>
                            <div className="modal-card">
                                <div className="row">
                                    <BsCircleFill size={40} color='#D9EFFF' style={{ marginRight: '20px' }} />
                                    <div >
                                        <h6>Aditya Shrivastava</h6>
                                        <p>enailid@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Skills</h6>
                                    <p>Coading, design, resturant, playing, driving</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantModalContent;
