import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CountDown from '../componants/countDown';

export default function Comingsoom(){
    
    return(
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/hero/bg2.jpg')", backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 justify-content-center p-md-5">
                            <div className="text-center">
                                <Link href="/"><Image src='/images/logo-icon-80-white.png' width={80} height={80} alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h2 className="title-dark text-white text-uppercase mt-2 mb-4 fw-semibold">We are coming soon...</h2>
                                <p className="text-white para-desc para-dark mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                            
                               <CountDown/>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-white-50">© {new Date().getFullYear()} Jobnova. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}