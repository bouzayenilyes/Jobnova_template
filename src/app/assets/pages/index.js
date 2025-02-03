import React, { useState } from 'react';
import { Link } from "react-router-dom";

import bg1 from "../images/bg2.png"
import hero1 from '../images/hero1.png'
import company1 from '../images/company/circle-logo.png'
import company2 from '../images/company/facebook-logo.png'
import company3 from '../images/company/google-logo.png'
import company4 from '../images/company/lenovo-logo.png'
import company5 from '../images/company/android.png'
import company6 from '../images/company/linkedin.png'
import company7 from '../images/company/skype.png'
import company8 from '../images/company/snapchat.png'
import about3 from "../images/about/ab03.jpg"
import about4 from "../images/about/ab04.jpg"

import Navbar from '../componants/navbar';
import AboutUs from "../componants/aboutUs";
import Categories from "../componants/categories";
import Blog from '../componants/blog';
import Footer from '../componants/footer';

import { jobData, servicesData } from "../data/data";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import {FiSearch,FiClock,FiMapPin} from "../assets/icons/vander"


export default function Index(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <Navbar navClass="defaultscroll sticky"/>
        <section className="bg-half-170 d-table w-100 bg-primary" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading">
                            <h1 className="heading text-white fw-bold">Get hired <br/> by the popular <br/> candidates.</h1>
                            <p className="para-desc text-white-50 mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                            <div className="text-center subscribe-form mt-4">
                                <form style={{maxWidth:'800px'}}>
                                    <div className="mb-0">
                                        <div className="position-relative">
                                            <FiSearch className="fea icon-20 position-absolute top-50 start-0 translate-middle-y ms-3"/>
                                            <input type="text" id="help" name="name" className="shadow rounded-pill bg-white ps-5" required="" placeholder="Search jobs & candidates ..."/>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-pills">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="position-relative ms-lg-5">
                            <img src={hero1} className="img-fluid p-5" alt=""/>

                            <div className="spinner">
                                <div className="position-absolute top-0 start-0 mt-lg-5 mt-4 ms-lg-5 ms-4">
                                    <img src={company1} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute top-0 start-50 translate-middle-x">
                                    <img src={company2} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute top-0 end-0 mt-lg-5 mt-4 me-lg-5 me-4">
                                    <img src={company3} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute top-50 start-0 translate-middle-y">
                                    <img src={company4} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute top-50 end-0 translate-middle-y">
                                    <img src={company5} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute bottom-0 start-0 mb-lg-5 mb-4 ms-lg-5 ms-4">
                                    <img src={company6} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                    <img src={company7} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                                <div className="position-absolute bottom-0 end-0 mb-lg-5 mb-4 me-lg-5 me-4">
                                    <img src={company8} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <AboutUs containerClass="container"/>
            <Categories/>

            <div className="container mt-100 mt-60">
                <div className="row align-items-end mb-4 pb-2">
                    <div className="col-lg-6 col-md-9">
                        <div className="section-title text-md-start text-center">
                            <h4 className="title mb-3">Explore Jobs</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-3 d-none d-md-block">
                        <div className="text-md-end">
                            <Link to="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-0">
                    {jobData.slice(0,6).map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="job-post rounded shadow p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                            <div className="ms-3">
                                                <Link to="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center small mt-2"><FiClock  className="fea icon-sm me-1"/> {item.posted} days ago</span>
                                            </div>
                                        </div>

                                        <span className="badge bg-soft-primary">{item.jobTime}</span>
                                    </div>

                                    <div className="mt-4">
                                        <Link to={`/job-detail-one/${item.id}`} className="text-dark title h5">{item.title}</Link>

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

                    <div className="col-12 d-md-none d-block">
                        <div className="text-center">
                            <Link to="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Here's why you'll love it Jobnova</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {servicesData.slice(0,4).map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                                <div className="position-relative features text-center p-4 rounded shadow bg-white">
                                    <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                        <Icon className="fea icon-ex-md"/>
                                    </div>
            
                                    <div className="mt-4">
                                        <Link to="" className="title h5 text-dark">24/7 Support</Link>
                                        <p className="text-muted mt-3 mb-0">Many desktop publishing now use and a search for job.</p>
                                        <div className="mt-3">
                                            <Link to="" className="btn btn-link primary text-dark">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 col-md-6 mb-5  order-md-2 order-1">
                        <div className="about-right">
                            <div className="position-relative shadow rounded img-one">
                                <img src={about3} className="img-fluid rounded" alt=""/>
                            </div>

                            <div className="img-two shadow rounded p-2 bg-white">
                                <img src={about4} className="img-fluid rounded" alt=""/>

                                <div className="position-absolute top-0 start-50 translate-middle">
                                    <Link to="#!" onClick={() => setOpen(true)} className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                                        <i className="mdi mdi-play mdi-24px text-primary"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-md-1 order-2">
                        <div className="section-title mb-4 me-lg-5">
                            <h4 className="title mb-3">Find Best Companies.</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>

                        <div className="row g-4 mt-0">
                            {jobData.slice(0,6).map((item,index)=>{
                                return(
                                    <div className="col-md-6" key={index}>
                                        <div className="employer-card rounded shadow p-2 bg-light">
                                            <div className="d-flex align-items-center">
                                                <img src={item.image} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                
                                                <div className="content ms-3">
                                                    <Link to="/employer-profile" className="h5 title text-dark">{item.name}</Link>
                                                    <span className="text-muted d-flex align-items-center small mt-1">{item.vacancy} vacancy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-4">
                            <Link to="/employers" className="btn btn-link primary text-muted">See More Companies <i className="mdi mdi-arrow-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Latest Blog or News</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <Blog/>
            </div>
        </section>
        <Footer/>
        </>
    )
}