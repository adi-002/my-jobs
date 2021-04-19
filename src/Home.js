import React from 'react';
import "./Home.css";
import Poster from "../src/poster-img.jpg"
import Solaytic from "../src/logos/solaytic.png";
import { NavLink } from "react-router-dom"
function Home() {


    return (
        <>
            <div className="home-page">
                <div className="home-gradient-box">


                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-light px-0">
                        <a className="brandName" href="/">My<span style={{ color: "#43AFFF", fontSize: '23px' }}>Jobs</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="login-signup-btn ml-auto" to="./signup">Login/Signup</NavLink>
                    </nav>


                    {/* welcome to myJobs column */}
                    <div className="home-main-div">
                        <div className="row">
                            <div>
                                <header className="Home-heading">Welcome to <br /><span className="Home-header-span1">My</span><span className="Home-header-span2">Jobs</span></header>
                                <NavLink className="home-getStarted-btn" to="./signup">Get Started</NavLink>
                            </div>
                            <div className="images ml-auto">
                                <img src={Poster} className="poster-img" alt="poster" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Why us content */}
                <div className="home-why-us-content">
                    <h3 className="heading-why-us">Why us?</h3>
                    <div className="row d-flex home-cards">
                        <div className="home-card">
                            <div className="home-card-body">
                                <h5 className="home-card-title">Get More<br /> Visibility</h5>
                                <p className="home-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="home-card">
                            <div className="home-card-body">
                                <h5 className="home-card-title">Get More<br /> Visibility</h5>
                                <p className="home-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="home-card">
                            <div className="home-card-body">
                                <h5 className="home-card-title">Get More<br /> Visibility</h5>
                                <p className="home-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* companies who trust us column */}
                <div className="home-companies-who-trust-us">
                    <h3>Companies Who Trust Us</h3>
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                    </div>
                    <div className="row" style={{ justifyContent: "space-around" }}>
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                        <img src={Solaytic} alt="logo" width="150" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
