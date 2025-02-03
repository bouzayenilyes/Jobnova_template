import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import {FiLayout, FiMapPin,FiUserCheck, FiClock, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiArrowRight} from "../assets/icons/vander"
import { jobData } from "../data/data";

export default function JobDetailOne(){

    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:'url("/images/hero/bg.jpg")', backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <Image src="/images/company/lenovo-logo.png" height={65} width={65} className="avatar avatar-small rounded-pill p-2 bg-white" alt=""/>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-3">Back-End Developer</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link href="/job-grid-one">Jobs</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Job Detail</li>
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
                        <div className="card bg-white rounded shadow sticky-bar">
                            <div className="p-4">
                                <h5 className="mb-0">Job Information</h5>
                            </div>

                            <div className="card-body p-4 border-top">
                                <div className="d-flex widget align-items-center">
                                    <FiLayout className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Company Name:</h6>
                                        <small className="text-primary mb-0">Lenovo</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiUserCheck className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Employee Type:</h6>
                                        <small className="text-primary mb-0">Full Time</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMapPin className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Location:</h6>
                                        <small className="text-primary mb-0">Beijing, China</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMonitor className="fea icon-ex-md me-3" />
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Job Type:</h6>
                                        <small className="text-primary mb-0">Back-end Developer</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiBriefcase className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Experience:</h6>
                                        <small className="text-primary mb-0">+2 Year</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiBook className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Qualifications:</h6>
                                        <small className="text-primary mb-0">MSCIT</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiDollarSign className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Salary:</h6>
                                        <small className="text-primary mb-0">+50k to 70k</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiClock className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Date posted:</h6>
                                        <small className="text-primary mb-0 mb-0">19th June, 2023</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-6 col-12">
                        <h5>Job Description: </h5>
                        <p className="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                        <p className="text-muted">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                        <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        
                        <h5 className="mt-4">Responsibilities and Duties: </h5>
                        <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        <ul className="list-unstyled">
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Participate in requirements analysis</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Write clean, scalable code using C# and .NET frameworks</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Test and deploy applications and systems</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Revise, update, refactor and debug code</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Improve existing software</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Develop documentation throughout the software development life cycle (SDLC)</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Serve as an expert on applications and provide technical support</li>
                        </ul>

                        <h5 className="mt-4">Required Experience, Skills and Qualifications: </h5>
                        <p className="text-muted">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        <ul className="list-unstyled">
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Proven experience as a .NET Developer or Application Developer</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Experience designing, developing and creating RESTful web services and APIs</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Basic know how of Agile process and practices</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Good understanding of object-oriented programming.</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Good understanding of concurrent programming.</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Sound knowledge of application architecture and design.</li>
                            <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Excellent problem solving and analytical skills</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/job-apply" className="btn btn-outline-primary">Apply Now <i className="mdi mdi-send"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Related Vacancies</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {jobData.slice(0,3).map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="job-post rounded shadow p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                            <div className="ms-3">
                                                <Link href="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center small mt-2"><FiClock className="fea icon-sm me-1"/> {item.posted} days ago</span>
                                            </div>
                                        </div>

                                        <span className="badge bg-soft-primary">{item.jobTime}</span>
                                    </div>

                                    <div className="mt-4">
                                        <Link href={`/job-detail-one/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                        <span className="text-muted d-flex align-items-center mt-2"><FiMapPin className="fea icon-sm me-1"/>{item.country}</span>

                                        <div className="progress-box mt-3">
                                            <div className="progress mb-2">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'50%'}}></div>
                                            </div>

                                            <span className="text-dark">{item.applied} applied of <span className="text-muted">{item.vacancy} vacancy</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}
