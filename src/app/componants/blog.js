import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";
import {FiClock, FiCalendar} from "../assets/icons/vander"

export default function Blog(){
    return(
        <>
        <div className="row g-4 mt-0">
            {blogData.slice(0,3).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                            <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                                <div className="position-relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="card-overlay"></div>
                                </div>
                            </div>

                            <div className="card-body blog-content position-relative p-0">
                                <div className="blog-tag px-4">
                                    <Link href="" className="badge bg-primary rounded-pill">{item.tag}</Link>
                                </div>
                                <div className="p-4">
                                    <ul className="list-unstyled text-muted small mb-2">
                                        <li className="d-inline-flex align-items-center me-2"><FiCalendar className="fea icon-ex-sm me-1 text-dark"/>{item.date}</li>
                                        <li className="d-inline-flex align-items-center"><FiClock className="fea icon-ex-sm me-1 text-dark"/>{item.time}</li>
                                    </ul>

                                    <Link href={`/blog-detail/${item.id}`} className="title fw-semibold fs-5 text-dark">{item.title}</Link>
                                    
                                    <ul className="list-unstyled d-flex justify-content-between align-items-center text-muted mb-0 mt-3">
                                        <li className="list-inline-item me-2"><Link href="" className="btn btn-link primary text-dark">Read Now <i className="mdi mdi-arrow-right"></i></Link></li>
                                        <li className="list-inline-item"><span className="text-dark">By</span> <Link href="" className="text-muted link-title">{item.company}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}