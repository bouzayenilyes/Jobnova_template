import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function HelpcenterGuides(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Guides & Support</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link href="/helpcenter-overview">Help Center</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Guides</li>
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
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h5>Getting started</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Deciding to purchase</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>List your space</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Landing an experience or adventure</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Top uses questions</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h5>Your calendar</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Pricing & availability</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Booking settings</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Responding to enquiries & requests</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Snoozing or deactivating your listing</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2">
                        <h5>Your listings</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Updating your listing</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Neighbourhoods</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Listing photos & photography</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Jobnova Plus</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>API-connected software</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <h5>How payouts work</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Getting paid</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Adding payout info</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Your payout status</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Donations</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Taxes</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <h5>Your reservations</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Jobnova safely</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Jobnova Experiences and Adventures</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Changing a reservation</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Cancelling a reservation</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Long-term reservations</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <h5>Reservation help</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Help with a reservation or guest</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Guest cancellations</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <h5>Your account</h5>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Your profile</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Account security</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Identification & verifications</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Reviews</Link></li>
                            <li className="mt-2"><Link href="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>Superhost status</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}