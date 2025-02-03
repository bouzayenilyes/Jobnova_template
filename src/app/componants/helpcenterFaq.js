"use client"
import React, { useState } from "react";
import { Link as Link2 } from 'react-scroll';

import {accordionData} from "../data/data"

export default function HelpcenterFaqs(){
    let[activeIndex1,setActiveIndex1] = useState(0)
    let[activeIndex2,setActiveIndex2] = useState(0)
    let[activeIndex3,setActiveIndex3] = useState(0)
    let[activeIndex4,setActiveIndex4] = useState(0)
    return(
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                        <div className="rounded shadow p-4 sticky-bar">
                            <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link2 to="tech"  spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="general"  spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">General Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="payment"  spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="support"  spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">Support Questions</Link2></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-12">
                        <div className="section-title" id="tech">
                            <h4>Buying Product</h4>
                            <div className="accordion mt-4 pt-2">
                                {accordionData.map((item,index)=>{
                                    return(
                                    <div className="accordion-item rounded mt-2" key={index}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={`${activeIndex1 === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex1(index) }>
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`${activeIndex1 === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
                                            <div className="accordion-body text-muted">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="section-title mt-5" id="general">
                            <h4>General Questions</h4>
                            <div className="accordion mt-4 pt-2">
                                {accordionData.map((item,index)=>{
                                    return(
                                    <div className="accordion-item rounded mt-2" key={index}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={`${activeIndex2 === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex2(index) }>
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`${activeIndex2 === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
                                            <div className="accordion-body text-muted">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>


                        <div className="section-title mt-5" id="payment">
                            <h4>Payments Questions</h4>
                            <div className="accordion mt-4 pt-2">
                                {accordionData.map((item,index)=>{
                                    return(
                                    <div className="accordion-item rounded mt-2" key={index}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={`${activeIndex3 === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex3(index) }>
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`${activeIndex3 === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
                                            <div className="accordion-body text-muted">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="section-title mt-5" id="support">
                            <h4>Support Questions</h4>
                            <div className="accordion mt-4 pt-2">
                                {accordionData.map((item,index)=>{
                                    return(
                                    <div className="accordion-item rounded mt-2" key={index}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={`${activeIndex4 === index ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() => setActiveIndex4(index) }>
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`${activeIndex4 === index ? 'show' : ''} accordion-collapse border-0 collapse`}>
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
            </div>
        </section>
    )
}