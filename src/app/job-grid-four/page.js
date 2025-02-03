import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";
import Footer from "../componants/footer";
import AboutTwo from "../componants/aboutTwo";

import { jobData } from "../data/data";
import {FiClock,FiMapPin, FiDollarSign} from "../assets/icons/vander"

export default function JobGridFour(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Vacancies</h5>
                        </div>
                    </div>
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
                                <div className="col-lg-6 col-12" key={index}>
                                    <div className="job-post rounded shadow bg-white">
                                        <div className="p-4">
                                            <Link href={`/job-detail-two/${item.id}`} className="text-dark title h5">{item.title}</Link>
            
                                            <p className="text-muted d-flex align-items-center small mt-3"><FiClock className="fea icon-sm text-primary me-1"/>Posted {item.posted} Days ago</p>
            
                                            <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                                <li className="list-inline-item"><span className="badge bg-soft-primary">{item.jobTime}</span></li>
                                                <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><FiDollarSign className="fea icon-sm text-primary me-1"/>{item.salary}/mo</span></li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center p-4 border-top">
                                            <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                            <div className="ms-3">
                                                <Link href="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center mt-1"><FiMapPin className="fea icon-sm me-1"/>{item.country}</span>
                                            </div>
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