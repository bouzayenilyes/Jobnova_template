'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { jobData } from "../data/data";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

export default function Companies(){
    let [isOpen, setOpen] = useState(false);
    return(
        <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6 mb-5  order-md-2 order-1">
                <div className="about-right">
                    <div className="position-relative shadow rounded img-one">
                        <Image src='/images/about/ab03.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="img-two shadow rounded p-2 bg-white">
                        <Image src='/images/about/ab04.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>

                        <div className="position-absolute top-0 start-50 translate-middle">
                            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
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
                                        <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded shadow p-2 bg-white" alt=""/>
        
                                        <div className="content ms-3">
                                            <Link href="/employer-profile" className="h5 title text-dark">{item.name}</Link>
                                            <span className="text-muted d-flex align-items-center small mt-1">{item.vacancy} vacancy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-4">
                    <Link href="/employers" className="btn btn-link primary text-muted">See More Companies <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </div>
            </div>
        </div>
    )
}