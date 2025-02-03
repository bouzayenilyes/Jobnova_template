import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import Faq from "../componants/faq";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import {FiArrowRightCircle} from "../assets/icons/vander"

export default function Pricing(){
    return(
        <>
        <Navbar/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Pricing Plans</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Pricing</li>
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
                <div className="row g-4 align-items-lg-center">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow">
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Starter</h5>
                                <p className="mb-0 text-white-50">Suitable for Starter</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">0.00</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <Link href="#" className="btn btn-dark">Free Signup</Link>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative overflow-hidden shadow">
                            <div className="ribbon ribbon-right overflow-hidden"><span className="text-center bg-warning d-block shadow small h6">Best</span></div>
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Professional</h5>
                                <p className="mb-0 text-white-50">Suitable for Regular</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">9.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <Link href="#" className="btn btn-dark">Subscribe Now</Link>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow-lg bg-light">
                            <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Standerd</h5>
                                <p className="mb-0 text-white-50">Suitable for Business</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">19.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-5">
                                    <Link href="#" className="btn btn-primary">Buy Now</Link>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="pricing text-center rounded position-relative shadow">
                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                <h5 className="price-title text-white title-dark">Premium</h5>
                                <p className="mb-0 text-white-50">Suitable for Premium</p>
                            </div>
                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                <span className="h6 mb-0">$</span>
                                <span className="price h4 mb-0 ms-1">29.99</span>
                                <span className="h6 align-self-end mb-1">/mo</span>
                            </div>
                            <div className="pricing-features text-start">
                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                </ul>
                                <div className="border-top text-center py-4">
                                    <Link href="#" className="btn btn-dark">Buy Premium</Link>                                        
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Faq/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}