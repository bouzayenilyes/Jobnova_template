'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

export default function AboutUs({containerClass}){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
            <div className={containerClass}>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 col-md-6 mb-5">
                        <div className="about-left">
                            <div className="position-relative shadow rounded img-one">
                                <Image src='/images/about/ab01.jpg' width={0} height={0} sizes='100vw' style={{width:'100%',height:'auto'}} className="img-fluid rounded" alt=""/>
                            </div>

                            <div className="img-two shadow rounded p-2 bg-white">
                                <Image src='/images/about/ab02.jpg' width={0} height={0} sizes='100vw' style={{width:'100%',height:'auto'}} className="img-fluid rounded" alt=""/>

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

                    <div className="col-lg-6 col-md-6">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">Millions of jobs. <br/> Find the one thats right for you.</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        
                            <ul className="list-unstyled text-muted mb-0 mt-3">
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link href="/aboutus" className="btn btn-primary">About Us <i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}