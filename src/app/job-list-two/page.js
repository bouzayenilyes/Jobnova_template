import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar";

import { jobData } from "../data/data";
import {FiClock,FiMapPin, FiBookmark} from "../assets/icons/vander"
import AboutTwo from "../componants/aboutTwo";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function JobListTwo(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:'url("/images/hero/bg.jpg")', backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Vacancies</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Jobs</li>
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

        <section className="section">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white p-4 rounded shadow sticky-bar">
                            <div>
                                <h6 className="mb-0">Search Properties</h6>
    
                                <div className="search-bar mt-2">
                                    <div id="itemSearch2" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform2" className="searchform">
                                            <input type="text" className="form-control rounded border" name="s" id="searchItem2" placeholder="Search..."/>
                                            <input type="submit" id="searchItemsubmit2" value="Search"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-0">Categories</h6>
                                <select className="form-select form-control border mt-2" aria-label="Default select example">
                                    <option value="WD">Web Designer</option>
                                    <option value="WD">Web Developer</option>
                                    <option value="UI">UI / UX Desinger</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-0">Location</h6>
    
                                <select className="form-select form-control border mt-2" aria-label="Default select example">
                                    <option value="NY">New York</option>
                                    <option value="MC">North Carolina</option>
                                    <option value="SC">South Carolina</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <h6>Job Types</h6>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Full"/>
                                        <label className="form-check-label" htmlFor="Full">Full Time</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">3</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Part"/>
                                        <label className="form-check-label" htmlFor="Part">Part Time</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">7</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Freelancer"/>
                                        <label className="form-check-label" htmlFor="Freelancer">Freelancing</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">4</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Fixed"/>
                                        <label className="form-check-label" htmlFor="Fixed">Fixed Price</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">6</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Remote"/>
                                        <label className="form-check-label" htmlFor="Remote">Remote</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">7</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="Hourly"/>
                                        <label className="form-check-label" htmlFor="Hourly">Hourly Basis</label>
                                    </div>

                                    <span className="badge bg-soft-primary rounded-pill">44</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-0">Salary</h6>
    
                                <ul className="list-unstyled mt-2 mb-0">
                                    <li className="mt-1">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="rent"/>
                                                <label className="form-check-label" htmlFor="rent">10k - 15k</label>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="mt-1">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="buy"/>
                                                <label className="form-check-label" htmlFor="buy">15k - 25k</label>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="mt-1">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="sell"/>
                                                <label className="form-check-label" htmlFor="sell">more than 25K</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
    
                            <div className="mt-4">
                                <Link href="" className="btn btn-primary w-100">Apply Filter</Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="row g-4">
                            {jobData.map((item,index)=>{
                                return(
                                    <div className="col-12" key={index}>
                                        <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex align-items-center w-250px">
                                                <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
                
                                                <div className="ms-3">
                                                    <Link href={`/job-detail-one/${item.id}`} className="h5 title text-dark">{item.title}</Link>
                                                </div>
                                            </div>
                
                                            <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                                                <span className="badge bg-soft-primary rounded-pill">{item.jobTime}</span>
                                                <span className="text-muted d-flex align-items-center fw-medium mt-md-2"><FiClock className="fea icon-sm me-1 align-middle"/>{item.posted} days ago</span>
                                            </div>
                
                                            <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                                                <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1 align-middle"/>{item.country}</span>
                                                <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
                                            </div>
                
                                            <div className="mt-3 mt-md-0">
                                                <Link href="#" className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark"><FiBookmark className="icons"/></Link>
                                                <Link href={`/job-detail-one/${item.id}`} className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutTwo/>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}


