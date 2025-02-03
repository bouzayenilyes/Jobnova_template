import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function LockScreen(){
    return(
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/hero/bg3.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxWidth:'400px'}}>
                            <div className="text-center">
                                <Image src='/images/team/01.jpg' width={80} height={80} className="avatar avatar-md-md rounded-pill mb-3 shadow" alt=""/>
                                <h6 className="text-uppercase fw-semibold mb-0">Calvin Carlo</h6>
                            </div>
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" htmlFor="loginpass">Password</label>
                                    <input type="password" className="form-control" id="loginpass" placeholder="Password"/>
                                </div>
                            
                                <div className="d-flex justify-content-between">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-label form-check-label text-muted" htmlFor="flexCheckDefault">Remember me</label>
                                        </div>
                                    </div>
                                    <span className="forgot-pass text-muted small mb-0"><Link href="/reset-password" className="text-muted">Forgot password ?</Link></span>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}