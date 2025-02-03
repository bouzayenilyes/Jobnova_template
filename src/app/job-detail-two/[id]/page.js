import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarDark from "../../componants/navbarDark";
import Footer from "../../componants/footer";
import ScrollTop from "../../componants/scrollTop";

import {FiLayout, FiMapPin,FiUserCheck, FiClock, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiArrowRight} from "../../assets/icons/vander"
import { jobData } from "../../data/data";

export default function JobDetailTwo(props){
    let data = jobData.find((job)=>job.id === parseInt(props.params.id));
    return(
        <>
        <NavbarDark/>
        <section className="bg-half d-table w-100 bg-light">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-6 col-12">

                        <div className="d-lg-flex align-items-center p-4 rounded shadow bg-white mb-4">
                            <Image src={data?.image} width={110} height={110} className="avatar avatar-medium p-4 rounded-pill shadow bg-white" alt=""/>

                            <div className="ms-lg-3 mt-3 mt-lg-0">
                                <h4>{data?.title}</h4>

                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-flex align-items-center text-muted me-2"><FiLayout className="fea icon-sm text-primary me-1"/>{data?.name} pvt. ltd.</li>
                                    <li className="d-inline-flex align-items-center text-muted"><FiMapPin className="fea icon-sm text-primary me-1" />{data?.city}, {data?.country}</li>
                                </ul>
                            </div>
                        </div>

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
                                        <small className="text-primary mb-0">{data?.name}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiUserCheck className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Employee Type:</h6>
                                        <small className="text-primary mb-0">{data?.jobTime}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMapPin className="fea icon-ex-md me-3"/>
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Location:</h6>
                                        <small className="text-primary mb-0">{data?.city}, {data?.country}</small>
                                    </div>
                                </div>

                                <div className="d-flex widget align-items-center mt-3">
                                    <FiMonitor className="fea icon-ex-md me-3" />
                                    <div className="flex-1">
                                        <h6 className="widget-title mb-0">Job Type:</h6>
                                        <small className="text-primary mb-0">{data?.title}</small>
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
                                        <small className="text-primary mb-0 mb-0">{data?.date}</small>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}