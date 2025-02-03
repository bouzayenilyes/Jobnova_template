import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import FormSelect from "../componants/formSelect";
import AboutTwo from "../componants/aboutTwo";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { jobData } from "../data/data";
import {FiClock,FiMapPin} from "../assets/icons/vander"

export default function JobGridOne(){
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
                <div className="row justify-content-center">
                    <div className="col-12 mt-4">
                        <div className="features-absolute">
                            <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-4">
                               <FormSelect/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-60">
                <div className="row g-4">
                    {jobData.map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="job-post rounded shadow p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                            <div className="ms-3">
                                                <Link href="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center small mt-2"><FiClock className="fea icon-sm me-1"/>{item.posted} days ago</span>
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

           <AboutTwo/>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}