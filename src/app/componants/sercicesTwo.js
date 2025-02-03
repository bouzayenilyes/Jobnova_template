'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { servicesTwo } from "../data/data";

const TinySlider = dynamic(()=>import("tiny-slider-react"),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ServicesTwo(){
    let settings = {
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
      };
    return(
        <>
        <div className="row">
            <div className="col-12 mt-4">
                <div className="tiny-five-item">
                    <TinySlider settings={settings}>
                        {servicesTwo.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="card features rounded shadow position-relative overflow-hidden m-2">
                                        <div className="card-body p-0">
                                            <div className="card-img">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                                            </div>

                                            <div className="position-absolute bottom-0 start-0 m-3">
                                                <Link href="" className="title h5 text-white">{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
        </>
    )
}