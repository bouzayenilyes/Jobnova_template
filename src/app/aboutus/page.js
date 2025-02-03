import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import About from "../componants/aboutUs"
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { servicesData, teamData } from "../data/data";
import {FiFacebook, FiInstagram, FiTwitter, FiHelpCircle} from "../assets/icons/vander"

export default function AboutUs(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">About Us</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About us</li>
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
            <About containerClass="container"/>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Heres why youll love it Jobnova</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {servicesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                            <div className="position-relative features text-center p-4 rounded shadow bg-white">
                                <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                    <Icon className="fea icon-ex-md"/>
                                </div>
        
                                <div className="mt-4">
                                    <Link href="" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                    <div className="mt-3">
                                        <Link href="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Our Minds</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-0">
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-12" key={index}>
                            <div className="card team team-primary text-center">
                                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>
    
                                    <ul className="list-unstyled team-social mb-0">
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="icons fea-social"/></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="icons fea-social"/></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="icons fea-social"/></Link></li>
                                    </ul>
                                </div>
    
                                <div className="content mt-3">
                                    <Link href="#" className="text-dark h5 mb-0 title">{item.name}</Link>
                                    <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Questions & Answers</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-2">
                    <div className="col-md-6 col-12">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0">How our <span className="text-primary">Jobnova</span> work ?</h5>
                                <p className="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0"> What is the main process open account ?</h5>
                                <p className="answer text-muted mb-0">If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0"> How to make unlimited data entry ?</h5>
                                <p className="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0"> Is <span className="text-primary">Jobnova</span> safer to use with my account ?</h5>
                                <p className="answer text-muted mb-0">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                            <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary fw-bold">Jobnova</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link href="/contactus" className="btn btn-primary mt-3"><i className="uil uil-phone"></i> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>

    )
}