import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error(){
    return(
        <section className="position-relative bg-soft-primary">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            <div className="text-center">
                                <Link href="/"><Image src="/images/logo-icon-64.png" width={64} height={64} alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <Image src='/images/error.png' width={200} height={200} className="img-fluid" alt=""/>
                                <h3 className="text-dark text-uppercase mt-2 mb-4 fw-bold">Page Not Found?</h3>
                                <p className="text-muted para-desc mx-auto">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasnt found.</p>
                                
                                <div className="mt-4">
                                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-muted">© {new Date().getFullYear()} Jobnova. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}