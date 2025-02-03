'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import { accordionData } from '../data/data';

export default function Faq(){
    let [isOpen, setOpen] = useState(false);
    let [activeIndex,setActiveIndex] = useState(0)
    return(
        <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6 mb-5">
                <div className="about-left">
                    <div className="position-relative shadow rounded img-one">
                        <Image src='/images/about/ab01.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto' }} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="img-two shadow rounded p-2 bg-white">
                        <Image src='/images/about/ab02.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto' }} className="img-fluid rounded" alt=""/>

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
                <div className="section-title mb-4 ms-lg-3">
                    <h4 className="title mb-3">Frequently Asked Questions</h4>
                    <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                
                    <div className="accordion mt-4 pt-2" id="buyingquestion">
                        {accordionData.map((item,index)=>{
                            return(
                            <div className="accordion-item rounded mt-2" key={index}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className={`${activeIndex === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex(index) }>
                                        {item.title}
                                    </button>
                                </h2>
                                <div id="collapseOne" className={`${activeIndex === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
                                    <div className="accordion-body text-muted">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}