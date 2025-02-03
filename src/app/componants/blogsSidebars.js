import React from "react";
import Link from "next/link";
import Image from "next/image";
import { recentBlog } from "../data/data";

export default function BlogsSidebars(){
    
    return(
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card bg-white p-4 rounded shadow sticky-bar">
                <div>
                    <h6 className="pt-2 pb-2 bg-light rounded text-center">Search</h6>

                    <div className="search-bar mt-4">
                        <div id="itemSearch2" className="menu-search mb-0">
                            <form className="searchform">
                                <input type="text" className="form-control rounded border" name="s"  placeholder="Search..."/>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

                
                <div className="mt-4 pt-2">
                    <h6 className="pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
                    <div className="mt-4">
                        {recentBlog.map((item,index)=>{
                            return(
                            <div className="blog blog-primary d-flex align-items-center mt-3" key={index}>
                                <Image src={item.image} className="avatar avatar-small rounded" width={104} height={65} alt=""/>
                                <div className="flex-1 ms-3">
                                    <Link href="" className="d-block title text-dark fw-medium">{item.title}</Link>
                                    <span className="text-muted small">{item.date}</span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-4 pt-2 text-center">
                    <h6 className="pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
                    <ul className="tagcloud list-unstyled mt-4">
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Business</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Finance</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Marketing</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Fashion</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Bride</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Lifestyle</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Travel</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Beauty</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Video</Link></li>
                        <li className="d-inline-flex m-1"><Link href="#" className="rounded fw-medium text-dark py-1 px-2">Audio</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}