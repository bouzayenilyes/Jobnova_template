import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import AboutTwo from "../componants/aboutTwo";
import AboutUs from "../componants/aboutUs";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { jobOpenings } from "../data/data";

export default function Career(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Opening</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Career</li>
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

        <section className="section pt-0">
            <AboutTwo/>
            <AboutUs containerClass="container mt-100 mt-60"/>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Job Openings</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {jobOpenings.map((item,index)=>{
                        return(
                            <div className="col-lg-10 col-12 mt-4 pt-2" key={index}>
                                <div className="job-post shadow rounded d-md-flex align-items-center justify-content-between p-4">
                                    <div className="mb-3 mb-md-0">
                                        <Link href="/job-detail-one" className="h5 title text-dark">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.position}</p>
                                    </div>
                                    <Link href="/job-detail-one" className="btn btn-soft-primary">Apply Now <i className="mdi mdi-arrow-right"></i></Link>
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