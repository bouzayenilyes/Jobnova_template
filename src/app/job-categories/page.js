import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import Faq from "../componants/faq";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { categoriesData } from "../data/data";

export default function JobCategories(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/hero/bg.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Categories</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Jobnova</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Categories</li>
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
                <div className="row row-cols-lg-5 row-col-md-4 row-cols-sm-2 row-cols-1 g-4">
                    {categoriesData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="col" key={index}>
                                <div className="position-relative job-category text-center px-4 py-5 rounded shadow">
                                    <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                        <Icon className="fea icon-ex-md"/>
                                    </div>
            
                                    <div className="mt-4">
                                        <Link href="" className="title h5 text-dark">{item.title} <br/> {item.title2}</Link>
                                        <p className="text-muted mb-0 mt-3">{item.jobs}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Faq/>
            </div>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}