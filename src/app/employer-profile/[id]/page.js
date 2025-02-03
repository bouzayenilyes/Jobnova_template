import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../componants/navbar";
import Footer from "../../componants/footer";
import ScrollTop from "../../componants/scrollTop";

import { jobData } from "../../data/data";

import {FiMapPin, FiClock, FiDollarSign, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter,} from "../../assets/icons/vander"

export default function EmployerProfile(props){
    let data = jobData.find((job)=>job.id === parseInt(props.params.id))
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg4.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
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
                                <div className="d-flex align-items-center">
                                    <Image src={data?.image} width={80} height={80} className="avatar avatar-md-md rounded shadow p-3 bg-white" alt=""/>

                                    <div className="ms-3">
                                        <h5>{data?.name}</h5>
                                        <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1"/>{data?.city}, {data?.country}</span>
                                    </div>
                                </div>

                                <div className="mt-4 mt-md-0">
                                    <Link href="" className="btn btn-sm btn-primary me-1">Follow</Link>
                                    <Link href="/job-grid-one" className="btn btn-sm btn-soft-primary">See Jobs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-7 col-12">
                        <h4 className="mb-4">Company Story:</h4>

                        <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                        <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>

                        <div className="row g-4">
                            <div className="col-12"><Image src='/images/company/1.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid" alt=""/></div>
                            <div className="col-6"><Image src='/images/company/2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid" alt=""/></div>
                            <div className="col-6"><Image src='/images/company/3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid" alt=""/></div>
                        </div>

                        <h4 className="my-4">Vacancies:</h4>

                        <div className="row g-4">
                            {jobData.slice(0,4).map((item,index)=>{
                                return(
                                    <div className="col-lg-6 col-12" key={index}>
                                        <div className="job-post rounded shadow bg-white">
                                            <div className="p-4">
                                                <Link href={`/job-detail-one/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                                <p className="text-muted d-flex align-items-center small mt-3"><FiClock className="fea icon-sm text-primary me-1"/>Posted {item.posted} Days ago</p>

                                                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                                    <li className="list-inline-item"><span className="badge bg-soft-primary">{item.jobTime}</span></li>
                                                    <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><FiDollarSign className="fea icon-sm text-primary me-1"/>{item.salary}/mo</span></li>
                                                </ul>
                                            </div>
                                            <div className="d-flex align-items-center p-4 border-top">
                                                <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                                <div className="ms-3">
                                                    <h6>{item.name}</h6>
                                                    <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1"/>{item.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="card bg-white p-4 rounded shadow sticky-bar">
                            <div className="map map-400px border-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="rounded" style={{border:'0'}} title="jobnova" allowFullScreen></iframe>
                            </div>

                            <div className="mt-3">
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Founded:</span>
                                    <span>1984</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Founder:</span>
                                    <span>Liu Chuanzhi</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Headquarters:</span>
                                    <span>Hong Kong</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Number of employees:</span>
                                    <span>+ 75000</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Website:</span>
                                    <span>www.lenovo.com</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <span className="text-muted fw-medium">Social:</span>
                                    
                                    <ul className="list-unstyled social-icon text-sm-end mb-0">
                                        <li className="list-inline-item"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble className="fea icon-sm align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><FiLinkedin className="fea icon-sm align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FiFacebook className="fea icon-sm align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FiInstagram className="fea icon-sm align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><FiTwitter className="fea icon-sm align-middle"/></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-top">
                                <h5>Get in touch !</h5>
                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Your Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                            </div> 
                                        </div>
        
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Subject</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Comments <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Related Companies</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {jobData.slice(4,8).map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5" key={index}>
                            <div className="employer-card position-relative bg-white rounded shadow p-4 mt-3">
                                <div className="employer-img d-flex justify-content-center align-items-center bg-white shadow-md rounded">
                                    <Image src={item.image} width={36} height={36} className="avatar avatar-ex-small" alt=""/>
                                </div>

                                <div className="content mt-3">
                                    <Link href={`/employer-profile/${item.id}`} className="title text-dark h5">{item.name}</Link>

                                    <p className="text-muted mt-2 mb-0">Digital Marketing Solutions for Tomorrow</p>
                                </div>

                                <ul className="list-unstyled d-flex justify-content-between align-items-center border-top mt-3 pt-3 mb-0">
                                    <li className="text-muted d-inline-flex align-items-center"><FiMapPin className="fea icon-sm me-1 align-middle"/>{item.country}</li>
                                    <li className="list-inline-item text-primary fw-medium">{item.vacancy} Jobs</li>
                                </ul>
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