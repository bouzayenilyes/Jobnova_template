import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar";
import ScrollTop from "../componants/scrollTop";
import Footer from "../componants/footer";
import AboutTwo from "../componants/aboutTwo";
import FormSelect from "../componants/formSelect";

import { jobData } from "../data/data";
import {FiBookmark, FiArrowUpRight} from "../assets/icons/vander"

export default function JobGridThree(){
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
                            <div className="job-post job-type-three rounded shadow bg-white p-4">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
                                        <Link href="/employer-profile" className="h5 company text-dark d-block mt-2">{item.name}</Link>
                                    </div>
    
                                    <ul className="list-unstyled align-items-center mb-0">
                                        <li className="list-inline-item"><Link href="" className="like"><i className="mdi mdi-heart align-middle fs-3"></i></Link></li>
                                        <li className="list-inline-item"><Link href="" className="btn btn-icon btn-sm btn-soft-primary"><FiBookmark className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link href="" className="btn btn-icon btn-sm btn-soft-primary"><FiArrowUpRight className="icons"/></Link></li>
                                    </ul>
                                </div>
    
                                <div className="mt-2">
                                    <Link href={`/job-detail-three/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                    <p className="text-muted mt-2">{item.desc}</p>
    
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-inline-block me-1"><Link href="" className="badge bg-primary">{item.jobTime}</Link></li>
                                        <li className="d-inline-block me-1"><Link href="" className="badge bg-primary">$4,000 - $4,500</Link></li>
                                        <li className="d-inline-block me-1"><Link href="" className="badge bg-primary"><i className="mdi mdi-map-marker me-1"></i>{item.country}</Link></li>
                                    </ul>
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
        <Footer top={true} />
        <ScrollTop/>
        </>
    )
}