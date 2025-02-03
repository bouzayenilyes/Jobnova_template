import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './componants/navbar'

import {FiSearch, FiClock, FiMapPin} from "./assets/icons/vander"
import AboutUs from './componants/aboutUs'
import Categories from './componants/categories'
import { jobData } from './data/data'
import AboutTwo from './componants/aboutTwo'
import Companies from './componants/companies'
import Blog from './componants/blog'
import Footer from './componants/footer'
import ScrollTop from './componants/scrollTop'

export default function Home() {
  return (
    <>
    <Navbar/>

    <section className="bg-half-170 d-table w-100 bg-primary" style={{backgroundImage:"url('/images/bg2.png')", backgroundPosition:'center'}}>
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-md-6">
                    <div className="title-heading">
                        <h1 className="heading text-white fw-bold">Get hired <br/> by the popular <br/> candidates.</h1>
                        <p className="para-desc text-white-50 mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>

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
                        <Image src='/images/hero1.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid p-5" alt=""/>

                        <div className="spinner">
                            <div className="position-absolute top-0 start-0 mt-lg-5 mt-4 ms-lg-5 ms-4">
                                <Image src='/images/company/circle-logo.png' width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute top-0 start-50 translate-middle-x">
                                <Image src='/images/company/facebook-logo.png' width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute top-0 end-0 mt-lg-5 mt-4 me-lg-5 me-4">
                                <Image src="/images/company/google-logo.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute top-50 start-0 translate-middle-y">
                                <Image src="/images/company/lenovo-logo.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute top-50 end-0 translate-middle-y">
                                <Image src="/images/company/android.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute bottom-0 start-0 mb-lg-5 mb-4 ms-lg-5 ms-4">
                                <Image src="/images/company/linkedin.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                <Image src="/images/company/skype.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
                            </div>
                            <div className="position-absolute bottom-0 end-0 mb-lg-5 mb-4 me-lg-5 me-4">
                                <Image src="/images/company/snapchat.png" width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
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
                        <Link href="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
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
                                        <Image src={item.image} width={45} height={45} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
        
                                        <div className="ms-3">
                                            <Link href="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                            <span className="text-muted d-flex align-items-center small mt-2"><FiClock  className="fea icon-sm me-1"/> {item.posted} days ago</span>
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

                <div className="col-12 d-md-none d-block">
                    <div className="text-center">
                        <Link href="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <AboutTwo/>

        <div className="container mt-100 mt-60">
            <Companies/>
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
    <ScrollTop/>
    </>
  )
}
