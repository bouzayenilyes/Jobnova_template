import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function JobApply(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <Image src="/images/company/lenovo-logo.png" width={65} height={65} className="avatar avatar-small rounded-pill p-2 bg-white" alt=""/>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-3">Back-End Developer</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link href="/job-grid-one">Job</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Job Apply</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="card border-0">
                            <form className="rounded shadow p-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Your Name :<span className="text-danger">*</span></label>
                                            <input name="name" id="name2" type="text" className="form-control" placeholder="First Name :"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Your Email :<span className="text-danger">*</span></label>
                                            <input name="email" id="email2" type="email" className="form-control" placeholder="Your email :"/>
                                        </div> 
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Your Phone no. :<span className="text-danger">*</span></label>
                                            <input name="number" id="number2" type="number" className="form-control" placeholder="Your phone no. :"/>
                                        </div> 
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Job Title :</label>
                                            <input name="subject" id="subject2" className="form-control" placeholder="Title :"/>
                                        </div>                                                                               
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Types of jobs :</label>
                                            <select className="form-control form-select" id="Sortbylist-Shop">
                                                <option>All Jobs</option>
                                                <option>Full Time</option>
                                                <option>Half Time</option>
                                                <option>Remote</option>
                                                <option>In Office</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Description :</label>
                                            <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Describe the job :"></textarea>
                                        </div>
                                    </div>                                    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label fw-semibold">Upload Your Cv / Resume :</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>                                                                               
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Apply Now"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}