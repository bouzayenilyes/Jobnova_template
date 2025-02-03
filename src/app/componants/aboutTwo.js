import React from "react";
import Link from "next/link";

import { servicesData } from "../data/data";

export default function AboutTwo(){
    return(
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
            {servicesData.slice(0,4).map((item,index)=>{
                let Icon = item.icon
                return(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2" key={index}>
                        <div className="position-relative features text-center p-4 rounded shadow bg-white">
                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                <Icon className="fea icon-ex-md"/>
                            </div>
    
                            <div className="mt-4">
                                <Link href="" className="title h5 text-dark">{item.title}</Link>
                                <p className="text-muted mt-3 mb-0">{item.desc}</p>
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
    )
}