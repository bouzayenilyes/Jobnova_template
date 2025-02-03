'use client'
import React, { useState } from "react";
import Image from "next/image";

import { FiCamera } from "../assets/icons/vander"

export default function Profile(){
    let [file, setFile] = useState('/images/team/01.jpg');

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div className="col-12">
        <div className="position-relative">
            <div className="candidate-cover">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner"/>
                    <div className="relative shrink-0">
                        <Image src='/images/hero/bg5.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'250px'}} className="rounded shadow" id="profile-banner" alt=""/>
                        <label className="profile-image-label" htmlFor="pro-banner"></label>
                    </div>
                </div>
            </div>
            <div className="candidate-profile d-flex align-items-end mx-2">
                <div className="position-relative">
                    <input type="file" onChange={handleChange} style={{position:'absolute', width:'100%',height:'100%',opacity:'0.01', zIndex:'11'}}/>
                    <div className="position-relative d-inline-block">
                        <Image src={file} width={110} height={110} className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm" id="profile-image" alt=""/>
                        <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-img"><span className="btn btn-icon btn-sm btn-pills btn-primary"><FiCamera className="icons"/></span></label>
                    </div>
                </div>

                <div className="ms-2">
                    <h5 className="mb-0">Mr. Calvin Carlo</h5>
                    <p className="text-muted mb-0">Web Designer</p>
                </div>
            </div>
        </div>
    </div>
    )
}