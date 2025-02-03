import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { candidatesData } from "../data/data";
import {FiMessageCircle} from "../assets/icons/vander"

export default function Candidates(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Candidates</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Candidates</li>
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
                    {candidatesData.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                                    {item.rate === true ? 
                                    <div className="ribbon ribbon-left overflow-hidden"><span className="text-center d-block bg-warning shadow small h6"><i className="mdi mdi-star"></i></span></div> : ''
                                    }
                                    <div className="content">
                                        <Image src={item.image} width={80} height={80} className="avatar avatar-md-md rounded-pill shadow-md" alt=""/>

                                        <div className="mt-3">
                                            <Link href={`/candidate-profile/${item.id}`} className="title h5 text-dark">{item.name}</Link>
                                            <p className="text-muted mt-1">{item.post}</p>

                                            <span className="badge bg-soft-primary rounded-pill">Design</span>
                                            <span className="badge bg-soft-primary rounded-pill">UI</span>
                                            <span className="badge bg-soft-primary rounded-pill">UX</span>
                                            <span className="badge bg-soft-primary rounded-pill">Digital</span>
                                        </div>

                                        <div className="mt-2 d-flex align-items-center justify-content-between">
                                            <div className="text-center">
                                                <p className="text-muted fw-medium mb-0">Salary:</p>
                                                <p className="mb-0 fw-medium">{item.salary}</p>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-muted fw-medium mb-0">Experience:</p>
                                                <p className="mb-0 fw-medium">{item.experience}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <Link href={`/candidate-profile/${item.id}`} className="btn btn-sm btn-primary me-1">View Profile</Link>
                                            <Link href="/contactus" className="btn btn-sm btn-icon btn-soft-primary"><FiMessageCircle className="icons"/></Link>
                                        </div>

                                        <Link href="" className="like"><i className="mdi mdi-heart align-middle fs-4"></i></Link>
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
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}
