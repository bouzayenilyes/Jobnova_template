'use client'
import React from "react";

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <div className="container">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="counter-box text-center">
                        <h1 className="fw-bold"><CountUp className="counter-value" start={0} end={1548}/>K+</h1>
                        <h6 className="counter-head text-muted text-uppercase">Job Fulfillment</h6>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="counter-box text-center">
                        <h1 className="fw-bold"><CountUp className="counter-value" start={0} end={25}/>+</h1>
                        <h6 className="counter-head text-muted text-uppercase">Branches</h6>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="counter-box text-center">
                        <h1 className="fw-bold"><CountUp className="counter-value" start={0} end={9}/>+</h1>
                        <h6 className="counter-head text-muted text-uppercase">Years Experience</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}