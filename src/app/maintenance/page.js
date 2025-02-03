import React from 'react'
import Image from 'next/image';

import CountDownTwo from '../componants/countDownTwo';

export default function Maintenance(){
    return(
    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/hero/bg2.jpg')", backgroundPosition:'top'}}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <Image src='/images/logo-icon-80-white.png' width={80} height={80} alt=""/>
                    <h2 className="title-dark text-white text-uppercase mt-2 mb-4 fw-semibold">We are back soon...</h2>
                    <p className="text-white-50 para-desc para-dark mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies weve helped recruit excellent applicants over the years.</p>
                </div>
            </div>

            <div className="row">
               <CountDownTwo/>
            </div>

            <div className="row mt-4 pt-2">
                <div className="col-12 text-center">
                    <div className="subscribe-form">
                        <form className="mx-auto">
                            <input name="email" id="email" type="email" className="rounded-pill bg-white" required="" placeholder="Your email :"/>
                            <button type="submit" className="btn btn-primary rounded-pill">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
